export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://world-skill-challenge.vercel.app/sitemap.xml",
  }
}
