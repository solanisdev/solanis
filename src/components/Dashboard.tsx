"use client";

import { Button } from "@/components/ui/button";
import {
  LucideFileText,
  LucideMessageSquareText,
  PlusIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

type Props = {};

export default function Dashboard({}: Props) {
  const name = "Gustavo";
  const notes = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => (
      <div key={i}>{i}</div>
    ));
  }, []);
  const layout = useMemo(() => {
    return notes.map((_, i) => ({
      i: i.toString(),
      x: i,
      y: 1,
      w: 1,
      h: 1,
    }));
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
      <div className="p-4">
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={800}
        >
          {notes}
        </GridLayout>
      </div>
    </div>
  );
}
