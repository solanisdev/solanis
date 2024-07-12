"use client";

import { GradientHeading } from "./ui/gradient-heading";
import { GradientText } from "./ui/gradient-text";

export default function UserItem() {
  return (
    <div className="flex items-center p-4 rounded-xl gap-4 h-10">
      <div className="avatar rounded-full min-h-12 min-w-12 bg-yellow-500 font-[700] flex justify-center items-center">
        <GradientHeading variant={"default"} size={"xxs"}>
          GR
        </GradientHeading>
      </div>
      <div className="flex flex-col">
        <GradientText variant={"default"} weight={"bold"}>
          gustavorteuber
        </GradientText>
        <GradientText variant={"default"} size={"sm"}>
          gustavorteuber@dev.com
        </GradientText>
      </div>
    </div>
  );
}
