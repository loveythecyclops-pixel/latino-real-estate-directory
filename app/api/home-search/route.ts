import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface HomeResult {
  id: string;
  address: string;
  city?: string;
  state?: string;
  zip?: string;
  price?: number;
  beds?: number;
  baths?: number;
  homeType?: string;
  url?: string;
  short_reason?: string;
}

function getMockHomes(county: string, city: string, priceMin: number, priceMax: number, bedsMin: number, bathsMin: number, isEnglish: boolean): HomeResult[] {
  const countyName = county || 'Gwinnett';
  const cityName = city || 'Lawrenceville';
  const minPrice = priceMin || 250000;
  const maxPrice = priceMax || 500000;
  const minBeds = bedsMin ?? 3;
  const minBaths = bathsMin ?? 2;
  const baseUrl = `https://www.zillow.com/homes/${countyName.toLowerCase()}-county-ga/`;
  const reason = isEnglish
    ? 'Great location in a Latino-friendly community with easy access to schools and shopping.'
    : 'Excelente ubicacion en una comunidad latina con facil acceso a escuelas y tiendas.';
  return [
    { id: 'hw-1', address: '1234 Maple St', city: cityName, state: 'GA', zip: '30044', price: Math.round((minPrice + maxPrice) / 2), beds: minBeds, baths: minBaths, homeType: 'Single Family', url: baseUrl, short_reason: reason },
    { id: 'hw-2', address: '5678 Oak Ave', city: cityName, state: 'GA', zip: '30045', price: Math.round((minPrice + maxPrice) / 2 + 15000), beds: minBeds + 1, baths: minBaths, homeType: 'Single Family', url: baseUrl, short_reason: reason },
    { id: 'hw-3', address: '9101 Pine Rd', city: cityName, state: 'GA', zip: '30046', price: Math.round((minPrice + maxPrice) / 2 - 20000), beds: minBeds, baths: minBaths + 1, homeType: 'Townhouse', url: baseUrl, short_reason: reason },
    { id: 'hw-4', address: '1122 Cedar Ln', city: cityName, state: 'GA', zip: '30047', price: Math.round((minPrice + maxPrice) / 2 + 30000), beds: minBeds + 1, baths: minBaths + 1, homeType: 'Single Family', url: baseUrl, short_reason: reason },
    { id: 'hw-5', address: '3344 Elm Blvd', city: cityName, state: 'GA', zip: '30048', price: Math.round((minPrice + maxPrice) / 2 - 10000), beds: minBeds, baths: minBaths, homeType: 'Condo', url: baseUrl, short_reason: reason },
    { id: 'hw-6', address: '5566 Birch Way', city: cityName, state: 'GA', zip: '30049', price: Math.round((minPrice + maxPrice) / 2 + 5000), beds: minBeds + 2, baths: minBaths, homeType: 'Single Family', url: baseUrl, short_reason: reason },
  ];
}

export async function POST(req: NextRequest) {
  try {
    const { county, city, priceMin, priceMax, bedsMin, bathsMin, language } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    const isEnglish = language === 'en';

    if (!apiKey) {
      // No API key: return mock data so widget still works
      const homes = getMockHomes(county, city, priceMin, priceMax, bedsMin, bathsMin, isEnglish);
      return NextResponse.json({ homes, source: 'mock' });
    }

    const prompt = isEnglish
      ? `You are a real estate assistant for Latino communities in Georgia, USA.
Generate a JSON array of 6 realistic home listings that match these filters:
- County: ${county || 'Gwinnett'} County, Georgia
- City: ${city || 'any city in that county'}
- Min price: ${priceMin ? '$' + priceMin : 'no minimum'}
- Max price: ${priceMax ? '$' + priceMax : 'no maximum'}
- Min bedrooms: ${bedsMin ?? 3}
- Min bathrooms: ${bathsMin ?? 2}
Each listing must be a JSON object with these exact fields:
{
  "id": "unique string id like hw-1",
  "address": "street address",
  "city": "city name",
  "state": "GA",
  "zip": "zip code",
  "price": numeric price (no commas),
  "beds": number of bedrooms,
  "baths": number of bathrooms,
  "homeType": "Single Family" or "Townhouse" or "Condo",
  "url": "https://www.zillow.com/homes/${county || 'gwinnett'}-county-ga/",
  "short_reason": "1 sentence why this home is a good match"
}
Respond ONLY with a valid JSON array. No markdown, no explanation.`
      : `Eres un asistente de bienes raices para comunidades latinas en Georgia, EE.UU.
Genera un array JSON de 6 propiedades realistas que coincidan con estos filtros:
- Condado: ${county || 'Gwinnett'} County, Georgia
- Ciudad: ${city || 'cualquier ciudad en ese condado'}
- Precio minimo: ${priceMin ? '$' + priceMin : 'sin minimo'}
- Precio maximo: ${priceMax ? '$' + priceMax : 'sin maximo'}
- Minimo de recamaras: ${bedsMin ?? 3}
- Minimo de banos: ${bathsMin ?? 2}
Cada propiedad debe ser un objeto JSON con estos campos exactos:
{
  "id": "id unico como hw-1",
  "address": "direccion",
  "city": "nombre de ciudad",
  "state": "GA",
  "zip": "codigo postal",
  "price": precio numerico (sin comas),
  "beds": numero de recamaras,
  "baths": numero de banos,
  "homeType": "Single Family" o "Townhouse" o "Condo",
  "url": "https://www.zillow.com/homes/${county || 'gwinnett'}-county-ga/",
  "short_reason": "1 oracion explicando por que esta propiedad es una buena opcion"
}
Responde SOLO con un array JSON valido. Sin markdown, sin explicaciones.`;

    // Try models in order: gemini-1.5-flash first (generous free tier), then flash-lite
    const modelsToTry = ['gemini-1.5-flash', 'gemini-2.0-flash-lite'];
    let lastError: unknown = null;

    for (const modelName of modelsToTry) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text().trim();

        let homes: HomeResult[] = [];
        try {
          const clean = responseText
            .replace(/^```json\s*/i, '')
            .replace(/^```\s*/i, '')
            .replace(/```\s*$/i, '')
            .trim();
          homes = JSON.parse(clean);
          if (!Array.isArray(homes)) homes = [];
        } catch {
          return NextResponse.json({ error: 'Failed to parse AI response', homes: [] }, { status: 500 });
        }

        return NextResponse.json({ homes });
      } catch (modelError: unknown) {
        const errMsg = modelError instanceof Error ? modelError.message : String(modelError);
        // If quota exceeded (429), try next model or fall back to mock
        if (errMsg.includes('429') || errMsg.includes('Too Many Requests') || errMsg.includes('quota')) {
          lastError = modelError;
          continue;
        }
        // For other errors, throw immediately
        throw modelError;
      }
    }

    // All models quota-exceeded: return mock data so widget still works
    console.error('All Gemini models quota exceeded, returning mock data:', lastError);
    const homes = getMockHomes(county, city, priceMin, priceMax, bedsMin, bathsMin, isEnglish);
    return NextResponse.json({ homes, source: 'mock' });

  } catch (error) {
    console.error('Home search error:', error);
    return NextResponse.json({ error: 'Internal server error', homes: [] }, { status: 500 });
  }
}
