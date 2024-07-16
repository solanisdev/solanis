"use client";

import { useEffect, useRef, useState } from "react";
import { GridItemHTMLElement, GridStack, GridStackNode } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { v4 as uuidv4 } from "uuid";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  FileStack,
  Kanban,
  LineChart,
  PieChart,
  PlusIcon,
  Sparkles,
} from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";

interface Props {}

type Widget = {
  id: number | string;
  type: string;
  h: number;
  w: number;
  x?: number;
  y?: number;
  static?: boolean;
};

//TODO: Implement the rest of the widgets
//TODO: Switch to components for each widget to make it easier to add new ones and calling api's
//TODO: Add a way to save the dashboard

let grid: GridStack;

export default function DashboardPage({}: Props) {
  const name = "Gustavo";
  const [widgets, setWidgets] = useState<Widget[]>([]);

  const widgetsRef = useRef(new Map());

  const getWidgetsMap = () => {
    return widgetsRef.current;
  };

  const createWidget = (type: string) => {
    return {
      id: uuidv4(),
      type,
      h: 2,
      w: 3,
      static: false,
    } as Widget;
  };

  const addWidget = (type: string) => {
    const newWidget = createWidget(type);

    setWidgets([...widgets, newWidget]);

    setTimeout(() => {
      console.log(getWidgetsMap().get(newWidget.id));
      grid.makeWidget(getWidgetsMap().get(newWidget.id));
    }, 5);
  };

  const Widget = (widget: Widget) => {
    return <div>{widget.type} Type shi</div>;
  };

  useEffect(() => {
    grid = GridStack.init({ margin: 6, row: 8 });

    grid.on("dragstop", function (_event: Event, el: GridItemHTMLElement) {
      if (!el.gridstackNode) {
        throw new Error(`Error resizing element: ${el}`);
      }

      let node: GridStackNode = el.gridstackNode;
      setWidgets((prev) =>
        prev.map((widg) => {
          if (widg.id === node.id) {
            return { ...widg, x: node.x, y: node.y };
          }
          return widg;
        }),
      );
    });

    grid.on("resizestop", function (event: Event, el: GridItemHTMLElement) {
      if (!el.gridstackNode) {
        throw new Error(`Error resizing element: ${el}`);
      }

      let node: GridStackNode = el.gridstackNode;
      console.log(node);
    });
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-between pb-4">
        <p>
          Bem vindo <span className="font-bold">Gustavo</span>, ao seu
          Dashboard!
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild disabled={false}>
            <Button variant={"outline"} className="h-min p-2">
              <PlusIcon size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Widgets</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Gráficos</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      className="flex flex-row gap-2 justify-between cursor-pointer"
                      onClick={() => addWidget("graphPie")}
                    >
                      Gráfico Pizza <PieChart size={14} />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex flex-row gap-2 justify-between cursor-pointer"
                      onClick={() => addWidget("graphLine")}
                    >
                      Gráfico Linha <LineChart size={14} />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex flex-row gap-2 justify-between cursor-pointer"
                      onClick={() => addWidget("graphBar")}
                    >
                      Gráfico Barra <BarChart size={14} />
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem
                className="flex flex-row gap-2 justify-between cursor-pointer"
                onClick={() => addWidget("recentNotes")}
              >
                Notas recentes <FileStack size={14} />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex flex-row gap-2 justify-between cursor-pointer"
                onClick={() => addWidget("productivity")}
              >
                Produtividade <Kanban size={14} />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex flex-row gap-2 justify-between cursor-pointer"
                onClick={() => addWidget("neuralAI")}
              >
                Neural IA <Sparkles size={14} />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="p-4 border border-gray-200 rounded-lg">
        <div className="grid-stack">
          {widgets.length > 0 ? (
            widgets.map((widg) => (
              <div
                className="grid-stack-item"
                gs-w={widg.w}
                gs-h={widg.h}
                gs-no-move={`${widg.static}`}
                gs-no-resize={`${widg.static}`}
                key={widg.id}
                ref={(node) => {
                  const map = getWidgetsMap();
                  if (node) map.set(widg.id, node);
                  else map.delete(widg);
                }}
              >
                <div className="grid-stack-item-content border border-primary border-opacity-50 rounded-lg p-2">
                  <Widget {...widg} />
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-full w-full items-center  justify-center">
              <GradientHeading variant={"pink"}>
                Adicione widgets
              </GradientHeading>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
