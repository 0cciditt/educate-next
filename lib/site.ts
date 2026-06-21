// Production base URL, used for canonical links, the sitemap and robots.txt.
// Defaults to the live domain; override with NEXT_PUBLIC_SITE_URL (e.g. for a
// staging/preview environment). No trailing slash.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.educatelearningcenter.com"
).replace(/\/+$/, "");
