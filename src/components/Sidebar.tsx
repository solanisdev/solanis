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
import React, { useState } from "react";
import Graph from "react-graph-vis";

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

const graphOptions = {
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
	},
	height: "300px",
	width: "100%",
};

const graphData = {
	nodes: [
		{ id: 1, label: "A" },
		{ id: 2, label: "B" },
		{ id: 3, label: "C" },
	],
	edges: [
		{ from: 1, to: 2 },
		{ from: 2, to: 3 },
	],
};

export default function Sidebar() {
	const [graphEvents] = useState({});

	return (
		<Command>
			<CommandList>
				{menuList.map((menu, key) => (
					<CommandGroup key={key} heading={menu.group}>
						{menu.items.map((option, optionKey) => (
							<CommandItem
								className="flex gap-2 cursor-pointer"
								key={optionKey}
							>
								{renderIcon(option.icon)}
								{option.text}
							</CommandItem>
						))}
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
	);
}
