import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const body = await req.json();

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const prompt = `Act as a professional fitness coach. Goal: ${body.goal}. Return ONLY a JSON object: { "routineName": "string", "summary": "string", "plan": [] }`;

    console.log("🚀 Calling Gemini 2.5 Flash...");

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "API Failed");
    }

    const text = data.candidates[0].content.parts[0].text;
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Invalid JSON response from AI");
    
    const routineData = JSON.parse(jsonMatch[0]);

    console.log("✅ Routine Generated Successfully!");
    return NextResponse.json({ routine: routineData });

  } catch (error: unknown) {
    // এখানে 'any' এর বদলে 'unknown' ব্যবহার করে টাইপ গার্ড দেওয়া হয়েছে
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    
    console.error("🔥 Server Error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}