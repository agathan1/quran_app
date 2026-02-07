import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import {type JSX} from "react"

const HeaderPage = ({
  namePage,
  evenHandler,
}: {
  namePage?: string | JSX.Element;
  evenHandler?: () => void;
}) => {
  return (
    // <header className="grid grid-cols-[4rem_auto_4rem] justify-stretch p-6">
    //   <Button className="hover:cursor-pointer hover:border-2 bg-transparent" variant="ghost" size="icon-lg" aria-label="Submit" onClick={evenHandler}>
    //     <ArrowLeft className="size-6"/>
    //   </Button>
    //   <h1 className="text-xl font-bold my-auto">{namePage}</h1>
    // </header>
    <header className="w-full grid grid-cols-[4rem_auto_4rem] justify-stretch">
    {/* <header className="w-full grid grid-cols-[4rem_auto_4rem] justify-stretch py-4 px-2"> */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Submit"
        onClick={evenHandler}
        className="rounded-full bg-transparent hover:bg-hitem/10 "
      >
        <ArrowLeft className="size-6 max-sm:size-5" />
      </Button>
      <h4 className="text-xl font-bold grow max-sm:text-lg my-auto">
        {namePage}
      </h4>
    </header>
  );
};

export default HeaderPage;
