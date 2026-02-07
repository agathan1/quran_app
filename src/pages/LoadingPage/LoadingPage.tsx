import { Loader } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <section className="space-y-4">
        <Loader className="animate-spin size-20 mx-auto" />
        <p className="text-2xl font-bold tracking-normal">Loading...</p>
      </section>
    </div>
  )
}
