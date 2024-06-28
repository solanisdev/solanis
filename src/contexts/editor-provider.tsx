"use client";

import { Dispatch, RefObject, createContext, useRef, useState } from "react";
import { EditorChange } from "codemirror";

interface EditorContextProps {
  markdown: string;
  setMarkdown: Dispatch<React.SetStateAction<string>>;
  titleRef: RefObject<HTMLInputElement> | null;
  onChange: (v: string, _chobj?: EditorChange) => void;
  onBlur: () => void;
}

interface EditorProviderProps {
  children: React.ReactNode;
}

const EditorContext = createContext<EditorContextProps>(
  {} as EditorContextProps,
);

const EditorProvider = ({ children }: EditorProviderProps) => {
  const [markdown, setMarkdown] = useState("");
  const [lastTitleSaved, setLastTitleSaved] = useState("Untitled");
  const titleRef = useRef<HTMLInputElement>(null);

  const onChange = (v: string, _chobj?: EditorChange) => {
    setMarkdown(v);
  };

  const onBlur = () => {
    if (titleRef.current) {
      if (!titleRef.current.value) titleRef.current.value = lastTitleSaved;

      setLastTitleSaved(titleRef.current.value);
    }
  };

  return (
    <EditorContext.Provider
      value={{ markdown, setMarkdown, titleRef, onChange, onBlur }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
