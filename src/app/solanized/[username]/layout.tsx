import Sidebar from "@/components/Sidebar";
import SolanisAvatar from "@/components/SolanisAvatar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Header from "@/components/Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: { username: string };
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[900px] h-screen w-full rounded-lg"
      >
        <ResizablePanel defaultSize={25} minSize={20}>
          <SolanisAvatar />
          <Sidebar params={params} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <main className="flex-grow">
            <Header />
            <div className="p-4">{children}</div>
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
