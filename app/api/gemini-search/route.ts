import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { query, lang } = await req.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    // Fetch all listings from DB to give context to Gemini
    const listings = await prisma.listing.findMany({
      select: {
        id: true,
        title_en: true,
        title_es: true,
        description_en: true,
        description_es: true,
        price: true,
        county: true,
        itinFriendly: true,
        images: true,
        bedrooms: true,
        bathrooms: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    const isEnglish = lang === 'en';

    // Build listing context for Gemini
    const listingContext = listings.map((l, i) =>
      `[${i + 1}] ID:${l.id} | ${
        isEnglish ? l.title_en : l.title_es
      } | Price: $${l.price?.toLocaleString() ?? 'N/A'} | County: ${l.county ?? 'N/A'} | ITIN: ${
        l.itinFriendly ? 'Yes' : 'No'
      } | ${isEnglish ? l.description_en : l.description_es}`
    ).join('\n');

    const systemPrompt = isEnglish
      ? `You are a bilingual real estate assistant for Latinos in Georgia, USA. 
You help users find homes based on their natural language descriptions.
Here are the available listings:\n${listingContext}\n\nInstructions:
- Analyze the user's query and match the most relevant listings from the list above.
- Return a JSON object with:
  - "summary": A friendly 1-2 sentence response addressing their needs (in English).
  - "matchedIds": An array of listing IDs that best match (up to 5), ordered by relevance. Use empty array if none match.
  - "suggestions": An array of 2-3 follow-up questions to refine the search.
- Respond ONLY with valid JSON. No markdown, no code blocks.`
      : `Eres un asistente bilingüe de bienes raíces para latinos en Georgia, EE.UU.
Ayudas a los usuarios a encontrar casas basándose en sus descripciones en lenguaje natural.
Aquí están las propiedades disponibles:\n${listingContext}\n\nInstrucciones:
- Analiza la consulta del usuario y encuentra las propiedades más relevantes de la lista anterior.
- Devuelve un objeto JSON con:
  - "summary": Una respuesta amigable de 1-2 oraciones que aborde sus necesidades (en español).
  - "matchedIds": Un array de IDs de propiedades que mejor coincidan (hasta 5), ordenados por relevancia. Usa array vacío si ninguna coincide.
  - "suggestions": Un array de 2-3 preguntas de seguimiento para refinar la búsqueda.
- Responde SOLO con JSON válido. Sin markdown, sin bloques de código.`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent([
      { text: systemPrompt },
      { text: isEnglish ? `User query: ${query}` : `Consulta del usuario: ${query}` },
    ]);

    const responseText = result.response.text().trim();

    // Parse Gemini JSON response
    let parsed: { summary: string; matchedIds: string[]; suggestions: string[] };
    try {
      // Strip markdown code fences if present
      const clean = responseText.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
      parsed = JSON.parse(clean);
    } catch {
      return NextResponse.json({
        summary: responseText,
        matchedIds: [],
        suggestions: [],
        listings: [],
      });
    }

    // Filter listings by matched IDs
    const matchedListings = (parsed.matchedIds || []).length > 0
      ? listings.filter((l) => parsed.matchedIds.includes(l.id))
      : [];

    return NextResponse.json({
      summary: parsed.summary || '',
      suggestions: parsed.suggestions || [],
      listings: matchedListings,
    });
  } catch (error) {
    console.error('Gemini search error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
