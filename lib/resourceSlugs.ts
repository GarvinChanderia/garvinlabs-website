export const RESOURCE_SLUGS = [
  "beauty-cosmetics",
  "fashion-apparel",
  "food-beverage",
  "health-nutrition-wellness",
  "home-furniture-decor",
] as const;

export type ResourceSlug = (typeof RESOURCE_SLUGS)[number];

export function isResourceSlug(slug: string): slug is ResourceSlug {
  return (RESOURCE_SLUGS as readonly string[]).includes(slug);
}
