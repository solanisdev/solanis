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

type Props = {
  disabled: boolean;
  addWidget: () => void;
};

export const EmptyWidget = ({ disabled, addWidget }: Props) => (
  <div className="h-full w-full flex items-center justify-center">
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
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
                  onClick={addWidget}
                >
                  Gráfico Pizza <PieChart size={14} />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex flex-row gap-2 justify-between cursor-pointer"
                  onClick={addWidget}
                >
                  Gráfico Linha <LineChart size={14} />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex flex-row gap-2 justify-between cursor-pointer"
                  onClick={addWidget}
                >
                  Gráfico Barra <BarChart size={14} />
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem
            className="flex flex-row gap-2 justify-between cursor-pointer"
            onClick={addWidget}
          >
            Notas recentes <FileStack size={14} />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex flex-row gap-2 justify-between cursor-pointer"
            onClick={addWidget}
          >
            Produtividade <Kanban size={14} />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex flex-row gap-2 justify-between cursor-pointer"
            onClick={addWidget}
          >
            Neural IA <Sparkles size={14} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
