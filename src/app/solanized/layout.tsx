import Sidebar from "@/components/Sidebar";
import SolanisAvatar from "@/components/SolanisAvatar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { EditorProvider } from "@/contexts/editor-provider";
import Header from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <EditorProvider>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[900px] h-screen w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={25} minSize={20}>
          <SolanisAvatar />
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <main className="flex-grow">
            <Header />
            <div className="p-4">{children}</div>
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </EditorProvider>
  );
}
