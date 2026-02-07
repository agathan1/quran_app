import { type JSX } from "react";
import HeaderPage from "../../components/template/HeaderPage";
import { useNavigate, useParams } from "react-router";
import { useSurahById } from "@/hooks/useSurah";
import CardWrapper from "@/components/template/CardWrapper";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AyatDecoration from "@/assets/icons/AyatDecoration";
import { Skeleton } from "@/components/ui/skeleton";
// import SelectWrapper from "@/components/template/SelectWrapper";
// import {
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

export const CardHighlightSurah = ({
  namaLatin,
  nama,
  artiSurat,
  tempatTurun,
  jumlahAyat,
}: {
  namaLatin: string | JSX.Element;
  nama: string;
  artiSurat: string;
  tempatTurun: string;
  jumlahAyat: number;
}) => {
  return (
    <div>
      {/* <div className="absolute right-6 top-18 bg-putih p-1 border-2 border-hitem rounded-sm text-sm max-sm:text-xs font-medium">
        Daily Verse
      </div> */}
      <CardWrapper className="bg-biru border-putih">
        <CardHeader>
          <CardTitle className="text-putih text-left">
            <span className="text-sm max-[600px]:text-xs">{namaLatin}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-putih">
          <div className="flex text-right gap-2">
            {/* <p className="flex-grow text-xs my-auto">2</p> */}
            <p className="flex-grow text-end my-auto min-[600px]:text-4xl text-3xl">
              {nama}
            </p>
          </div>
          <div className="text-left">
            <p className="w-full text-lg max-[600px]:text-sm">{artiSurat}</p>
            <p className="w-full text-putih/60 text-sm max-[600px]:text-xs">
              {/* <p className="w-full text-putih/60 text-sm max-[600px]:text-xs" style={{WebkitTextStroke: '0.5px', WebkitTextStrokeColor: '#f4f4f4'}}> */}
              {tempatTurun} | {jumlahAyat} Ayat
            </p>
          </div>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

function DetailPage() {
  const navigate = useNavigate();

  const { slug } = useParams<{ slug: string }>();
  const surahId = slug?.split("-")[0]; // "1"

  const { data, isLoading, isError, error } = useSurahById(Number(surahId));
  const nameSurah = data?.namaLatin;
  // const audioFull = data?.audioFull;


  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <HeaderPage
        namePage={
          isLoading ? (
            <Skeleton className="bg-slate-400 h-4 w-[250px] mx-auto" />
          ) : (
            nameSurah
          )
        }
        evenHandler={backHandler}
      />

      <section className="mt-2 space-y-4 h-[calc(100vh-7rem)] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {isError && (
          <p className="text-sm max-sm:text-xs text-red-700">
            "{error?.message}". Silahkan coba lagi nanti.
          </p>
        )}
        {isLoading ? (
          <Skeleton className="bg-slate-400 h-40 w-full" />
        ) : (
          <CardHighlightSurah
            namaLatin={
              isLoading ? (
                <Skeleton className="bg-slate-400 h-4 w-[250px]" />
              ) : (
                (nameSurah as string)
              )
            }
            nama={data?.nama as string}
            artiSurat={data?.arti as string}
            jumlahAyat={data?.jumlahAyat as number}
            tempatTurun={data?.tempatTurun as string}
          />
        )}

        {isLoading &&
          [...Array(4)].map((_, index) => (
            <div className="py-4 flex flex-col space-y-5" key={index}>
              <span dir="rtl" className="flex text-right gap-2">
                <h5 className="text-3xl min-md:text-4xl">
                  <Skeleton className="bg-slate-400 h-8 w-[250px]" />
                </h5>
                {/* <AyatDecoration
                className="size-10 max-sm:size-8"
                number={ayat?.nomorAyat}
              /> */}
              </span>
              <span dir="ltr" className="w-1/2 text-left mb-2 space-y-2">
                <Skeleton className=" h-4 bg-slate-400 " />
                <Skeleton className=" h-4 bg-slate-400 " />
                {/* <h5 className="text-biru text-xs min-md:text-sm">
                {ayat?.teksLatin}
              </h5>
              <h5 className="text-hitem text-xs min-md:text-sm">
                {ayat?.teksIndonesia}
              </h5> */}
              </span>
              <hr />
            </div>
          ))}

        {data?.ayat?.map((ayat) => (
          <div className="py-4 flex flex-col space-y-5" key={ayat.nomorAyat}>
            <span dir="rtl" className="flex text-right gap-2">
              <h5 className="text-3xl min-md:text-4xl">
                {isLoading ? (
                  <Skeleton className="bg-slate-400 h-4 w-[250px]" />
                ) : (
                  ayat?.teksArab
                )}
              </h5>
              <AyatDecoration
                className="size-10 max-sm:size-8"
                number={ayat?.nomorAyat}
              />
            </span>
            <span dir="ltr" className="text-left mb-2 space-y-2">
              <h5 className="text-biru text-xs min-md:text-sm">
                {ayat?.teksLatin}
              </h5>
              <h5 className="text-hitem text-xs min-md:text-sm">
                {ayat?.teksIndonesia}
              </h5>
            </span>
            <hr />
          </div>
        ))}
      </section>

    </>
  );
}

export default DetailPage;
