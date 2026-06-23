import { createFileRoute } from "@tanstack/react-router";
import { journalPosts } from "@/lib/journal-data";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Denta Proof Raipur" },
      { name: "description", content: "Dental tips, oral health guides, and clinic updates from Denta Proof in Raipur." },
      { property: "og:title", content: "Journal — Denta Proof Raipur" },
      { property: "og:description", content: "Dental tips, oral health guides, and clinic updates from Denta Proof in Raipur." },
    ],
  }),
  component: JournalIndex,
});

function JournalIndex() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="px-6 py-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] text-sand-deep">JOURNAL</p>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl">Tips From Our Clinic</h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Practical dental advice, treatment insights, and oral health guides written by our team.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {journalPosts.map((p) => (
              <article key={p.slug} className="group rounded-2xl border border-border bg-white p-6 transition hover:shadow-md">
                <img src={p.image} alt={p.title} className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
                <p className="mt-5 text-[11px] tracking-[0.2em] text-sand-deep">{p.tag.toUpperCase()}</p>
                <h3 className="mt-2 font-serif text-2xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span>{p.readTime}</span>
                </div>
                <Link
                  to="/journal/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-block text-[11px] tracking-[0.18em] text-foreground/80 transition group-hover:text-foreground"
                >
                  READ MORE →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
