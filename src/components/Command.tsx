import {
  Command,
  CommandInput,
} from "@/components/ui/command"

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Procurar no Solanis..." />
    </Command>
  )
}