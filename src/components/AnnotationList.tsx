"use client";

import React from "react";
import Annotation from "@/components/Annotation";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Plus } from "lucide-react";
import { AnnotationT } from "@/types/Annotation";

type Props = {};

export default function AnnotationList({}: Props) {
  const [annotations, setAnnotations] = React.useState<AnnotationT[]>([]);
  const icon = "box" as keyof typeof dynamicIconImports;

  const renderButtonCreateAnnotation = () => {
    return (
      <div className="flex flex-row items-center gap-2 h-8 hover:bg-gray-50 rounded-md px-1 cursor-pointer text-gray-500">
        <Plus size={18} />
        <p>Criar nova anotação</p>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <Annotation
            key={index}
            description={`Description ${index + 1}`}
            icon={icon}
            title={`Note ${index + 1}`}
            tags={["Tag 1", "Tag 2"]}
            lastUpdate="Ago 1, 2024"
          />
        ))}
      </div>
      {renderButtonCreateAnnotation()}
    </>
  );
}
