import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { uploadPhoto, deletePhoto } from "@/lib/photos";

export const runtime = "nodejs";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  return null;
}

// POST /api/photos/admin  — upload (multipart/form-data : year, month, files[])
export async function POST(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const form = await request.formData();
    const year = form.get("year");
    const month = form.get("month");
    const files = form.getAll("files");

    if (!year || !month || files.length === 0) {
      return NextResponse.json(
        { error: "Champs requis : year, month, files[]" },
        { status: 400 }
      );
    }

    const uploaded = [];
    for (const file of files) {
      if (!file || typeof file === "string") continue;
      if (!file.type?.startsWith("image/")) {
        return NextResponse.json(
          { error: `Fichier non-image : ${file.name}` },
          { status: 400 }
        );
      }
      // 10 Mo max par fichier
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: `${file.name} dépasse 10 Mo` },
          { status: 400 }
        );
      }
      const blob = await uploadPhoto({
        year,
        month,
        file,
        originalName: file.name,
      });
      uploaded.push(blob);
    }
    return NextResponse.json({ uploaded });
  } catch (e) {
    console.error("[POST /api/photos/admin]", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// DELETE /api/photos/admin  — body JSON : { url }
export async function DELETE(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const { url } = await request.json();
    if (!url) {
      return NextResponse.json({ error: "url requis" }, { status: 400 });
    }
    await deletePhoto(url);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[DELETE /api/photos/admin]", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
