"use client";

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
import { useCallback, useEffect, useRef, useState } from "react";
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
import { GridItemHTMLElement, GridStack, GridStackNode } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { EmptyWidget } from "./EmptyWidget";

type Props = {};

type Widget = {
  id: number | string;
  type: string;
  h: number;
  w: number;
  static?: boolean;
};

//TODO: Implement the rest of the widgets
//TODO: Switch to components for each widget to make it easier to add new ones and calling api's
//TODO: Add a way to save the dashboard

let grid: GridStack;
let count = 3;

export default function Dashboard({}: Props) {
  const name = "Gustavo";
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 0,
      type: "empty",
      h: 4,
      w: 6,
      static: true,
    },
    {
      id: 1,
      type: "empty",
      h: 4,
      w: 6,
      static: true,
    },
    {
      id: 2,
      type: "empty",
      h: 4,
      w: 6,
      static: true,
    },
    {
      id: 3,
      type: "empty",
      h: 4,
      w: 6,
      static: true,
    },
  ]);

  const widgetsRef = useRef(new Map());

  const getWidgetsMap = () => {
    return widgetsRef.current;
  };

  const addWidget = () => {
    count++;

    const newWidget = {
      id: count,
      type: "empty",
      h: 2,
      w: 3,
      static: true,
    };

    setWidgets([...widgets, newWidget]);

    setTimeout(() => {
      console.log(getWidgetsMap().get(count));
      grid.makeWidget(getWidgetsMap().get(count));
    }, 5);
  };

  const Widget = () => {
    return <EmptyWidget disabled={true} addWidget={addWidget} />;
  };

  useEffect(() => {
    grid = GridStack.init({ margin: 6, row: 8 });

    grid.on("dragstop", function (_event: Event, el: GridItemHTMLElement) {
      if (!el.gridstackNode) {
        throw new Error(`Error resizing element: ${el}`);
      }

      let node: GridStackNode = el.gridstackNode;
      console.log(node);
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
          Bem vindo <span className="font-bold">{name}</span>, ao seu Dashboard!
        </p>
        <Button onClick={addWidget}>Add</Button>
      </div>
      <div className="p-4 border border-gray-100 rounded-lg">
        <div className="grid-stack">
          {widgets.map((widg) => (
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
              <div className="grid-stack-item-content border border-opacity-25 rounded-lg p-2">
                <Widget />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
