import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons"

export default function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="font-semibold text-lg">Markdown AI</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            An AI-powered markdown generator to help you create beautiful
            content with ease.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold text-base">Connect</h3>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition"
              prefetch={false}
            >
              <SiX className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition"
              prefetch={false}
            >
              <SiGithub className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition"
              prefetch={false}
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold text-base">Legal</h3>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition text-sm"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition text-sm"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
