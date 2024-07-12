"use client";

import Image from "next/image";
import SolanisTransparent from "../../public/solanis-transparent.png";
import { GradientHeading } from "@/components/ui/gradient-heading";

interface SolanisAvatarProps {
  hasBorder?: boolean;
  size?: "SM" | "MD" | "LG";
}

export default function SolanisAvatar({
  hasBorder = true,
  size = "MD",
}: SolanisAvatarProps) {
  const sizeClass = {
    SM: "min-h-10 min-w-10 h-12 w-12",
    MD: "min-h-12 min-w-12 h-14 w-14",
    LG: "min-h-14 min-w-14 h-16 w-16",
  };

  return (
    <div
      className={`flex items-center gap-2 p-2 ${hasBorder && "border border-r-0"}`}
    >
      <Image
        priority
        src={SolanisTransparent}
        alt="avatar"
        className={`avatar rounded-full ${sizeClass[size]}`}
      />
      <GradientHeading variant={"default"} size={"xs"}>
        solanis
      </GradientHeading>
    </div>
  );
}
