import { getAllSurah, getSurahById } from "@/services/surah.service";
import { useQuery } from "@tanstack/react-query";

export const useSurah = () => {
  return useQuery({
    queryKey: ["getSurah"],
    queryFn: () => getAllSurah(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useSurahById = (id: number) => {
  return useQuery({
    queryKey: ["getSurahById", id],
    queryFn: () => getSurahById(id),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    enabled: !!id,
  });
}