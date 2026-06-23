import clinic from "@/assets/clinic.jpg";

const bullets = [
  { t: "Modern Equipment", d: "Digital X-rays, intra-oral cameras, and painless treatment technology." },
  { t: "Gentle, Caring Team", d: "We take time to listen and explain every step — no rushed appointments." },
  { t: "Trusted in Raipur", d: "10+ years serving thousands of families across the region." },
  { t: "Transparent Pricing", d: "Clear estimates upfront. No surprises after treatment." },
];

export function WhyUs() {
  return (
    <section className="bg-cream px-6 py-24" id="about">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <img src={clinic} alt="Denta Proof Raipur clinic interior" loading="lazy" width={1280} height={960} className="h-[480px] w-full rounded-3xl object-cover shadow-sm" />
        <div>
          <p className="text-xs tracking-[0.25em] text-sand-deep">ABOUT US</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">A Calm Place for Better Dentistry</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Denta Proof was built around one idea — visiting the dentist should feel reassuring, not stressful.
            From the moment you walk in, every detail is designed for your comfort.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {bullets.map((b) => (
              <div key={b.t}>
                <h4 className="font-serif text-lg">{b.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
