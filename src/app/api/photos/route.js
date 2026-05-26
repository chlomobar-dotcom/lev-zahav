import { NextResponse } from "next/server";
import { listPhotos } from "@/lib/photos";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/photos?year=2026&month=05  — lecture publique (galerie du site)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("year") || undefined;
    const month = searchParams.get("month") || undefined;

    const photos = await listPhotos({ year, month });
    return NextResponse.json({ photos });
  } catch (e) {
    console.error("[GET /api/photos]", e);
    return NextResponse.json({ photos: [], error: e.message }, { status: 500 });
  }
}
