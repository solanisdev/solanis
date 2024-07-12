import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("tracking-tight bg-clip-text text-transparent", {
  variants: {
    variant: {
      default:
        "bg-gradient-to-t from-neutral-700 to-neutral-800 dark:from-stone-200 dark:to-neutral-200",
      pink: "bg-gradient-to-t from-accent to-accent/90 dark:from-stone-200 dark:to-neutral-200",
      light: "bg-gradient-to-t from-neutral-200 to-neutral-300",
      secondary: "bg-gradient-to-t from-primary-foreground to-muted-foreground",
    },
    size: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      default: "font-medium",
      thin: "font-thin",
      semi: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    weight: "default",
  },
});

export interface GradientTextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

const GradientText = React.forwardRef<HTMLElement, GradientTextProps>(
  ({ variant, weight, size, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={cn(textVariants({ variant, size, weight }))}
      >
        {children}
      </span>
    );
  },
);

GradientText.displayName = "GradientText";

export type Variant = "default" | "pink" | "light" | "secondary";
export type Size = "default" | "sm" | "md" | "lg" | "xl";
export type Weight = "default" | "thin" | "base" | "semi" | "bold" | "black";

export { GradientText, textVariants };
