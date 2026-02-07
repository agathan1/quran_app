import { apiClient, surahClient } from "@/api/apiClient";
import type { AllDataImsyak } from "@/types/Imsyak.type";
import type { Surat, SuratDetail } from "@/types/Surat";

// interface ProvinsiProps {
//   data: string[];
// }

export const getAllProvinsi = async (): Promise<string[]> => {
  const { data } = await apiClient.get("imsakiyah/provinsi");
  return data.data;
};

export const getAllKabupaten = async (provinsi: string): Promise<string[]> => {
  const { data } = await apiClient.post(`imsakiyah/kabkota`, {
    provinsi,
  });

  return data.data;
};

export const getAllJadwal = async (
  provinsi?: string,
  kabupaten?: string,
): Promise<AllDataImsyak> => {
  const { data } = await apiClient.post("imsakiyah", {
    provinsi,
    "kabkota": kabupaten,
  });
  // console.log(data);

  return data.data;
};
