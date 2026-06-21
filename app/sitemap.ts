import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// All public, indexable routes on the site.
const routes = [
  "",
  "/aliados",
  "/programas/young-learners",
  "/programas/live-english",
  "/programas/espanol-para-extranjeros",
  "/programas/extracurriculares",
  "/programas/centros-educativos",
  "/programas/preparacion-examenes-internacionales",
  "/programas/summer-camp",
  "/programas/recess-camp",
  "/programas/spring-break-camp",
  "/programas/winter-camp",
  "/habeas-data",
];

function meta(path: string): {
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
} {
  if (path === "") return { changeFrequency: "weekly", priority: 1 };
  if (path === "/habeas-data")
    return { changeFrequency: "yearly", priority: 0.3 };
  if (path === "/aliados") return { changeFrequency: "monthly", priority: 0.7 };
  return { changeFrequency: "monthly", priority: 0.8 };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    ...meta(path),
  }));
}
