export const surahSlug = (id: number, name: string) =>
  `${id}-${name.toLowerCase().replace(/\s+/g, "-")}`;
