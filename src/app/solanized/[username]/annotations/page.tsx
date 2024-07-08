import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BoxIcon, PencilLine, Plus } from "lucide-react";
import React from "react";

type Props = {};

export default function Annotations({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="m-auto min-w-[80%]">
        <h1 className="text-2xl font-bold mb-4">Annotations</h1>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center justify-between gap-4 h-8 group hover:bg-gray-50 rounded-md px-1">
            <div className="flex flex-row items-center gap-4">
              <div className="border border-gray-300 rounded-md p-1">
                <BoxIcon
                  size={18}
                  className="hover:text-gray-500 cursor-pointer"
                />
              </div>
              <p>Note 1</p>
              <Button
                variant="ghost"
                className="p-2 h-min hidden bg-gray-100 shadow-sm hover:shadow-md group-hover:flex group-hover:flex-row group-hover:gap-4 group-hover:items-center"
              >
                <PencilLine size={14} />
              </Button>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Tooltip>
                <TooltipTrigger>
                  <Badge>2 Tags</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="outline">Tag 1</Badge>
                    <Badge variant="outline">Tag 2</Badge>
                  </div>
                </TooltipContent>
              </Tooltip>
              <p>Ago 1, 2024</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between h-8 hover:bg-gray-50 rounded-md px-1 cursor-pointer text-gray-500">
            <div className="flex flex-row items-center gap-2">
              <Plus size={18} />
              <p>Criar nova anotação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
