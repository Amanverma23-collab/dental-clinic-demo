import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { serviceBySlug, services, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — Denta Proof Sikar" }] };
    return {
      meta: [
        { title: `${s.title} in Sikar — Denta Proof` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.title} — Denta Proof Sikar` },
        { property: "og:description", content: s.tagline },
        { property: "og:image", content: s.image },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-serif text-4xl">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-sand-deep">← Back to all services</Link>
      </div>
    </main>
  ),
  errorComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <p>Something went wrong.</p>
    </main>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: Service };
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center text-white">
          <p className="text-xs tracking-[0.3em] opacity-90">DENTA PROOF · SIKAR</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">{s.title}</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-95">{s.tagline}</p>
          <Link to="/contact" className="mt-8 rounded-full bg-sand-deep px-7 py-3 text-xs tracking-[0.2em]">
            BOOK CONSULTATION
          </Link>
        </div>
      </section>

      {/* Intro + meta */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-serif text-4xl">About this treatment</h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            {Array.isArray(s.intro) ? (
              s.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{s.intro}</p>
            )}
          </div>
        </div>
        <aside className="rounded-2xl bg-sand/30 p-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-xs tracking-[0.18em] text-sand-deep">DURATION</dt>
              <dd className="mt-1 font-serif text-xl">{s.duration}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-sand-deep">STARTING FROM</dt>
              <dd className="mt-1 font-serif text-xl">{s.priceFrom}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-sand-deep">CALL TO BOOK</dt>
              <dd className="mt-1 font-serif text-xl">9783204194</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Highlights */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-4xl">Why patients choose us</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {s.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl bg-card p-8 shadow-sm">
                <h3 className="font-serif text-2xl">{h.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure + Benefits */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.3em] text-sand-deep">THE JOURNEY</p>
          <h2 className="mt-3 font-serif text-4xl">What to expect</h2>
          <ol className="mt-6 space-y-4">
            {s.procedure.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand-deep font-serif text-sm text-white">{i + 1}</span>
                <p className="pt-1 text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] text-sand-deep">BENEFITS</p>
          <h2 className="mt-3 font-serif text-4xl">You'll love the results</h2>
          <ul className="mt-6 space-y-3">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sand-deep" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-4xl">Frequently asked</h2>
          <div className="mt-10 space-y-6">
            {s.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-card p-6 shadow-sm">
                <h3 className="font-serif text-xl">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl">Ready to begin?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Book your consultation at Denta Proof, Sikar — call <a href="tel:9783204194" className="text-sand-deep">9783204194</a> or schedule online.
        </p>
        <Link to="/contact" className="mt-8 inline-block rounded-full bg-sand-deep px-8 py-4 text-xs tracking-[0.2em] text-white">
          BOOK APPOINTMENT
        </Link>
      </section>

      {/* Other services */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center font-serif text-3xl">Explore more services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="group overflow-hidden rounded-2xl bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={o.image} alt={o.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl">{o.title}</h3>
                <span className="mt-2 inline-block text-[11px] tracking-[0.18em] text-sand-deep">LEARN MORE →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
