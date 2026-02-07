import { BuildingConstruction } from "@/assets/icons/BuildingConstruction";
import UnderConstruction from "@/assets/icons/UnderConstruction";
import { Button } from "@/components/ui/button";
import { HOME_PAGE } from "@/routes/route";
import { useNavigate } from "react-router";

function UnderDevelopPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-[calc(100vh-2rem)] flex flex-col justify-center items-center text-biru ">
        <span className="flex items-baseline">
          <BuildingConstruction className="size-70" />
          <UnderConstruction className="size-24" />
        </span>
        <div className="space-y-4">
          <p className="text-lg max-sm:text-sm">
            Mohon Maaf, untuk saat ini halaman atau fitur dalam masa
            pembangunan. Silahkan kembali ke halaman sebelumnya.
          </p>
          <Button
            onClick={() => navigate(HOME_PAGE)}
            size={"default"}
            variant={"outline"}
            className="mt-2 bg-biru border-hitem text-putih hover:bg-biru/80"
          >
            Kembali
          </Button>
        </div>
      </section>
    </>
  );
}

export default UnderDevelopPage;
