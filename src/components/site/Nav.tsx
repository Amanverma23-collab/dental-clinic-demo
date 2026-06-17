import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./icons";
import { Menu, X } from "lucide-react";

const sections = [
  { label: "About Us", hash: "about" },
  { label: "The Team", hash: "team" },
] as const;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="shrink-0" onClick={closeMenu}>
            <Logo />
          </Link>
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

            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="rounded-full p-2 text-foreground/85 md:hidden hover:bg-black/5 hover:text-foreground transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/35 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[70] w-full max-w-[200px] border-l border-b border-border/45 p-6 shadow-2xl rounded-bl-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.90)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center justify-between pb-6 border-b border-border/40">
          <Logo compact={true} />
          <button
            onClick={closeMenu}
            className="rounded-full p-2 text-foreground/85 hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-6 text-sm font-medium tracking-[0.18em] text-foreground/85">
          <Link
            to="/services"
            className="hover:text-foreground py-2 border-b border-border/10"
            onClick={closeMenu}
          >
            SERVICES
          </Link>
          {sections.map((s) => (
            <Link
              key={s.label}
              to="/"
              hash={s.hash}
              hashScrollIntoView={{ behavior: "smooth", block: "start" }}
              className="hover:text-foreground py-2 border-b border-border/10"
              onClick={closeMenu}
            >
              {s.label.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/journal"
            className="hover:text-foreground py-2 border-b border-border/10"
            onClick={closeMenu}
          >
            JOURNAL
          </Link>
          <Link
            to="/contact"
            className="hover:text-foreground py-2 border-b border-border/10"
            onClick={closeMenu}
          >
            CONTACT
          </Link>
          <Link
            to="/contact"
            className="mt-2 block text-center rounded-full bg-sand-deep py-4 text-xs font-semibold tracking-[0.18em] text-white shadow-md transition hover:bg-sand-deep/90"
            onClick={closeMenu}
          >
            BOOK APPOINTMENT
          </Link>
        </nav>
      </div>
    </>
  );
}
