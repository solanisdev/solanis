import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/contexts/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { EditorProvider } from "@/contexts/editor-provider";
const inter = Inter({ subsets: ["latin"] });
const helvetica_neue = localFont({
  src: "./HelveticaNeue.woff2",
  display: "swap",
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  title: "Solanis - Escrita inteligente",
  description: "Solanis é um app de escrita e resumo de alto desempenho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica_neue.variable} ${inter.className} bg-background h-screen`}
      >
        <EditorProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </EditorProvider>
      </body>
    </html>
  );
}
