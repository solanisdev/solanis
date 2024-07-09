import AnnotationList from "@/components/AnnotationList";
import React from "react";

type Props = {};

export default function AnnotationsPage({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="m-auto min-w-[80%]">
        <h1 className="text-2xl font-bold mb-4">Annotations</h1>
        <AnnotationList />
      </div>
    </div>
  );
}
