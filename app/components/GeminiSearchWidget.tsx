import { NextRequest, NextResponse } from 'next/server';

const APIFY_ACTOR_ID = 'maxcopell/zillow-scraper'; // or your chosen Zillow actor
const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN!;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      county,
      city,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
      language = 'en',
    } = body;

    if (!county && !city) {
      return NextResponse.json(
        { error: 'Please provide a county or a city.' },
        { status: 400 }
      );
    }

    const location =
      city && String(city).trim().length > 0
        ? `${city}, GA`
        : `${county} County, GA`;

    const apifyRunRes = await fetch(
      `https://api.apify.com/v2/acts/${encodeURIComponent(
        APIFY_ACTOR_ID
      )}/runs?token=${APIFY_API_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          search: location,
          maxItems: 40,
          priceFrom: priceMin || undefined,
          priceTo: priceMax || undefined,
          bedsMin: bedsMin || undefined,
          bathsMin: bathsMin || undefined,
        }),
      }
    );

    if (!apifyRunRes.ok) {
      const txt = await apifyRunRes.text();
      console.error('Apify run error:', txt);
      return NextResponse.json(
        { error: 'Failed to start property search.' },
        { status: 500 }
      );
    }

    const runData = await apifyRunRes.json();
    const runId = runData.data?.id;

    let items: any[] = [];
    for (let i = 0; i < 15; i++) {
      const detailsRes = await fetch(
        `https://api.apify.com/v2/actor-runs/${runId}`,
        { cache: 'no-store' }
      );
      const details = await detailsRes.json();
      const status = details.data?.status;
      if (status === 'SUCCEEDED') {
        const itemsRes = await fetch(
          `https://api.apify.com/v2/datasets/${details.data.defaultDatasetId}/items?clean=true&limit=50`
        );
        items = await itemsRes.json();
        break;
      }
      if (status === 'FAILED' || status === 'ABORTED') {
        return NextResponse.json(
          { error: 'Property search failed. Please try again.' },
          { status: 500 }
        );
      }
      await new Promise((r) => setTimeout(r, 3000));
    }

    if (!items.length) {
      return NextResponse.json(
        { homes: [], message: 'No homes found for your filters.' },
        { status: 200 }
      );
    }

    const simpleListings = items.slice(0, 30).map((item: any) => ({
      id: item.zpid || item.zillowId || item.id,
      address: item.address,
      city: item.city,
      state: item.state,
      zip: item.zipcode,
      price: item.price,
      beds: item.bedrooms,
      baths: item.bathrooms,
      homeType: item.homeType,
      url: item.url || item.detailUrl,
    }));

    const systemPrompt =
      language === 'es'
        ? 'Eres un asesor inmobiliario bilingüe que ayuda a familias Latinas en Georgia a elegir casas seguras y familiares.'
        : 'You are a bilingual real estate advisor helping Latino families in Georgia choose safe, family-friendly homes.';

    const userPrompt =
      language === 'es'
        ? `El usuario busca casa en ${location} con presupuesto entre ${
            priceMin || 'cualquiera'
          } y ${priceMax || 'cualquiera'} dólares, mínimo ${
            bedsMin || 'cualquier'
          } recámaras y ${bathsMin || 'cualquier'} baños.`
        : `The user is searching in ${location} with budget between ${
            priceMin || 'any'
          } and ${priceMax || 'any'} dollars, at least ${
            bedsMin || 'any'
          } bedrooms and ${bathsMin || 'any'} bathrooms.`;

    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' +
        GEMINI_API_KEY,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `${systemPrompt}\n\nUser request:\n${userPrompt}\n\nHere is a JSON array of candidate homes. Return a JSON array where each item has: id, address, city, state, zip, price, beds, baths, url, short_reason (max 2 sentences, in ${
                    language === 'es' ? 'Spanish' : 'English'
                  }). Do not invent homes. Only use ids from the input.\n\nCandidate homes:\n${JSON.stringify(
                    simpleListings
                  )}`,
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const txt = await geminiRes.text();
      console.error('Gemini error:', txt);
      return NextResponse.json({ homes: simpleListings }, { status: 200 });
    }

    const geminiJson = await geminiRes.json();
    let homes = simpleListings;

    try {
      const text =
        geminiJson.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed) && parsed.length) {
        homes = parsed;
      }
    } catch (e) {
      console.error('Failed to parse Gemini JSON:', e);
    }

    return NextResponse.json({ homes }, { status: 200 });
  } catch (err) {
    console.error('Home search error:', err);
    return NextResponse.json(
      { error: 'Unexpected server error.' },
      { status: 500 }
    );
  }
}


