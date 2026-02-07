// import { BuildingConstruction } from "@/assets/icons/BuildingConstruction";
import { Construction } from "@/assets/icons/Construction";
import { Error404Off } from "@/assets/icons/Error404Off";
import { Button } from "@/components/ui/button";
import { HOME_PAGE } from "@/routes/route";
import { useNavigate } from "react-router";
// import { ConstructionIcon } from 'lucide-react'

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-2rem)] flex flex-col space-y-4 justify-center items-center">
      <span className="flex items-baseline space-x-4">
        <Construction className="size-15 fill-biru mx-auto" />
        <Error404Off className="size-50 stroke-biru" />
        <Construction className="size-15 fill-biru" />
      </span>
      <p className="text-lg max-sm:text-sm min-sm:w-3/4">
        Mohon Maaf, halaman tidak ditemukan. Klik tombol "kembali" untuk pergi
        ke halaman utama!
      </p>
      <Button
        onClick={() => navigate(HOME_PAGE)}
        variant={"outline"}
        size={"sm"}
        className="bg-transparent border-biru max-sm:text-sm text-biru mt-2"
      >
        Kembali
      </Button>
    </div>
  );
}
