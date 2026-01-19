import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: process.env.BASE_URL!,
            lastModified: new Date(2026, 0, 19),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.BASE_URL!}/privacy-policy`,
            lastModified: new Date(2026, 0, 19),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.BASE_URL!}/terms-of-service`,
            lastModified: new Date(2026, 0, 19),
            changeFrequency: "yearly",
            priority: 1,
        },
    ]
}
