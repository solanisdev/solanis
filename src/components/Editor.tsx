"use client";

import { EditorContext } from "@/contexts/editor-provider";
import useAnthropic from "@/hooks/useAnthropic";
import { useContext, useEffect, useMemo } from "react";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const mdeOptions = { minHeight: "100%" };

export default function Editor() {
  const { titleRef, onChange, onBlur, markdown, setMarkdown } =
    useContext(EditorContext);
  const { anthropicStream } = useAnthropic();

  const memoMdeOptions = useMemo(() => mdeOptions, []);

  const callStream = async () => {
    const title = titleRef?.current?.value || "Untitled";
    anthropicStream(title).on("text", (text) => {
      setMarkdown((prev: string) => prev + text);
    });
  };

  useEffect(() => {
    if (titleRef?.current) {
      titleRef.current.value = "Untitled";
    }
  }, []);

  return (
    <>
      <div className="w-full flex justify-between">
        <input
          className="font-semibold text-4xl pb-2 focus:outline-none w-full"
          onBlur={onBlur}
          ref={titleRef}
        />
        <Button variant="ghost" onClick={() => callStream()}>
          <Sparkles className="animate-pulse text-violet-600" />
        </Button>
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
