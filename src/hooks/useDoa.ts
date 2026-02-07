import { getAllDoa } from "@/services/doa.service";
import { useQuery } from "@tanstack/react-query";


export const useDoa = () => {
  return useQuery({
    queryKey: ["getDoa"],
    queryFn: () => getAllDoa(),
    refetchOnWindowFocus: false,
    // staleTime: Infinity,

  });
};