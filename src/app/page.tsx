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
} from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Finder from "../../public/finder-icon.png";
import SolanisIconPNG from "../../public/icon-mac.png";
import Trash from "../../public/trashempty.png";
import Apple from "../../public/apple.svg";
import Draggable from "react-draggable";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <div className="px-4 flex flex-col flex-grow">
          <header className="flex items-center justify-between py-4">
            <SolanisAvatar hasBorder={false} size="LG" />
            <div className="flex gap-6">
              <span className="font-extralight border-b">O QUE</span>
              <span className="font-extralight border-b">COMO</span>
              <span className="font-extralight border-b">PREÇOS</span>
            </div>
            <Link href={"/user/gustavorteuber"}>
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
              <div className="flex flex-col items-center gap-12">
                <h2 className="font-helv text-8xl mb-4 font-bold leading-[0.8] text-center tracking-tight">
                  Revolucionando a Escrita
                </h2>
                <p className="text-center max-w-3xl text-2xl font-extralight">
                  Solanis é um gerador de markdown de última geração, projetado
                  para criar markdowns com eficiência. <br /> <br />
                  Alimentado pela Solanis IA v1.0, esta ferramenta utiliza
                  recursos avançados de processamento de linguagem natural para
                  gerar documentos markdown de alta qualidade e bem
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
                <div>
                  <Button variant={"outline"}>Solanize-se agora</Button>
                </div>
                <div className="w-full relative">
                  <div className="w-full h-[836px] border bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-md">
                    <div
                      id="menu-bar"
                      className="flex flex-row justify-between px-3 py-1 backdrop-blur-lg bg-white bg-opacity-20 text-white select-none z-10"
                    >
                      <div className="flex flex-row items-center gap-4">
                        <Image
                          className="h-4 w-4"
                          src={Apple}
                          alt="Apple Icon"
                        />
                        <span className="text-sm font-bold">Solanis</span>
                        <span className="text-sm">File</span>
                        <span className="text-sm">Edit</span>
                        <span className="text-sm">View</span>
                        <span className="text-sm">Tabs</span>
                        <span className="text-sm">Window</span>
                        <span className="text-sm">Help</span>
                      </div>
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
                      defaultPosition={{ x: 180, y: 50 }}
                    >
                      <div className="w-9/12 h-3/4 ">
                        <div className=" p-2 min-h-2 drag-handler"></div>
                      </div>
                    </Draggable>
                    <div
                      id="dock"
                      className="h-auto absolute w-auto left-1/2 bottom-2 -translate-x-1/2 backdrop-blur-lg bg-black flex flex-row items-center gap-2 bg-opacity-30 rounded-2xl p-1"
                    >
                      <div className="h-14">
                        <Image
                          className="h-14 w-14"
                          src={Finder}
                          alt="Finder Icon"
                        />
                      </div>
                      <div className="h-14">
                        <Image
                          className="h-14 w-14 p-[2px]"
                          height={512}
                          width={512}
                          src={SolanisIconPNG}
                          alt="Solanis Icon"
                        />
                      </div>
                      <div className="w-[1px] bg-white opacity-40 h-12"></div>
                      <div className="h-14">
                        <Image
                          className="h-14 w-14 p-[2px]"
                          height={512}
                          width={512}
                          src={Trash}
                          alt="Trash Icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full absolute"></div>
                </div>
              </div>
              <section className="mx-auto flex flex-col w-full max-w-[120rem] gap-24 py-24">
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
        </div>
      </div>
    </>
  );
}
