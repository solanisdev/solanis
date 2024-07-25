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
                  ou com
                </span>
              }
              className="my-4"
            />
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
