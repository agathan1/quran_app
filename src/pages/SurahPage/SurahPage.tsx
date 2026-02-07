import CardSurah from "@/components/molecules/CardSurah";
import HeaderPage from "@/components/template/HeaderPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useSurah } from "@/hooks/useSurah";
import { useSurahSearch } from "@/hooks/useSurahSearch";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

function SurahPage() {
  // const [isFilter, setIsFilter] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading: isLoadingSurah, isError, error } = useSurah();
  const { inputValue, setInputValue, submitSearch, result, currentValueInSearch, isSearching } = useSurahSearch(data);

  const HandleBack = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   console.log("tessssss");
    
  // }, [])  

  // if (isLoading) return <p>Loading...</p>;


  console.log("result", result.length);
  

  return (
    <div className="pt-2 font-poppins text-hitem">
      <HeaderPage namePage="Surah Al-Quran" evenHandler={HandleBack} />
      {/* Search bar */}
      <section className="mt-4">
        <div className="flex w-full items-center gap-2">
          <Input
            // onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
            type="search"
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") submitSearch();
            }}
            placeholder="Silahkan cari surat disini"
            className="border-2 border-neutral-950/50 focus-visible:border-none"
          />
          <Button
            type="submit"
            variant="outline"
            onClick={submitSearch}
            className="bg-transparent border-2 border-neutral-950/50"
            size={"icon-sm"}
          >
            <Search />
          </Button>
        </div>
      </section>
      {/* Search bar */}

      {/* Component List surah */}
      <section className="mt-4">

         {result.length === 0 && (
          <p className="text-red-700 text-sm max-sm:text-xs">
            Surah "{currentValueInSearch.current}" tidak ditemukan
          </p>
        )}

        {result ? (
          <div className="grid min-sm:grid-cols-2 gap-2 h-[calc(100vh-10rem)] grid-flow-row auto-rows-max overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-lg">
            {result?.map((item, index) => (
              <CardSurah
                key={index}
                number={item.nomor}
                name={item.nama}
                namaLatin={item.namaLatin}
                arti={item.arti}
                tempatTurun={item.tempatTurun}
              />
            ))}
          </div>
        ) : (
          isLoadingSurah || isSearching && (
            <div className="grid min-sm:grid-cols-2 gap-2 h-[calc(100vh-26rem)] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-lg">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="max-w-full bg-slate-400" />
              ))}{" "}
            </div>
          )
        ) }

        

        {isError && (
          <p className="text-red-700 text-sm max-sm:text-xs">
            "{error?.message}". Silahkan coba lagi nanti.
          </p>
        )}
      </section>
      {/* Component List surah */}
    </div>
  );
}

export default SurahPage;


  // const HandleTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const searchSurah = async () => {
  //   setSearchLoading(true);
  //   // setIsFilter(true)

  //   const surahFilter = data?.filter((surah) => {
  //     return surah.namaLatin.toLowerCase().includes(filter.toLowerCase());
  //   });
  //   currentSurahInSearch.current = filter;

  //   setDataFilter(surahFilter || [])
  //   setSearchLoading(false);
  // };

  //  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilter(e.target.value);
  //   console.log(e.target.value);

  // };

  // // // Fungsi untuk mendeteksi tombol Enter
  // const handleKeyDown = (e: React.KeyboardEvent) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault(); // Mencegah form submit default
  //     searchSurah();
  //   }
  // };

  //  useEffect(() => {
  //   if (filter.trim() === "") {
  //     // setSearchLoading(false);
  //     currentSurahInSearch.current = "";
  //   }
  // }, [filter]);

  // console.log("dataFilter", dataFilter);
  // console.log("search", searchLoading);


        {/* {data ? (
          <div className="grid min-sm:grid-cols-2 gap-2 h-[calc(100vh-10rem)] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {data?.map((item, index) => (
              <CardSurah
                key={index}
                number={item.nomor}
                name={item.nama}
                namaLatin={item.namaLatin}
                arti={item.arti}
                tempatTurun={item.tempatTurun}
              />
            ))}
          </div>
        ) : (
          isLoadingSurah && (
            <div className="grid min-sm:grid-cols-2 gap-2 h-[calc(100vh-26rem)] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-lg">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="max-w-full bg-slate-400" />
              ))}{" "}
            </div>
          )
        )} */}
