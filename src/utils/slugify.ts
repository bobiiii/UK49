export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const generateUniqueSlug = (title: string, existingArticles: any[] = []): string => {
  const baseSlug = slugify(title);
  let slug = baseSlug;
  let counter = 1;

  // Check if slug already exists and make it unique
  while (existingArticles.some(article => article.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
};