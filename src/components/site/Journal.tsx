import { Link } from "@tanstack/react-router";
import hygieneImg from "@/assets/journal-hygiene.jpg";
import whiteningImg from "@/assets/journal-whitening.jpg";
import kidsImg from "@/assets/journal-kids.jpg";

const posts = [
  { slug: "smile-healthy-habits", tag: "Hygiene", title: "5 Habits That Keep Your Smile Healthy", excerpt: "Small daily routines that make a big difference for long-term oral health.", image: hygieneImg },
  { slug: "in-clinic-vs-home-whitening", tag: "Whitening", title: "In-Hospital vs At-Home Whitening", excerpt: "What actually works, what's safe, and what to expect from each option.", image: whiteningImg },
  { slug: "child-first-dental-visit", tag: "Kids", title: "Your Child's First Dental Visit", excerpt: "How we make the first appointment a positive experience for little ones.", image: kidsImg },
];

export function Journal() {
  return (
    <section className="bg-background px-6 py-24" id="journal">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] text-sand-deep">JOURNAL</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">Tips From Our Hospital</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-border bg-white p-8 transition hover:shadow-md">
              <img src={p.image} alt={p.title} className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
              <p className="mt-6 text-[11px] tracking-[0.2em] text-sand-deep">{p.tag.toUpperCase()}</p>
              <h3 className="mt-2 font-serif text-2xl leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="/journal/$slug" params={{ slug: p.slug }} className="mt-5 inline-block text-[11px] tracking-[0.18em] text-foreground/80 transition group-hover:text-foreground">READ MORE →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
