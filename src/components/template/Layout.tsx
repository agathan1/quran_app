import { Suspense } from "react";
import { Outlet } from "react-router";
import LoaderModify from "./LoaderModify";
// import Botnav from "./Botnav";

export default function Layout() {
  return (
    <main className="bg-putih w-full min-h-dvh px-4 pt-4">
    {/* <main className="bg-putih w-full min-h-dvh drop-shadow-lg px-4 pt-4 "> */}
      <Suspense fallback={<LoaderModify />}>
        {/* <div className="flex flex-col"> */}
          <Outlet />
        {/* </div> */}
        {/* <Botnav /> */}
      </Suspense>
    </main>
  );
}
