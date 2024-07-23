import { Button } from "@/components/ui/button";
import { EnchancedSeparator } from "@/components/ui/enchanced-separator";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function CreateAccountPage() {
  return (
    <div className="flex flex-row p-4 gap-2 h-full bg-gray-50">
      <div className="flex flex-col p-8 w-1/2">
        <div className="flex flex-row items-center mb-8">
          <Image
            priority
            src={"/solanis-transparent.png"}
            alt="avatar"
            width={64}
            height={64}
          />
          <GradientHeading variant={"default"} size={"xs"}>
            solanis
          </GradientHeading>
        </div>
        <div className="flex flex-col gap-8 p-4 w-3/4">
          <div className="flex flex-col mb-8 w-fit">
            <GradientHeading variant={"default"} size={"xxl"} className="mb-1">
              Registrar!
            </GradientHeading>
            <p className="text-gray-500 text-sm text-end">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-primary font-bold">
                Faça o Login
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <Input id="name" placeholder="Nome completo" />
              <Input id="username" placeholder="Usuário" />
              <Input id="password" type="password" placeholder="Senha" />
              <Button size="lg" className="text-white">
                Registrar
              </Button>
            </div>
            <EnchancedSeparator
              label={
                <span className="p-4 text-sm text-secondary-foreground">
                  {" "}
                  ou com
                </span>
              }
              className="my-4"
            />
            <button className="w-full text-center py-2  border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-5 h-5 mr-2"
                alt="Google Icon"
              />
              <span className="dark:text-gray-300">Criar com Google</span>
            </button>
            <button className="w-full text-center py-2 border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2 dark:text-white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="dark:text-gray-300">Criar com Github</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-primary rounded-lg p-4 w-1/2 justify-center">
        <div className="flex flex-col gap-2">
          <p className="text-white font-bold text-5xl text-center">
            Olá! Por favor insira seus dados para criar uma conta.
          </p>
          <p className="text-sm text-white text-center">
            Você sabia que com o solanis você pode criar e compartilhar suas
            anotações de forma simples e rápida?
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
}
