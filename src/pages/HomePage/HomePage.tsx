import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardWrapper from "@/components/template/CardWrapper";
import CardSurah from "@/components/molecules/CardSurah";
import { NavLink, useNavigate } from "react-router";
import { useSurah } from "@/hooks/useSurah";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DOA_PAGE,
  IMSYAK_PAGE,
  SHOLAT_PAGE,
  SURAH_PAGE,
  // UNDER_DEVELOP,
} from "@/routes/route";
import { PersonPraying } from "@/assets/icons/PersonPraying";
import { AlQuranIndonesia } from "@/assets/icons/AlQuranIndonesia";
import PrayerTime from "@/assets/icons/PrayerTime";
import DoaIcon from "@/assets/icons/DoaIcon";
// import type { Surat } from "@/types/Surat";
// import { useDoa } from "@/hooks/useDoa";

export const CardHighlightSurah = () => {
  return (
    <div className="relative">
      <div
        dir="rtl"
        className="absolute overflow-hidden -top-4 right-3 bg-putih p-1 border-2 border-hitem rounded-sm text-sm max-sm:text-xs font-medium"
      >
        Daily Verse
      </div>
      <CardWrapper className="bg-biru border-putih">
        <CardHeader>
          <CardTitle className="text-putih text-left">
            <p className="text-sm max-[600px]:text-xs">Al-Ikhlas (112:2)</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-putih">
          <div className="flex text-right gap-2">
            {/* <p className="flex-grow text-xs my-auto">2</p> */}
            <p className="flex-grow text-end my-auto text-3xl max-[600px]:text-xl">
              اَللّٰهُ الصَّمَدُۚ
            </p>
          </div>
          <div className="text-left">
            <p className="w-full text-lg max-[600px]:text-sm">
              Allāhuṣ-ṣamad(u).
            </p>
            <p className="w-full text-putih/60 text-sm max-[600px]:text-xs">
              {/* <p className="w-full text-putih/60 text-sm max-[600px]:text-xs" style={{WebkitTextStroke: '0.5px', WebkitTextStrokeColor: '#f4f4f4'}}> */}
              {/* God the Eternal, the Uncaused Cause of All Being. */}
              Allah tempat meminta segala sesuatu.
            </p>
          </div>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

export const CardMenusApp = () => {
  return (
    <>
      <CardWrapper>
        <CardContent className="flex justify-around font-poppins text-hitem text-xs font-medium tracking-tight">
          <NavLink
            to={SHOLAT_PAGE}
            className="space-y-2 flex flex-col items-center"
          >
            <PersonPraying
              height={"42px"}
              width={"42px"}
              className="fill-biru "
              // className="fill-biru stroke-4 stroke-biru"
            />
            <span className="max-md:text-[10px] text-biru line-clamp-2 w-min">
              Jadwal Sholat
            </span>
            {/* <p className="max-w-[50%] text-center max-sm:text-[10px]">Prayer Schedule</p> */}
          </NavLink>
          <NavLink
            to={SURAH_PAGE}
            className="space-y-2 flex flex-col items-center"
          >
            <AlQuranIndonesia
              height={"42px"}
              width={"42px"}
              className="stroke-[2.4] stroke-biru"
            />
            <span className="max-md:text-[10px] text-biru">Al Quran</span>
            {/* <p>Surah</p> */}
          </NavLink>
          <NavLink
            to={DOA_PAGE}
            className="space-y-2 flex flex-col items-center"
          >
            <DoaIcon height={"42px"} width={"42px"} className="fill-biru" />
            <span className="max-md:text-[10px] text-biru">Doa</span>
            {/* <p>Prayer</p> */}
          </NavLink>
          <NavLink
            to={IMSYAK_PAGE}
            className="space-y-2 flex flex-col items-center"
          >
            <PrayerTime
              height={"42px"}
              width={"42px"}
              className="fill-biru stroke-[2.2] stroke-biru"
            />
            <span className="max-md:text-[10px] text-biru line-clamp-2 w-fit">Imsyak</span>
            {/* <p>Imsakiyah</p> */}
          </NavLink>
        </CardContent>
      </CardWrapper>
    </>
  );
};

export default function HomePage() {
  // const [colorMode, setColorMode] = useState("light");
  // const [isData, setIsData] = useState<Surat[]>([]);

  // const handleColorMode = () => {
  //   const nextMode = colorMode === "light" ? "dark" : "light";

  //   setColorMode(nextMode);
  //   localStorage.setItem("colorMode", nextMode);
  //   // No timeout needed, and it uses the fresh 'nextMode' variable
  // };

  // // fetch data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getSurah();
  //     // console.log(response?.data);
  //     setIsData(response);
  //   };

  //   fetchData();
  // }, []);
  const { data, isLoading, isError, error } = useSurah();

  // navigation
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col">
        {/* <div className="rounded-b-2xl basis-64"> */}

        {/* header */}
        <section className="py-2 flex justify-between font-poppins">
          <div className="flex flex-col w-full text-start">
            <p className="text-hitem text-xs sm:text-sm">
              👋🏽 Hello, Welcome to..
            </p>
            <h4 className="text-base font-bold my-auto sm:text-xl">QuranKu.</h4>
          </div>
          {/*  */}
        </section>
        {/* header */}

        <div className="space-y-4">
          {/* Card highlight surah */}
          <section>
            <CardHighlightSurah />
          </section>
          {/* Card highlight surah */}

          {/* Card menus */}
          <section>
            <CardMenusApp />
          </section>
          {/* Card menus */}
        </div>

        {/* search bar */}
        {/* <section className="">
          <div className="flex w-full items-center gap-2">
            <Input
              type="search"
              placeholder="Silahkan cari surat disini"
              className="border-2 border-neutral-950/50 focus-visible:border-none"
            />
            <Button
              type="submit"
              variant="outline"
              className="bg-transparent border-2 border-neutral-950/50"
              size={"icon-sm"}
            >
              <Search />
            </Button>
          </div>
        </section> */}
        {/* search bar */}
        {/* <HeaderPage namePage="Homepage" /> */}
        {/* </div> */}

        {/* component suratnya dibawah */}
        <section className="mt-4">
          {/* fetch surat, tapi yang di tampilin cuma 5. Biar sisanya masuk ke halaman surat all */}
          {isLoading ? (
            <div className="grid min-sm:grid-cols-2 gap-2 h-[calc(100vh-26rem)] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-lg">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="max-w-full bg-slate-400" />
              ))}
            </div>
          ) : (
            <>
              <div className="grid min-sm:grid-cols-2 gap-2 max-sm:h-[calc(100vh-26rem)] min-sm:grid-flow-row min-sm:auto-rows-max overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-lg">
                {data?.map(
                  (item, index) =>
                    index < 6 && (
                      <CardSurah
                        key={index}
                        number={item.nomor}
                        name={item.nama}
                        namaLatin={item.namaLatin}
                        arti={item.arti}
                        tempatTurun={item.tempatTurun}
                      />
                    ),
                )}
              </div>
              <Button
                size={"default"}
                variant={"outline"}
                onClick={() => {
                  navigate("/surah");
                }}
                className="mt-4 bg-biru border-hitem text-putih hover:bg-biru/80"
              >
                Selengkapnya
              </Button>
            </>
          )}
          {isError && (
            <p className="text-red-700 max-sm:text-xs">
              "{error?.message}". Silahkan coba lagi nanti.
            </p>
          )}
        </section>
        {/* component suratnya dibawah */}
      </div>
    </>
  );
}

// <TooltipWrapper>
//             {/* <TooltipTrigger dataSlot="tooltip-trigger"> */}
//             <Toggle
//               onClick={handleColorMode}
//               // ariaLabel="Toggle color mode"
//               size="lg"
//               variant="default"
//               className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-neutral-900 data-[state=on]:*:[svg]:stroke-neutral-900 hover:bg-transparent/25"
//             >
//               <Moon className="size-5" />
//             </Toggle>
//             {/* </TooltipTrigger> */}
//             <TooltipContent>
//               <p className="font-poppins">Toggle Mode</p>
//             </TooltipContent>
//           </TooltipWrapper>
{
  /* <p>{isData.map((item) => item.arti)}</p> */
}
{
  /* <button onClick={handleColorMode}>ganti warna</button>
   <p>warna sekarang {colorMode}</p>
  <div className={`size-10 ${colorMode === "light" ? "bg-amber-100" : "bg-black"} `}></div> */
}
