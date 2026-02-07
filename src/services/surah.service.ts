import {apiClient} from "@/api/apiClient";
import type { Surat, SuratDetail } from "@/types/Surat";

export const getAllSurah = async (): Promise<Surat[]> => {
  const { data } = await apiClient.get("/surat");
  return data.data;
};

export const getSurahById = async (
  id: number
): Promise<SuratDetail> => {
  const { data } = await apiClient.get(`/surat/${id}`);
  // console.log(data);
  
  return data.data;
};