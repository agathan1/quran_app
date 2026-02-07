import React from "react";
import { Select } from "../ui/select";

type Props = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Select>;

function SelectWrapper({ children, ...props }: Props) {
  return (
    <div className="w-full">
      <Select {...props}>{children}</Select>
    </div>
  );
}

export default SelectWrapper;
