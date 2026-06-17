const googleReviews = [
  {
    name: "Ravinder Yadav",
    initial: "R",
    rating: 5,
    date: "2 months ago",
    text: "The dentist was highly skilled and took the time to explain the procedure clearly, which made me feel comfortable and confident throughout the treatment. The use of advanced equipment and painless techniques truly reflected the clinic’s commitment to quality care. I would highly recommend this clinic to anyone looking for excellent dental care.",
    avatarBg: "bg-gradient-to-tr from-blue-500 to-teal-400"
  },
  {
    name: "Hari Krishana Kumawat",
    initial: "H",
    rating: 5,
    date: "2 weeks ago",
    text: "Dentist Dr. Pawan is highly Skilled and professional, behaviour is also very Good 😊 Affordable Price … लूटपाट से दूर… Best Treatment available in Sikar …",
    avatarBg: "bg-gradient-to-tr from-amber-500 to-orange-400"
  },
  {
    name: "Vinay Jakhar",
    initial: "V",
    rating: 5,
    date: "5 months ago",
    text: "Bahut hi accha experience raha is dental clinic mein. Staff ka behavior friendly aur professional tha, bilkul comfortable feel karwaya. Doctor ne har cheez clearly samjhayi aur treatment pain-free raha. Clinic clean, hygienic aur well-maintained tha. Definitely recommend karunga.",
    avatarBg: "bg-gradient-to-tr from-purple-500 to-pink-400"
  },
  {
    name: "Vikram Singh",
    initial: "V",
    rating: 5,
    date: "2 months ago",
    text: "Excellent service with highly skilled dentists. The staff is very polite and the clinic maintains great hygiene standards.",
    avatarBg: "bg-gradient-to-tr from-emerald-500 to-green-400"
  },
  {
    name: "Parul Meel",
    initial: "P",
    rating: 5,
    date: "5 months ago",
    text: "The Best dental clinic in Sikar 🫡🫡",
    avatarBg: "bg-gradient-to-tr from-rose-500 to-red-400"
  },
  {
    name: "Jyoti Jangir",
    initial: "J",
    rating: 5,
    date: "5 months ago",
    text: "Excellent service and very polite staff. Highly recommended",
    avatarBg: "bg-gradient-to-tr from-indigo-500 to-blue-400"
  },
  {
    name: "Yogi Sharma",
    initial: "Y",
    rating: 5,
    date: "2 months ago",
    text: "Experienced doctor. Neat and clean premises.",
    avatarBg: "bg-gradient-to-tr from-cyan-500 to-blue-400"
  }
];

const Stars = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex gap-0.5 text-amber-500">
    {Array.from({ length: rating }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.9L10 14.9 4.7 17.7l1-5.9L1.5 7.7l5.9-.9z" />
      </svg>
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[2fr_1fr] items-stretch">
        {/* Left Side: Google Reviews (Width constrained with min-w-0 and overflow-hidden to prevent layout stretching) */}
        <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm min-w-0 w-full overflow-hidden flex flex-col justify-between">
          <div>
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-6">
              <div>
                {/* Google Reviews logo row */}
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">GOOGLE REVIEWS</span>
                </div>
                
                {/* Rating info */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-serif text-3xl font-bold text-foreground">5.0</span>
                  <Stars rating={5} />
                  <span className="text-sm text-muted-foreground ml-1">34 reviews</span>
                </div>
              </div>

              {/* View all on Google button */}
              <a
                href="https://share.google/nDb4O939uL8KaylXB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-xs font-medium tracking-[0.1em] text-foreground hover:bg-muted transition-colors shrink-0 uppercase"
              >
                View all on Google
              </a>
            </div>

            {/* Scrolling Reviews container (shows exactly 1 card at a time using w-full min-w-full and snap alignments) */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-5 w-full scrollbar-thin">
              {googleReviews.map((r, idx) => (
                <div
                  key={idx}
                  className="w-full min-w-full snap-start rounded-xl border border-border/50 bg-cream/30 p-5 flex flex-col justify-between max-h-[220px] md:max-h-none overflow-hidden"
                >
                  <div>
                    {/* Reviewer top info */}
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold ${r.avatarBg}`}>
                        {r.initial}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground leading-tight">{r.name}</h4>
                        <p className="text-[11px] text-muted-foreground mt-0.5">Verified Google Review</p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="mt-4">
                      <Stars rating={r.rating} />
                    </div>

                    {/* Review Text */}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic line-clamp-2 md:line-clamp-none">
                      "{r.text}"
                    </p>
                  </div>

                  {/* Review Date */}
                  <p className="mt-4 text-[11px] text-muted-foreground/80">{r.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Statistics Card (from the original design) */}
        <div className="rounded-2xl bg-sand/30 p-8 flex flex-col justify-between h-full min-h-[350px]">
          <div>
            <p className="text-xs tracking-[0.25em] text-muted-foreground">STATISTICS</p>
            <div className="mt-6">
              <p className="font-serif text-5xl text-sand-deep">&gt;7,800</p>
              <p className="text-xs tracking-wider text-muted-foreground">Happy patients treated</p>
            </div>
            <div className="mt-8">
              <p className="font-serif text-5xl text-sand-deep">&gt;46%</p>
              <p className="text-xs tracking-wider text-muted-foreground">Returning families</p>
            </div>
          </div>
          <div className="mt-8 border-t border-sand-deep/20 pt-6 text-xs text-muted-foreground">
            10+ years of trusted dental care in Sikar.
          </div>
        </div>
      </div>
    </section>
  );
}
