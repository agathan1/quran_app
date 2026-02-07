import type { Surat } from "@/types/Surat";

export function filterSurah(
  surah: Surat[],
  keyword: string
) {
  if (!keyword) return surah;

  const q = keyword.toLowerCase();

  return surah.filter((item) =>
    item.namaLatin.toLowerCase().includes(q)
    // item.arti.toLowerCase().includes(q)
  );
}