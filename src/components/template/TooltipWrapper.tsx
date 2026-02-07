import React from "react";
import { Tooltip, TooltipProvider } from "../ui/tooltip";

export default function TooltipWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>{children}</Tooltip>
    </TooltipProvider>
  );
}
