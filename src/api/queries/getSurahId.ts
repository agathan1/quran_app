import type {  SuratDetail } from "@/types/Surat";
import {apiClient} from "../apiClient";

// perlu di kulik apa kegunaan dari promise
export const getSurahId = async (id: number): Promise<SuratDetail> => {
  const { data } = await apiClient.get(`surat/${id}`);
  // console.log("data", data);
  return data.data;
};