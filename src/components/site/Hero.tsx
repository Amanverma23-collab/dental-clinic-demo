import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img src={hero} alt="Denta Proof clinic operatory in Raipur" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center text-white">
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
          Creating Confident <span className="italic">&</span> Healthy Smiles
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/90 md:text-lg">
          Advanced dental care, cosmetic dentistry, teeth whitening, implants, and family dental
          services delivered with precision and comfort — right here in Raipur.
        </p>
        <a
          href="tel:9783204194"
          className="mt-10 rounded-full bg-sand-deep px-8 py-4 text-xs tracking-[0.22em] text-white shadow-lg transition hover:bg-sand-deep/90"
        >
          SCHEDULE CONSULTATION
        </a>
        <p className="mt-4 text-sm text-white/80">Call now · +91 97832 04194</p>
      </div>
    </section>
  );
}
