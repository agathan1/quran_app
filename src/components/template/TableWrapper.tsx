import { Table } from "@/components/ui/table";
import type React from "react";

type Props = {
  children: React.ReactNode
} & React.ComponentProps<typeof Table>

function TableWrapper({
  children,
  ...props
}: Props) {
  return <Table {...props}>{children}</Table>;
}

export default TableWrapper;
