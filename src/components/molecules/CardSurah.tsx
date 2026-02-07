// import React from "react";
import CardWrapper from "../template/CardWrapper";
import AyatDecoration from "@/assets/icons/AyatDecoration";
import { CardContent } from "../ui/card";
// import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { DETAIL_SURAH } from "@/routes/route";
import { surahSlug } from "@/utils/slugSurah";

interface CardSurahProps {
  number: number;
  name: string;
  namaLatin: string;
  arti: string;
  tempatTurun: string;
}

function CardSurah({
  number,
  name,
  namaLatin,
  arti,
  tempatTurun,
}: CardSurahProps) {
  const navigate = useNavigate();

  const handleSurah = () => {
    // localStorage.setItem("surahNumber", number.toString());
    // console.log("surah number", number);

    // navigate(`${DETAIL_SURAH}/${number}`);
    navigate(`${DETAIL_SURAH}/${surahSlug(number, namaLatin)}`);
  };

  return (
    <CardWrapper className="max-w-full h-min hover:cursor-pointer" handdleClick={handleSurah}>
      <CardContent className="px-3 flex justify-between">
        <section className="text-hitem text-left flex gap-2">
          <AyatDecoration className="size-10 max-sm:size-8 " number={number} />
          <div className="flex flex-col">
            <p className="text-base max-sm:text-sm font-semibold text-biru">
              {namaLatin}
            </p>
            <p className="text-[10px] min-sm:text-xs">{arti}</p>
            <p className="text-[10px] min-sm:text-xs">{tempatTurun}</p>
          </div>
        </section>
        <h3 className=" text-2xl text-biru">{name}</h3>
      </CardContent>
    </CardWrapper>
  );
}

export default CardSurah;
