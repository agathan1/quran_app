import CardWrapper from "@/components/template/CardWrapper";
import HeaderPage from "@/components/template/HeaderPage";
import SelectWrapper from "@/components/template/SelectWrapper";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useImsyak, useJadwalImsyak, useKabupaten } from "@/hooks/useImsyak";
import { HOME_PAGE } from "@/routes/route";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { imsyakschema } from "@/schemas/imsyak.schema";
import TableWrapper from "@/components/template/TableWrapper";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Imsyak } from "@/types/imsyak.type";
import { CircleAlert } from "lucide-react";
import TooltipWrapper from "@/components/template/TooltipWrapper";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

function ImsyakPage() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useImsyak();

  const formik = useFormik({
    initialValues: {
      provinsi: "",
      kabupaten: "",
    },
    validationSchema: imsyakschema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    data: DataKabupaten,
    isLoading: kabLoading,
    error: kabError,
    isError: kabIsError,
  } = useKabupaten(formik.values.provinsi);

  const {
    data: DataJadwal,
    isLoading: jadwalLoading,
    error: jadwalError,
  } = useJadwalImsyak(formik.values.provinsi, formik.values.kabupaten);

  const backHandler = () => {
    navigate(HOME_PAGE);
  };
  return (
    <>
      <HeaderPage namePage={"Imsyakiyah"} evenHandler={backHandler} />

      <section className="mt-2">
        <p className="min-sm:text-sm text-xs font-poppins text-biru w-3/4 max-sm:w-full mx-auto">
          Jadwal Imsyakiyah 1447 H / 2026 M
          {/* Lihat jadwal imsakiyah dan waktu sholat selama bulan Ramadhan untuk
          wilayah Anda. Pilih provinsi dan kabupaten/kota untuk melihat jadwal
          lengkap. */}
        </p>
      </section>

      <section className="mt-2">
        <CardWrapper>
          <CardHeader className="font-poppins text-hitem text-start ">
            <h4 className="font-semibold min-sm:text-lg text-base">Provinsi</h4>
            <p className="text-xs min-sm:text-sm">
              Pilih provinsi domisili Anda
            </p>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <Skeleton className="max-w-full h-6 bg-slate-400/20" />
            )}
            {isError ? (
              <p className="text-sm max-sm:text-xs text-red-700">
                "{error?.message}". Silahkan coba lagi nanti.
              </p>
            ) : (
              data && (
                <SelectWrapper
                  onValueChange={(value) =>
                    formik.setFieldValue("provinsi", value)
                  }
                >
                  <SelectTrigger className="w-full text-xs focus-visible:ring-biru">
                    <SelectValue placeholder="-- Pilih Provinsi --" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectLabel>Provinsi</SelectLabel>
                      {data?.map((provinsi: string) => (
                        <SelectItem
                          value={provinsi}
                          key={provinsi}
                          className="text-xs"
                        >
                          {provinsi}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </SelectWrapper>
              )
            )}
          </CardContent>
        </CardWrapper>
      </section>

      <section className="mt-4">
        <CardWrapper>
          <CardHeader className="font-poppins text-hitem text-start ">
            <h4 className="font-semibold min-sm:text-lg text-base">
              Kabupaten/kota
            </h4>
            <p className="text-xs min-sm:text-sm">
              Pilih Kabupaten/kota domisili Anda
            </p>
          </CardHeader>
          <CardContent>
            {kabIsError ? (
              <p className="text-sm max-sm:text-xs text-red-700">
                "{kabError?.message}". Silahkan coba lagi nanti.
              </p>
            ) : (
              <SelectWrapper
                disabled={!formik.values.provinsi}
                onValueChange={(value) =>
                  formik.setFieldValue("kabupaten", value)
                }
              >
                <SelectTrigger className="w-full text-xs focus-visible:ring-biru">
                  <SelectValue
                    placeholder={
                      kabLoading ? "Loading..." : "-- Pilih Kabupaten --"
                    }
                  />
                </SelectTrigger>
                <SelectContent position="popper">
                  {DataKabupaten?.map((kab: string) => (
                    <SelectItem
                      key={kab}
                      value={kab}
                      onClick={() => formik.setFieldValue("kabupaten", kab)}
                    >
                      {kab}
                    </SelectItem>
                  ))}
                  {/* <SelectGroup>
                  <SelectLabel>Kabupaten/Kota</SelectLabel>
                </SelectGroup> */}
                </SelectContent>
              </SelectWrapper>
            )}
          </CardContent>
        </CardWrapper>
      </section>

      <section className="mt-4 mb-10">
        {jadwalError ? (
          <p className="text-sm max-sm:text-xs text-red-700">
            "{jadwalError?.message}". Silahkan coba lagi nanti.
          </p>
        ) : null}
        {jadwalLoading ? (
          <Skeleton className="max-w-full bg-slate-400" />
        ) : // <p className="text-sm max-sm:text-xs text-red-700">
        //   Loading...
        // </p>
        null}
        {!formik.values.kabupaten ? (
          <p className="text-sm max-sm:text-xs text-red-700">
            Silahkan pilih provinsi dan kabupaten/kota terlebih dahulu
          </p>
        ) : (
          <div>
            <div className="text-start font-semibold text-xl text-biru flex items-center space-x-2">
              <span className="max-sm:text-base">
                Jadwal Imsyak {formik.values.kabupaten}
              </span>
              <TooltipWrapper>
                <TooltipTrigger>
                  <CircleAlert className="max-sm:size-6" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Scroll kanan dan kiri untuk melihat seluruh jadwal</p>
                </TooltipContent>
              </TooltipWrapper>
            </div>
            <div className="h-[calc(50vh-3rem)] max-sm:h-[calc(50vh-2.2rem)] mt-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <TableWrapper className=" border-2 rounded-lg">
                <TableHeader className="bg-biru/20">
                  <TableRow>
                    {[
                      "Hari ke",
                      "Imsak",
                      "Subuh",
                      "Terbit",
                      "Dhuha",
                      "Dzuhur",
                      "Ashar",
                      "Maghrib",
                      "Isya",
                    ].map((head) => (
                      <TableHead
                        key={head}
                        className={`${head == "Imsak" || head == "Maghrib" ? "text-biru" : "text-hitem"} w-auto`}
                      >
                        {head}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {DataJadwal?.imsakiyah?.map((imsyak: Imsyak) => (
                    <TableRow key={imsyak.tanggal} className="mx-auto">
                      <TableCell className="text-center">
                        {imsyak.tanggal}
                      </TableCell>
                      <TableCell className="text-biru text-start">
                        {imsyak.imsak}
                      </TableCell>
                      <TableCell>{imsyak.subuh}</TableCell>
                      <TableCell>{imsyak.terbit}</TableCell>
                      <TableCell>{imsyak.dhuha}</TableCell>
                      <TableCell>{imsyak.dzuhur}</TableCell>
                      <TableCell>{imsyak.ashar}</TableCell>
                      <TableCell className="text-biru">
                        {imsyak.maghrib}
                      </TableCell>
                      <TableCell>{imsyak.isya}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableWrapper>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ImsyakPage;
