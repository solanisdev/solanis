"use client";

import { Button } from "@/components/ui/button";
import { Plus, PlusIcon, Shapes } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";

type Props = {};

type Widget = {
  id: number;
  title: string;
  type: string;
  h: number;
  w: number;
  minW: number;
  minH: number;
  maxH: number;
  static?: boolean;
  y: number;
};

//TODO: Implement the rest of the widgets
//TODO: Switch to components for each widget to make it easier to add new ones and calling api's
//TODO: Add a way to save the dashboard

let grid: GridStack;

export default function Dashboard({}: Props) {
  const name = "Gustavo";
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 1,
      title: "",
      type: "empty",
      h: 11,
      w: 6,
      minW: 2,
      minH: 2,
      maxH: 22,
      static: false,
      y: 0,
    },
    {
      id: 2,
      title: "",
      type: "empty",
      h: 11,
      w: 6,
      minW: 2,
      minH: 2,
      maxH: 22,
      static: false,
      y: 0,
    },
    {
      id: 3,
      title: "",
      type: "empty",
      h: 11,
      w: 6,
      minW: 2,
      minH: 2,
      maxH: 22,
      static: false,
      y: 1,
    },
    {
      id: 4,
      title: "",
      type: "empty",
      h: 11,
      w: 6,
      minW: 2,
      minH: 2,
      maxH: 22,
      static: false,
      y: 1,
    },
  ]);

  const widgetsRef = useRef(new Map());

  const getWidgetsMap = () => {
    return widgetsRef.current;
  };

  const addWidget = useCallback(
    (widget: Widget) => {
      setWidgets((widgets) => [...widgets, widget]);
    },
    [setWidgets],
  );

  const removeWidget = useCallback(
    (widget: Widget) => {
      setWidgets((widgets) => widgets.filter((w) => w.id !== widget.id));
    },
    [setWidgets],
  );

  const EmptyWidget = useCallback(() => {
    return (
      <div className="h-full w-full">
        <Button variant="outline" className="h-min p-2">
          <Plus size={14} />
        </Button>
      </div>
    );
  }, []);

  const chooseWidget = useCallback((widget: Widget) => {
    switch (widget.type) {
      case "empty":
        return <EmptyWidget key={widget.id} />;
      default:
        return <div key={widget.id}></div>;
    }
  }, []);

  const HtmlWidget = useCallback((widget: Widget) => {
    return chooseWidget(widget)
  }, []);

  useEffect(() => {
    grid = GridStack.init({ margin: 4, row: 8 });
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-between pb-4">
        <p>
          Bem vindo, <span className="font-bold">{name}</span> ao seu Dashboard!
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="h-min p-2">
              <PlusIcon size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex flex-row gap-2 justify-between cursor-pointer">
              Novo Widget <Shapes size={14} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="p-4 border border-gray-100 rounded-lg">
        <div className="grid-stack">
          {widgets.map((widg) => (
            <div
              className="grid-stack-item"
              gs-id={widg.id}
              gs-w={6}
              gs-h={4}
              key={widg.id}
              gs-no-move={widg.static}
              gs-no-resize={widg.static}
              ref={(node) => {
                const map = getWidgetsMap();
                if (node) map.set(widg, node);
                else map.delete(widg);
              }}
            >
              <div className="grid-stack-item-content bg-muted border border-primary rounded-lg p-2">
                <HtmlWidget {...widg} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
