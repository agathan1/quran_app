import { getAllJadwal, getAllKabupaten, getAllProvinsi } from "@/services/imsakiyah.service";
import { useQuery } from "@tanstack/react-query";


export const useImsyak = () => {
  return useQuery({
    queryKey: ["getProvinsi"],
    queryFn: () => getAllProvinsi(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useKabupaten = (provinsi?: string) => {
  return useQuery({
    queryKey: ["kabupaten", provinsi],

    queryFn: () => getAllKabupaten(provinsi!),

    enabled: !!provinsi, // 🔥 magic
  });
};

export const useJadwalImsyak = (provinsi?: string, kabupaten?: string) => {
  return useQuery ({
    queryKey: ["getJadwal", provinsi, kabupaten],
    queryFn: () => getAllJadwal(provinsi,kabupaten),
    enabled: !!provinsi && !!kabupaten
  })
}