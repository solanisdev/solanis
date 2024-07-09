import dynamicIconImports from "lucide-react/dynamicIconImports";

export type AnnotationT = {
  icon: keyof typeof dynamicIconImports;
  title: string;
  description: string;
  tags: string[];
  lastUpdate: string;
};
