import { list, put, del } from "@vercel/blob";

/**
 * Gestion des photos uploadées via Vercel Blob.
 *
 * Convention de nommage des fichiers :
 *   galerie/{annee}/{mois}/{timestamp}-{nom-fichier-slugifie}.{ext}
 *
 * Exemple :  galerie/2026/05/1716736452000-distribution-pessah.jpg
 */
const PREFIX = "galerie/";

function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function listPhotos({ year, month } = {}) {
  let prefix = PREFIX;
  if (year) prefix += `${year}/`;
  if (year && month) prefix += `${String(month).padStart(2, "0")}/`;

  const { blobs } = await list({ prefix, limit: 1000 });

  return blobs
    .map((b) => {
      // galerie/2026/05/1716736452000-pessah.jpg
      const parts = b.pathname.split("/");
      const [, y, m, file] = parts;
      return {
        url: b.url,
        pathname: b.pathname,
        year: y,
        month: m,
        filename: file,
        size: b.size,
        uploadedAt: b.uploadedAt,
      };
    })
    .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
}

export async function uploadPhoto({ year, month, file, originalName }) {
  const safeYear = String(year).match(/^\d{4}$/)?.[0];
  const safeMonth = String(month).padStart(2, "0").match(/^(0[1-9]|1[0-2])$/)?.[0];
  if (!safeYear || !safeMonth) {
    throw new Error("Année / mois invalides");
  }
  const filename = `${Date.now()}-${slugify(originalName || "photo.jpg")}`;
  const pathname = `${PREFIX}${safeYear}/${safeMonth}/${filename}`;

  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: false,
    contentType: file.type || "image/jpeg",
  });
  return blob;
}

export async function deletePhoto(url) {
  await del(url);
}
