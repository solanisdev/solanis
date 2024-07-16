import AnnotationList from "@/components/AnnotationList";
import { GradientHeading } from "@/components/ui/gradient-heading";
import React from "react";

type Props = {};

export default function AnnotationsPage({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <GradientHeading variant={"default"} size={"xs"}>
        Anotações
      </GradientHeading>
      <AnnotationList />
    </div>
  );
}
