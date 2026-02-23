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

export async function POST(req: NextRequest) {
  try {
    const { county, city, priceMin, priceMax, bedsMin, bathsMin, language } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    const isEnglish = language === 'en';

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

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });
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
  } catch (error) {
    console.error('Home search error:', error);
    return NextResponse.json({ error: 'Internal server error', homes: [] }, { status: 500 });
  }
}
