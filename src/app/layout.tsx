import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Logo from "@/components/Logo";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Header from "@/components/Header";
import { ThemeProvider } from "@/contexts/theme-provider";
import { EditorProvider } from "@/contexts/editor-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solanis",
  description: "Solanis é um app de escrita e resumo de alto desempenho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            <EditorProvider>
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[900px] h-screen w-full rounded-lg border"
              >
                <ResizablePanel defaultSize={25} minSize={20}>
                  <Logo />
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
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
