import SunIcon from "@/assets/icons/SunIcon";
// import { Loader } from "lucide-react";

export default function LoaderModify() {
  return (
    <div className="min-h-[calc(100vh-2rem)] flex justify-center items-center">
      <section className="space-y-2">
        <SunIcon className="size-30 mx-auto fill-amber-400 stroke-amber-400 stroke-1"/>
        {/* <Loader className="animate-spin size-20 mx-auto" /> */}
        <p className="text-lg font-bold tracking-normal">Loading...</p>
      </section>
    </div>
  );
}
