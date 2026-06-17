import { Link } from "@tanstack/react-router";
import { Logo } from "./icons";

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
        <Link
          to="/contact"
          className="rounded-full bg-sand-deep px-6 py-3 text-xs font-medium tracking-[0.18em] text-white shadow-sm transition hover:bg-sand-deep/90"
        >
          BOOK APPOINTMENT
        </Link>
      </div>
    </header>
  );
}
