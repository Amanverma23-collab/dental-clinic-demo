import { Link } from "@tanstack/react-router";
import { Logo } from "./icons";
import { Menu } from "lucide-react";

const sections = [
  { label: "About Us", hash: "about" },
  { label: "The Team", hash: "team" },
] as const;

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="shrink-0"><Logo /></Link>
        <nav className="hidden items-center gap-8 text-sm tracking-[0.18em] text-foreground/85 md:flex">
          <Link to="/services" className="hover:text-foreground">SERVICES</Link>
          {sections.map((s) => (
            <Link
              key={s.label}
              to="/"
              hash={s.hash}
              hashScrollIntoView={{ behavior: "smooth", block: "start" }}
              className="hover:text-foreground"
            >
              {s.label.toUpperCase()}
            </Link>
          ))}
          <Link to="/journal" className="hover:text-foreground">JOURNAL</Link>
          <Link to="/contact" className="hover:text-foreground">CONTACT</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-block rounded-full bg-sand-deep px-6 py-3 text-xs font-medium tracking-[0.18em] text-white shadow-sm transition hover:bg-sand-deep/90"
          >
            BOOK APPOINTMENT
          </Link>

          {/* Static Hamburger Icon (non-functional) */}
          <button
            className="rounded-full p-2 text-foreground/85 md:hidden transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
