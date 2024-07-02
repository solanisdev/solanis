"use client";

import { Button } from "@/components/ui/button";
import {
  LucideFileText,
  LucideMessageSquareText,
  LucideTrash,
  PlusIcon,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";

type Props = {};

type Widget = {
  id: number;
  title: string;
  type: string;
  h: number;
  w: number;
  minW: number;
  minH: number;
};

//TODO: Implement the rest of the widgets
//TODO: Switch to components for each widget to make it easier to add new ones and calling api's
//TODO: Add a way to save the dashboard
export default function Dashboard({}: Props) {
  const name = "Gustavo";
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 1,
      title: "Notas Recentes",
      type: "note",
      h: 4,
      w: 4,
      minW: 2,
      minH: 2,
    },
    {
      id: 2,
      title: "Resumos Recentes",
      type: "summary",
      h: 4,
      w: 4,
      minW: 2,
      minH: 2,
    },
  ]);

  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);


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

  const changeType = useCallback(
    (widget: Widget, type: string) => {
      setWidgets((widgets) =>
        widgets.map((w) => (w.id === widget.id ? { ...w, type } : w)),
      );
    },
    [setWidgets],
  );

  const NoteWidget = useCallback(({ widget }: { widget: Widget }) => {
    return (
      <div className="flex flex-row gap-2 items-center">
        <div className="flex-1 text-sm font-bold">{widget.title}</div>
        <Button variant={"outline"} className="h-min p-2">
          <LucideFileText size={14} />
        </Button>
      </div>
    );
  }, []);

  const SummaryWidget = useCallback(({ widget }: { widget: Widget }) => {
    return (
      <div className="flex flex-row gap-2 items-center">
        <Button variant="destructive" className="h-min p-2">
          <LucideTrash size={14} />
        </Button>
        <div className="flex-1 text-sm font-bold">{widget.title}</div>
        <Button variant={"outline"} className="h-min p-2">
          <LucideMessageSquareText size={14} />
        </Button>
      </div>
    );
  }, []);

  const chooseWidget = useCallback((widget: Widget) => {
    switch (widget.type) {
      case "note":
        return <NoteWidget key={widget.id} widget={widget} />;
      case "summary":
        return <SummaryWidget key={widget.id} widget={widget} />;
      default:
        return <div key={widget.id}></div>;
    }
  }, []);

  const htmlWidget = useCallback((widget: Widget, i: number) => {
    const x = i > 0 ? widgets[i - 1].w : 0;
    return (
      <div
        key={widget.id}
        data-grid={{
          x: x,
          y: 0,
          w: widget.w,
          h: widget.h,
          minW: widget.minW,
          minH: widget.minH,
        }}
        className="border border-black rounded-lg p-2"
      >
        {chooseWidget(widget)}
      </div>
    );
  }, []);

  const htmlWidgets = useMemo(() => {
    return widgets.map((widget, i) => htmlWidget(widget, i));
  }, [widgets]);

  return (
    <div>
      <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-4">
        <p className="">
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
              Nova Nota <LucideFileText size={14} />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row gap-2 justify-between cursor-pointer">
              Novo Resumo <LucideMessageSquareText size={14} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="p-4">
        <ResponsiveReactGridLayout
          className="layout"
          rowHeight={30}
          width={1200}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 8, xs: 4, xxs: 2 }}
        >
          {htmlWidgets}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  );
}
