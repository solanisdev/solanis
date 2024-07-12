import { GradientHeading } from "@/components/ui/gradient-heading";
import { GradientText } from "@/components/ui/gradient-text";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {}
export default function SettingsPage({}: Props) {
  const tabs = [
    {
      title: "Theme",
      value: "theme",
      content: <div></div>,
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <GradientHeading variant={"default"} size={"xs"}>
          Configurações da conta
        </GradientHeading>
      </div>
      <Tabs defaultValue="profile">
        <TabsList className="flex justify-start rounded-tr-3xl">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="p-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold">Customize seu perfil</h4>
              <p className="text-sm text-muted-foreground w-1/2">
                Customize seu perfil, atualizando seu nome, sua foto e seu url
                para compartilhar sua anotação.
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <label
                    className="avatar rounded-full min-h-12 min-w-12 border flex justify-center items-center cursor-pointer"
                    htmlFor="upload"
                  >
                    <input type="file" className="hidden" id="upload" />
                    <span className="font-[700]">GR</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>Trocar de foto</TooltipContent>
              </Tooltip>
              <div className="flex flex-col gap-4">
                <Input value={"Gustavo Reis Teuber"} />
                <div className="flex flex-row w-max h-9">
                  <div className="p-1 bg-muted rounded-s-md text-muted-foreground flex items-center">
                    <span className="text-xs">solanized/</span>
                  </div>
                  <Input className="h-9 border border-muted rounded-s-none rounded-e-md text-xs p-1" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="p-4">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4 w-1/4">
              <h4 className="text-xl font-bold">Notificações de perfil</h4>
              <p className="text-sm text-muted-foreground">
                Receba notificações quando algo nas suas anotações acontecer.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 w-1/2">
              <div className="flex flex-row gap-2">
                <Switch />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold">Lembretes</p>
                  <p className="text-sm">
                    Novidades sobre novas atualizações do Solanis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Switch />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold">Menções</p>
                  <p className="text-sm">
                    Receber notificações para comentários em suas anotações e
                    respostas aos seus comentários.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Switch />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold">Amigos</p>
                  <p className="text-sm">
                    Notificações sobre atividades de usuários que você é amigo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4 w-1/4">
              <h4 className="text-xl font-bold">Notificações Push</h4>
              <p className="text-sm text-muted-foreground">
                Receba notificações push diretamente no seu dispositivo.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 w-1/2">
              <div className="flex flex-row gap-2">
                <Switch />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold">Mensagens diretas</p>
                  <p className="text-sm">
                    Receba notificações push quando receber uma mensagem direta.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Switch />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold">Sugestões de melhorias</p>
                  <p className="text-sm">
                    Receba notificações push com sugestões de melhorias IA para seus documentos markdown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
