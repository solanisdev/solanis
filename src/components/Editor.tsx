"use client";

import { EditorContext } from "@/contexts/editor-provider";
import useAnthropic from "@/hooks/useAnthropic";
import { useCallback, useContext, useEffect, useMemo } from "react";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { Input } from "./ui/input";
import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const mdeOptions = { minHeight: "100%" };

export default function Editor({ isDemo = false }: { isDemo?: boolean }) {
  const { titleRef, onChange, markdown, setMarkdown } =
    useContext(EditorContext);
  const { anthropicStream } = useAnthropic();

  const memoMdeOptions = useMemo(() => mdeOptions, []);

  const callStream = async () => {
    const title = titleRef?.current?.value || "Untitled";
    anthropicStream(title).on("text", (text: string) => {
      setMarkdown((prev: string) => prev + text);
    });
  };

  useEffect(() => {
    if (titleRef?.current) {
      titleRef.current.value = "";
    }
  }, []);

  return (
    <>
      <Button variant="ghost" disabled>
        Solanis IA v1.0
        <ChevronRight className="mr-2 h-4 w-4" />
      </Button>
      <div
        className="mb-[10px] flex w-full items-center gap-2 border border-border-200 p-3 leading-5
        rounded-lg transition-colors hover:border-border-100 placeholder:text-text-500 focus:border-accent-secondary-100
        focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 whitespace-pre-wrap resize-none
        row-start-1 row-end-2 col-start-1 col-end-2 bg-transparent tracking-tight pt-8 overflow-hidden"
      >
        <Input
          type="text"
          className="flex-grow h-12 w-full"
          placeholder="Sugira um tópico para Markdown"
          ref={titleRef}
        />
        <button
          className="inline-flex items-center justify-center relative shrink-0 ring-offset-2 ring-offset-bg-300
            ring-accent-main-100 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none
            disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none bg-[radial-gradient(ellipse,_var(--tw-gradient-stops))]
            from-bg-500/10 from-50% to-bg-500/30 border-0.5 border-400 font-medium font-styrene text-text-100/90
            transition-colors active:bg-bg-500/50 hover:text-text-000 hover:bg-bg-500/60 h-8 rounded-md px-3 text-xs
            min-w-[4rem] active:scale-[0.985] whitespace-nowrap pl-2 pr-2.5 gap-3"
          onClick={isDemo ? () => {} : callStream}
        >
          <Sparkles className="animate-pulse text-yellow-600" />
          Gerar Markdown com Solanis IA
        </button>
      </div>
      <SimpleMDE
        className="w-full h-full"
        value={markdown}
        onChange={onChange}
        options={memoMdeOptions}
      />
    </>
  );
}
