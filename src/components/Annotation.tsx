"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle, PencilLine } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import DynamicIcon from "@/components/DynamicIcon";
import { AnnotationT } from "@/types/Annotation";

export default function Annotation({
  icon,
  title,
  description,
  tags,
  lastUpdate,
}: AnnotationT) {
  const renderTags = () => {
    return tags.map((tag, index) => (
      <Badge key={index} variant="outline">
        {tag}
      </Badge>
    ));
  };

  return (
    <div className="flex flex-row items-center justify-between gap-4 h-8 group hover:bg-gray-50 rounded-md px-1">
      <div className="flex flex-row items-center gap-4">
        <div className="border border-gray-300 rounded-md p-1">
          <Suspense
            fallback={<LoaderCircle size={18} className="animate-spin" />}
          >
            <DynamicIcon
              name={icon}
              size={18}
              className="hover:text-gray-500 cursor-pointer"
            />
          </Suspense>
        </div>
        <p>{title}</p>
        <Button
          variant="outline"
          className="p-[4px] h-min w-8 hidden bg-gray-100 shadow-sm hover:shadow-md group-hover:flex group-hover:flex-row group-hover:gap-4 group-hover:items-center"
        >
          <PencilLine size={14} />
        </Button>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Tooltip>
          <TooltipTrigger>
            <Badge>{tags.length} Tags</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex flex-col items-center gap-2">
              {renderTags()}
            </div>
          </TooltipContent>
        </Tooltip>
        <p>{lastUpdate}</p>
      </div>
    </div>
  );
}
