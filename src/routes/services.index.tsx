import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Dental Services — Dr. Dental Sikar" },
      { name: "description", content: "Complete dental care in Sikar — cosmetic dentistry, whitening, implants, Invisalign, root canal, pediatric, veneers, emergency care & smile makeovers." },
      { property: "og:title", content: "Dental Services in Sikar — Dr. Dental" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="px-6 pb-16 pt-36 text-center">
        <p className="text-xs tracking-[0.3em] text-sand-deep">OUR SERVICES</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Complete Dental Care, Under One Roof</h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Explore every treatment we offer at Dr. Dental, Sikar — from routine cleanings to advanced cosmetic and surgical care.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group overflow-hidden rounded-3xl bg-card shadow-sm transition hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              <span className="mt-4 inline-block text-[11px] tracking-[0.18em] text-sand-deep">LEARN MORE →</span>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
