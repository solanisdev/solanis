"use client";

import SolanisAvatar from "@/components/SolanisAvatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  BarChart,
  Brain,
  Flower2,
  Palette,
  Rocket,
  Smile,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/gradient-text";
import { Skeleton } from "@/components/ui/skeleton";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import SparklesText from "@/components/ui/sparkles-text";

export default function Home() {
  const bentoItems = [
    {
      title: "Rapidez e Eficiência",
      description: (
        <GradientText size={"sm"}>
          Crie markdowns impecáveis em um piscar de olhos.
        </GradientText>
      ),
      icon: <Rocket className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton className="w-full h-full" />,
    },
    {
      title: "IA Avançada",
      description: (
        <GradientText size={"sm"}>
          Tecnologia inteligente que entende suas necessidades.
        </GradientText>
      ),
      icon: <Brain className="h-4 w-4 text-neutral-500" />,
      className: "col-span-2",
      header: <Skeleton className="w-full h-full" />,
    },
    {
      title: "Recursos Completos",
      description: (
        <GradientText size={"sm"}>
          Tudo o que você precisa para criar markdowns incríveis.
        </GradientText>
      ),
      icon: <Palette className="h-4 w-4 text-neutral-500" />,
      className: "col-span-3",
      header: <Skeleton className="w-full h-full" />,
    },
    {
      title: "Fácil de usar",
      description: (
        <GradientText size={"sm"}>
          Interface intuitiva e amigável para todos os usuários.
        </GradientText>
      ),
      icon: <Smile className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton className="w-full h-full" />,
    },
    {
      title: "Aumente sua Produtividade",
      description: (
        <GradientText size={"sm"}>
          Crie markdowns de alta qualidade em menos tempo.
        </GradientText>
      ),
      icon: <BarChart className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton className="w-full h-full" />,
    },
    {
      title: "A Ferramenta Definitiva",
      description: (
        <GradientText size={"sm"}>
          Solanis é a ferramenta perfeita para todos os seus projetos de
          escrita.
        </GradientText>
      ),
      icon: <Trophy className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton className="w-full h-full" />,
    },
  ];
  const words = [
    {
      text: "Escreva",
    },
    {
      text: "textos",
    },
    {
      text: "incríveis",
    },
    {
      text: "com",
    },
    {
      text: "Solanis.",
      className: "text-primary",
    },
  ];

  const username = "gustavorteuber";

  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow">
        <header className="px-4 flex items-center justify-between py-4">
          <SolanisAvatar hasBorder={false} size="LG" />
          <div className="flex gap-6">
            <Link href={"/download"} className="font-extralight border-b">
              BAIXAR
            </Link>
            <Link href={"/features"} className="font-extralight border-b">
              DESCOBRIR
            </Link>
            <Link href={"/features"} className="font-extralight border-b">
              SUPORTE
            </Link>
          </div>
          <Link href={`/solanized/${username}`}>
            <Button
              variant="ghost"
              className="flex justify-center gap-2 font-thin"
            >
              solanize-se <Flower2 strokeWidth={0.5} />
            </Button>
          </Link>
        </header>
        <main className="max-w-screen-xl pt-8 pb-8 lg:pt-14">
          <div className="flex flex-col">
            <div className="px-4 flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-12">
                <h2 className="font-helv text-8xl mb-4 font-bold leading-[0.8] text-center tracking-tight">
                  <WordFadeIn words={"Revolucionando a Escrita"} />
                </h2>
                <p className="text-center max-w-3xl text-2xl font-extralight">
                  Solanis é um gerador de markdown de última geração, projetado
                  para criar markdowns com eficiência. <br /> <br />
                  Alimentado pela{" "}
                  <SparklesText
                    text="Solanis IA v1.0"
                    colors={{ first: "#8c75ff", second: "#FFA500" }}
                  />
                  esta ferramenta utiliza recursos avançados de processamento
                  de linguagem natural para gerar documentos markdown de alta
                  qualidade e bem estruturados, sem esforço.
                  <br />
                </p>
                <TypewriterEffectSmooth
                  words={words}
                  cursorClassName="bg-primary"
                  className="text-xl"
                />
                <Button variant={"outline"}>Solanize-se agora</Button>
              </div>
              <div className="w-full overflow-hidden">
                <ContainerScroll
                  titleComponent={
                    <GradientHeading size={"xl"}>
                      Desbloqueie o poder do <br />
                      <GradientHeading
                        size={"xxl"}
                        variant={"solanis"}
                        className="text-primary mt-1 leading-none"
                      >
                        Solanis
                      </GradientHeading>
                    </GradientHeading>
                  }
                >
                  <Image
                    src="/solanis.jpeg"
                    alt="Solanis"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                  />
                </ContainerScroll>
              </div>
            </div>
            <BentoGrid className="mx-auto px-4 py-24 max-w-[120rem]">
              {bentoItems.map((item, index) => (
                <BentoGridItem
                  key={index}
                  {...item}
                  className={cn("[&>p:text-lg]", item.className)}
                />
              ))}
            </BentoGrid>
          </div>
        </main>
        <footer className="pt-28 pb-20 border-t">
          <div className="flex flex-col justify-center gap-16 px-4">
            <p className="text-7xl text-500 font-thin">Domine seus estudos.</p>
            <div className="flex flex-row items-center gap-4">
              <p className="text-sm font-thin w-full">© Solanis Team</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/solanisdev/solanis"
                  target="_blank"
                  rel="noreferrer"
                  className="font-thin hover:text-gray-600 text-sm"
                >
                  Github
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="font-thin hover:text-gray-600 text-sm"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
