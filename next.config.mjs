/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Autorise les images distantes (Google Drive/Photos, Vimeo, YouTube, etc.)
    // Ajoutez ici les domaines de vos images si vous utilisez next/image avec des URL externes.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
