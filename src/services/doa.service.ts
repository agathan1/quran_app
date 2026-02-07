import {apiClient, surahClient} from "@/api/apiClient";
import type { Surat, SuratDetail } from "@/types/Surat";

interface DoaDetailProps {
    id: number,
    grup: string,
    nama: string,
    ar: string,
    tr: string,
    tentang: string;
    tag: string[];
    idn: string;
}

export const getAllDoa = async (): Promise<DoaDetailProps> => {
  const { data } = await surahClient.get("doa");
  return data.data;
};

// export const getSurahById = async (
//   id: number
// ): Promise<SuratDetail> => {
//   const { data } = await apiClient.get(`/surat/${id}`);
//   console.log(data);
  
//   return data.data;
// };