"use client";

import { Button } from "@/components/ui/button";
import {
  LucideFileText,
  LucideMessageSquareText,
  PlusIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import "gridstack/dist/gridstack.css";
import { GridStack } from "gridstack";

type Props = {};

export default function Dashboard({}: Props) {
  const name = "Gustavo";
  const [grid, setGrid] = useState<GridStack | null>(null);

  useEffect(() => {
    setGrid(
      GridStack.init({
        alwaysShowResizeHandle: true,
        cellHeight: 70,
        disableDrag: false,
        draggable: {
          handle: ".grid-stack-item-content",
        },
        float: true,
        margin: 1,
      }),
    );
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-4">
        <p className="">
          Bem vindo, <span className="font-bold">{name}</span> ao Dashboard do{" "}
          Solanis!
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="h-min p-2">
              <PlusIcon size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex flex-row gap-2 justify-between cursor-pointer">
              Nova Nota <LucideFileText size={14} />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row gap-2 justify-between cursor-pointer">
              Novo Resumo <LucideMessageSquareText size={14} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid-stack">
        <div
          className="grid-stack-item border border-gray-200 rounded-md"
          data-gs-width="4"
          data-gs-height="4"
        >
          <div className="grid-stack-item-content p-2">Item 1</div>
        </div>
      </div>
    </div>
  );
}
