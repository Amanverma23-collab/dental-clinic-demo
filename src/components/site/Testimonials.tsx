import p1 from "@/assets/patient1.jpg";
import p2 from "@/assets/patient2.jpg";

const Stars = () => (
  <div className="flex gap-1 text-sand-deep">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.9L10 14.9 4.7 17.7l1-5.9L1.5 7.7l5.9-.9z"/></svg>
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1fr_1.1fr]">
        {[
          { img: p1, name: "Rahul S.", quote: "Best dental experience in Sikar. The team made me feel completely at ease throughout my treatment." },
          { img: p2, name: "Priya M.", quote: "My smile makeover changed everything. Genuinely caring doctors and modern equipment." },
        ].map((t) => (
          <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
            <img src={t.img} alt={t.name} loading="lazy" width={640} height={640} className="h-48 w-full rounded-xl object-cover" />
            <Stars />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <p className="mt-2 text-xs font-medium tracking-wide">— {t.name}</p>
          </div>
        ))}
        <div className="rounded-2xl bg-sand/30 p-8">
          <p className="text-xs tracking-[0.25em] text-muted-foreground">STATISTICS</p>
          <div className="mt-6">
            <p className="font-serif text-5xl text-sand-deep">&gt;7,800</p>
            <p className="text-xs tracking-wider text-muted-foreground">Happy patients treated</p>
          </div>
          <div className="mt-8">
            <p className="font-serif text-5xl text-sand-deep">&gt;46%</p>
            <p className="text-xs tracking-wider text-muted-foreground">Returning families</p>
          </div>
          <div className="mt-8 border-t border-sand-deep/20 pt-6 text-xs text-muted-foreground">
            10+ years of trusted dental care in Sikar.
          </div>
        </div>
      </div>
    </section>
  );
}
