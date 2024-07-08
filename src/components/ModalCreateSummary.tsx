"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { InputIcon } from "@/components/ui/input-icon";
import { PencilLine } from "lucide-react";


type ModalCreateSummaryProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ModalCreateSummary({ open, setOpen }: ModalCreateSummaryProps) {
  console.log(open);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-4">Crie um resumo</h1>
          <p className="text-sm text-text-500">
            Crie um resumo para um tópico de seu interesse
          </p>
        </DialogTitle>
        <DialogDescription>
          <InputIcon startIcon={PencilLine} placeholder="Tópico de resumo" />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
