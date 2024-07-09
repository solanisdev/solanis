"use client";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Settings,
  User,
  MessageSquareMore,
  MessageSquareDiff,
  FileText,
  Edit,
  Book,
} from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Graph from "react-graph-vis";
import { cn } from "@/lib/utils";
import { atom, useAtom } from "jotai";
import ModalCreateSummary from "@/components/ModalCreateSummary";

type MenuItem = {
  text: string;
  icon: string;
  link: string;
};

type MenuGroup = {
  group: string;
  items: MenuItem[];
};

const menuList: MenuGroup[] = [
  {
    group: "Menu Geral",
    items: [{ text: "Dashboard", icon: "LayoutDashboard", link: "/dashboard" }],
  },
  {
    group: "Ferramentas",
    items: [
      { text: "Criar Resumo", icon: "FileText", link: "/create-summary" },
      { text: "Editor de Markdown", icon: "Edit", link: "/markdown-editor" },
      { text: "Anotações", icon: "Book", link: "/annotations" },
    ],
  },
  {
    group: "Configurações",
    items: [
      { text: "Configurações", icon: "Settings", link: "/settings" },
      // { text: "Gerenciar Usuários", icon: "User", link: "/users" },
    ],
  },
];

function renderIcon(iconName: string) {
  switch (iconName) {
    case "LayoutDashboard":
      return <LayoutDashboard />;
    case "Profile":
      return <MessageSquareMore />;
    case "MessageSquareDiff":
      return <MessageSquareDiff />;
    case "Settings":
      return <Settings />;
    case "User":
      return <User />;
    case "FileText":
      return <FileText />;
    case "Edit":
      return <Edit />;
    case "Book":
      return <Book />;
    default:
      return null;
  }
}

export const graphOptions = {
  layout: {
    hierarchical: false,
  },
  autoResize: true,
  edges: {
    color: "#000000",
  },
  nodes: {
    color: {
      background: "#ffc800",
      border: "#ffc800",
    },
    shape: "box",
  },
  height: "300px",
  width: "100%",
};

export const graphData = {
  nodes: [
    { id: 1, label: "Otimizando Seus Estudos com o App Solanis" },
    { id: 2, label: "1. Criação de Resumos Eficazes" },
    { id: 3, label: "2. Revisão Ativa e Eficaz" },
    { id: 4, label: "3. Planejamento e Organização" },
    { id: 5, label: "4. Aprendizagem Colaborativa" },
    { id: 6, label: "5. Personalização e Flexibilidade" },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
  ],
};

type SidebarProps = {
  params?: { username: string };
};

export default function Sidebar({ params }: SidebarProps) {
  const [graphEvents] = useState({});
  const username = params?.username;

  const pathname = useCallback(() => {
    const pathName = usePathname();
    if (params && params.username) {
      return pathName.replace(`/solanized/${params.username}`, "");
    }
    return pathName;
  }, []);

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Command>
        <CommandList>
          {menuList.map((menu, key) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((option, optionKey) =>
                option.link === "/create-summary" ? (
                  <button
                    onClick={() => {
                      console.log("click");
                      setOpen(true);
                    }}
                    className="w-full"
                    key={optionKey}
                  >
                    <CommandItem
                      className={cn(
                        "flex gap-2 cursor-pointer",
                        pathname() === option.link &&
                          "border border-violet-500 bg-accent",
                      )}
                      key={optionKey}
                    >
                      {renderIcon(option.icon)}
                      {option.text}
                    </CommandItem>
                  </button>
                ) : (
                  <Link
                    href={params ? `/solanized/${username}${option.link}` : "#"}
                    key={optionKey}
                  >
                    <CommandItem
                      className={cn(
                        "flex gap-2 cursor-pointer",
                        pathname() === option.link &&
                          "border border-violet-500 bg-accent",
                      )}
                      key={optionKey}
                    >
                      {renderIcon(option.icon)}
                      {option.text}
                    </CommandItem>
                  </Link>
                ),
              )}
            </CommandGroup>
          ))}
        </CommandList>
        <CommandSeparator />
        <div className="p-2">
          <div className="p-6 border border-gray-300 rounded-lg bg-gray-100 mt-4">
            <Graph
              graph={graphData}
              options={graphOptions}
              events={graphEvents}
            />
          </div>
        </div>
      </Command>
      <ModalCreateSummary open={open} setOpen={setOpen} />
    </>
  );
}
