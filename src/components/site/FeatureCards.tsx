import { Link } from "@tanstack/react-router";
import bg from "@/assets/feature-bg.jpg";
import { ToothIcon, ToothSparkleIcon, ImplantIcon } from "./icons";

const items = [
  { Icon: ToothIcon, title: "Cosmetic Dentistry", body: "Custom smile makeovers, veneers, and bonding by expert specialists.", cta: "EXPLORE COSMETIC SERVICES", slug: "cosmetic-dentistry" },
  { Icon: ToothSparkleIcon, title: "Teeth Whitening", body: "Professional whitening for bright, glowing smiles.", cta: "DISCOVER WHITENING", slug: "teeth-whitening" },
  { Icon: ImplantIcon, title: "Dental Implants", body: "Permanent, natural-looking solutions for missing teeth.", cta: "VIEW IMPLANT OPTIONS", slug: "dental-implants" },
];

export function FeatureCards() {
  return (
    <section className="relative -mt-20 px-6 pb-24" id="services">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <img src={bg} alt="" loading="lazy" width={1920} height={800} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
        <div className="relative grid gap-6 p-8 md:grid-cols-3 md:p-10">
          {items.map(({ Icon, title, body, cta, slug }) => (
            <div key={title} className="rounded-2xl bg-white/85 p-8 text-center shadow-sm backdrop-blur">
              <Icon className="mx-auto h-14 w-14 text-teal-soft" />
              <h3 className="mt-6 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{body}</p>
              <Link to="/services/$slug" params={{ slug }} className="mt-6 inline-block text-[11px] tracking-[0.18em] text-foreground/80 hover:text-foreground">{cta} →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
