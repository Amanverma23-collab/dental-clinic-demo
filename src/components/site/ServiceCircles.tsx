import { Link } from "@tanstack/react-router";
import { InvisalignIcon, RootCanalIcon, PediatricIcon, VeneerIcon, EmergencyIcon, SmileIcon } from "./icons";

const services = [
  { Icon: InvisalignIcon, label: "Invisalign", slug: "invisalign" },
  { Icon: RootCanalIcon, label: "Root Canal Treatment", slug: "root-canal-treatment" },
  { Icon: PediatricIcon, label: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  { Icon: VeneerIcon, label: "Dental Veneers", slug: "dental-veneers" },
  { Icon: EmergencyIcon, label: "Emergency Care", slug: "emergency-care" },
  { Icon: SmileIcon, label: "Smile Makeover", slug: "smile-makeover" },
];

export function ServiceCircles() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl">Complete Dental Care Services</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          Everything your family needs under one roof — from routine cleanings to advanced procedures.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {services.map(({ Icon, label, slug }) => (
            <Link key={label} to="/services/$slug" params={{ slug }} className="flex flex-col items-center text-center">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-sand/40 text-sand-deep transition group-hover:scale-105">
                <Icon className="h-12 w-12" />
              </div>
              <h4 className="mt-4 font-serif text-base leading-tight">{label}</h4>
              <span className="mt-1 text-[11px] tracking-[0.15em] text-sand-deep">LEARN MORE →</span>
            </Link>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/services" className="inline-block rounded-full bg-sand-deep px-7 py-3 text-xs tracking-[0.2em] text-white">
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}
