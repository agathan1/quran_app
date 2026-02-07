import type { Surat } from "@/types/Surat";
import {apiClient} from "../apiClient";

// perlu di kulik apa kegunaan dari promise
export const getSurah = async (): Promise<Surat[]> => {
  const { data } = await apiClient.get("surat");
  // console.log("data", data);
  return data.data;
};
