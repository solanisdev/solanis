"use client";

import SolanisAvatar from "@/components/SolanisAvatar";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Flower2,
  Rocket,
  Palette,
  Smile,
  BarChart,
  Trophy,
  Wifi,
  BatteryCharging,
  Bluetooth,
  X,
  Minus,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Finder from "../../public/finder-icon.png";
import SolanisIconPNG from "../../public/icon-mac.png";
import Trash from "../../public/trashempty.png";
import Draggable from "react-draggable";
import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import { useRef } from "react";
import { EditorProvider } from "@/contexts/editor-provider";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const nodeRef = useRef(null);
  const username = "gustavorteuber";

  return (
    <>
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
                <div className="flex flex-col items-center gap-12 mb-32">
                  <h2 className="font-helv text-8xl mb-4 font-bold leading-[0.8] text-center tracking-tight">
                    Revolucionando a Escrita
                  </h2>
                  <p className="text-center max-w-3xl text-2xl font-extralight">
                    Solanis é um gerador de markdown de última geração,
                    projetado para criar markdowns com eficiência. <br /> <br />
                    Alimentado pela Solanis IA v1.0, esta ferramenta utiliza
                    recursos avançados de processamento de linguagem natural
                    para gerar documentos markdown de alta qualidade e bem
                    estruturados, sem esforço.
                    <br />
                  </p>
                  <p className="text-6xl font-thin leading-none tracking-tight">
                    Escreva
                    <TypeAnimation
                      sequence={[
                        " com eficiência.",
                        1000,
                        " simples.",
                        1000,
                        " com solanis.",
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={0}
                    />
                  </p>
                  <Button variant={"outline"}>Solanize-se agora</Button>
                </div>
                <div className="w-full relative hidden lg:block">
                  <div className="w-full h-[836px] border bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-md">
                    <div
                      id="menu-bar"
                      className="flex absolute right-3 top-3 flex-row rounded-lg justify-between px-3 py-1 backdrop-blur-lg bg-white bg-opacity-20 text-white select-none z-10"
                    >
                      <div className="flex flex-row items-center gap-3">
                        <Bluetooth size={16} />
                        <span className="flex flex-row text-xs gap-2 items-center">
                          80%
                          <BatteryCharging size={22} />
                        </span>
                        <Wifi size={20} />
                        <span className="text-sm">20 May 12:30</span>
                      </div>
                    </div>
                    <Draggable
                      axis="both"
                      bounds="parent"
                      handle=".drag-handler"
                      defaultPosition={{ x: 60, y: 50 }}
                      nodeRef={nodeRef}
                    >
                      <div
                        className="w-10/12 h-3/4 rounded-lg bg-white"
                        ref={nodeRef}
                      >
                        <div className="p-3 min-h-2 rounded-t-lg drag-handler bg-gray-400">
                          <div className="flex flex-row items-center gap-2">
                            <div className="rounded-full bg-red-400 w-3 h-3 flex justify-center items-center">
                              <X
                                size={8}
                                strokeWidth={4}
                                className="opacity-40"
                              />
                            </div>
                            <div className="rounded-full bg-yellow-400 w-3 h-3 flex justify-center items-center">
                              <Minus
                                size={10}
                                strokeWidth={4}
                                className="opacity-40"
                              />
                            </div>
                            <div className="rounded-full bg-green-400 w-3 h-3 flex justify-center items-center">
                              <Maximize2
                                size={6}
                                strokeWidth={4}
                                className="opacity-40 rotate-90"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="h-[94%]">
                          <EditorProvider>
                            <ResizablePanelGroup
                              direction="horizontal"
                              className="w-full rounded-lg border"
                            >
                              <ResizablePanel defaultSize={25} minSize={20}>
                                <SolanisAvatar />
                                <Sidebar />
                              </ResizablePanel>
                              <ResizableHandle withHandle />
                              <ResizablePanel defaultSize={75}>
                                <main className="flex-grow">
                                  <Header />
                                  <div className="p-4">
                                    <Editor isDemo={true} />
                                  </div>
                                </main>
                              </ResizablePanel>
                            </ResizablePanelGroup>
                          </EditorProvider>
                        </div>
                      </div>
                    </Draggable>
                    <div
                      id="dock"
                      className="h-auto absolute w-auto left-1/2 bottom-2 -translate-x-1/2 backdrop-blur-lg bg-black flex flex-row items-center gap-2 bg-opacity-30 rounded-2xl p-1"
                    >
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <div className="h-14">
                            <Image
                              className="h-14 w-14 hover:transform hover:scale-110 hover:-translate-y-1 transition-all"
                              src={Finder}
                              alt="Finder Icon"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          className="border-0 bg-slate-700 -z-10"
                          collisionPadding={10}
                        >
                          <TooltipArrow className="fill-slate-700" />
                          <p className="text-sm text-white opacity-100">
                            Finder
                          </p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <div className="h-14">
                            <Image
                              className="h-14 w-14 p-[2px] hover:transform hover:scale-110 hover:-translate-y-1 transition-all"
                              height={512}
                              width={512}
                              src={SolanisIconPNG}
                              alt="Solanis Icon"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          className="border-0 bg-slate-700 -z-10"
                          collisionPadding={10}
                        >
                          <TooltipArrow className="fill-slate-700" />
                          <p className="text-sm text-white opacity-100">
                            Solanis
                          </p>
                        </TooltipContent>
                      </Tooltip>
                      <div className="w-[1px] bg-white opacity-40 h-12"></div>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <div className="h-14">
                            <Image
                              className="h-14 w-14 p-[2px] hover:transform hover:scale-110 hover:-translate-y-1 transition-all"
                              height={512}
                              width={512}
                              src={Trash}
                              alt="Trash Icon"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          className="border-0 bg-slate-700 -z-10"
                          collisionPadding={10}
                        >
                          <TooltipArrow className="fill-slate-700" />
                          <p className="text-sm text-white opacity-100">
                            Trash
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              <section className="px-4 mx-auto flex flex-col w-full max-w-[120rem] gap-24 py-24">
                <div className="flex flex-row">
                  <div className="flex flex-col flex-grow-0 flex-shrink-0 basis-4/12 items-center p-4">
                    <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] border border-[#151515]">
                      <Rocket size={42} strokeWidth={0.5} />
                    </span>
                    <h3 className="mb-2 text-xl text-[#151515]">
                      Rapidez e Eficiência
                    </h3>
                    <p className="text-center">
                      Crie markdowns impecáveis em um piscar de olhos.
                    </p>
                  </div>
                  <div className="flex flex-col flex-grow-0 flex-shrink-0 basis-4/12 items-center p-4">
                    <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] border border-[#151515]">
                      <Brain size={42} strokeWidth={0.5} />
                    </span>
                    <h3 className="mb-2 text-xl text-[#151515] text-center">
                      IA Avançada
                    </h3>
                    <p className="text-center">
                      Tecnologia inteligente que entende suas necessidades.
                    </p>
                  </div>
                  <div className="flex flex-col flex-grow-0 flex-shrink-0 basis-4/12 items-center p-4">
                    <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] border border-[#151515]">
                      <Palette size={42} strokeWidth={0.5} />
                    </span>
                    <h3 className="mb-2 text-xl text-[#151515] text-center">
                      Recursos Completos
                    </h3>
                    <p className="text-center">
                      Tudo o que você precisa para criar markdowns incríveis.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col flex-grow-0 flex-shrink-0 basis-4/12 items-center p-4">
                    <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] border border-[#151515]">
                      <Smile size={42} strokeWidth={0.5} />
                    </span>
                    <h3 className="mb-2 text-xl text-[#151515] text-center">
                      Fácil de Usar
                    </h3>
                    <p className="text-center">
                      Interface intuitiva para iniciantes e experientes.
                    </p>
                  </div>
                  <div className="flex flex-col flex-grow-0 flex-shrink-0 basis-4/12 items-center p-4">
                    <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] border border-[#151515]">
                      <BarChart size={42} strokeWidth={0.5} />
                    </span>
                    <h3 className="mb-2 text-xl text-[#151515] text-center">
                      Aumente sua Produtividade
                    </h3>
                    <p className="text-center">Crie mais, com menos esforço.</p>
                  </div>
                  <div className="flex flex-col flex-grow-0 flex-shrink-0 basis-4/12 items-center p-4">
                    <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] border border-[#151515]">
                      <Trophy size={42} strokeWidth={0.5} />
                    </span>
                    <h3 className="mb-2 text-xl text-[#151515] text-center">
                      A Ferramenta Definitiva
                    </h3>
                    <p className="text-center">
                      Solanis é tudo que você precisa para criar markdowns
                      perfeitos.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <footer className="pt-28 pb-20 border-t">
            <div className="flex flex-col justify-center gap-16 px-4">
              <p className="text-7xl text-500 font-thin">
                Domine seus estudos.
              </p>
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
    </>
  );
}
