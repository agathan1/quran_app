import React from "react";
import { Card } from "../ui/card";

export default function CardWrapper({
  children,
  className,
  handdleClick,
}: {
  children: React.ReactNode;
  className?: string;
  handdleClick?: () => void;
}) {
  return <Card handleClick={handdleClick || (() => {})} className={className}>{children}</Card>;
}
