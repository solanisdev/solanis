"use client";

import SolanisAvatar from "@/components/SolanisAvatar";
import { Button } from "@/components/ui/button";
import { Equal, Flower2, NotebookPen, Plus, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll } from "framer-motion";
import SolanisTransparent from "../../public/solanis-transparent.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <div className="px-4 flex flex-col flex-grow">
          <header className="flex items-center justify-between py-4">
            <SolanisAvatar hasBorder={false} size="LG" />
            <div className="flex gap-6">
              <span>Bla 1</span>
              <span>Bla 2</span>
              <span>Bla 3</span>
              <span>Bla 4</span>
              <span>Bla 5</span>
              <span>Bla 6</span>
            </div>
            <Button
              variant="ghost"
              className="flex justify-center gap-2 font-thin"
            >
              solanize-se <Flower2 strokeWidth={0.5} />
            </Button>
          </header>
          <main className="max-w-screen-xl pt-8 pb-8 lg:pt-14">
            <div className="flex flex-col">
              <h2 className="font-helv text-8xl mb-4 font-bold leading-[0.8] tracking-tight">
                Revolucionando a Escrita
              </h2>
              <div className="flex flex-row items-center">
                <p className="text-6xl font-thin leading-none tracking-tight w-[60%]">
                  Solanis
                  <TypeAnimation
                    sequence={[
                      " é flexível.",
                      1000,
                      " é completo.",
                      2000,
                      ", feito para você.",
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={0}
                  />
                </p>
                <p className="my-4  max-w-3xl text-lg font-extralight w-[40%]">
                  Solanis é um app de escrita e anotações de alto desempenho.
                  <br />
                  <br />
                  Com Solanis, você pode escrever e resumir de maneira
                  eficiente. Além de poder utilizar IA para executar tarefas
                  difíceis de escrita de uma forma exclusiva e dinâmica.
                </p>
              </div>
              <div className="p-2 flex flex-row items-center justify-between"></div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
