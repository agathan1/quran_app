// import { useDebounce } from "./useDebounce";
import { useEffect, useMemo, useRef, useState } from "react";
import { filterSurah } from "@/utils/filterSurah";
import type { Surat } from "@/types/Surat";
export function useSurahSearch(data?: Surat[]) {

  const currentValueInSearch = useRef("");
  // input yang sedang diketik
  const [inputValue, setInputValue] = useState("");

  // keyword yang benar-benar dipakai search
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // const debouncedInput = useDebounce(inputValue, 400);
  // 1. State input
  // const [keyword, setKeyword] = useState("");

  // fungsi dipanggil saat klik / enter
  const submitSearch = () => {
    setIsSearching(true);
    setSearchKeyword(inputValue);
    // setSearchKeyword(debouncedInput);
  };

  // 2. Debounce keyword
  // const debouncedKeyword = useDebounce(keyword, 400);

  // 3. Filter data (PAKAI useMemo)
  const result = useMemo(() => {
    if (!data) return [];
    if (!searchKeyword) return data;
    currentValueInSearch.current = searchKeyword;
    return filterSurah(data, searchKeyword);

  }, [data, searchKeyword]);  

   // loading selesai saat result berubah
  useEffect(() => {
    if (isSearching) {
      setIsSearching(false);
    }
  }, [result]);

  

  return {
    inputValue,
    setInputValue,
    submitSearch,
    result,
    currentValueInSearch,
    isSearching
  };
}
