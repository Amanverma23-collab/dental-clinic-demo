import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Denta Proof Sikar — Book an Appointment" },
      { name: "description", content: "Book your dental appointment in Sikar. Call +91 97832 04194 or visit our clinic on Piprali Road." },
      { property: "og:title", content: "Contact Denta Proof Sikar" },
      { property: "og:description", content: "Call +91 97832 04194 to schedule your visit with Denta Proof, Sikar." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="relative px-6 pb-24 pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.25em] text-sand-deep">GET IN TOUCH</p>
          <h1 className="mt-2 font-serif text-5xl md:text-6xl">Book Your Appointment</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We'd love to see you. Reach out by phone, email, or drop by the clinic — we'll find a time that works.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            { t: "Call", d: "+91 97832 04194", href: "tel:9783204194" },
            { t: "Visit", d: "Piprali Road, Sikar, Rajasthan 332001" },
            { t: "Hours", d: "Mon – Sat · 9:00 AM – 8:00 PM" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-white p-8 text-center">
              <p className="text-xs tracking-[0.25em] text-sand-deep">{c.t.toUpperCase()}</p>
              {c.href ? (
                <a href={c.href} className="mt-3 block font-serif text-2xl">{c.d}</a>
              ) : (
                <p className="mt-3 font-serif text-2xl leading-snug">{c.d}</p>
              )}
            </div>
          ))}
        </div>

        <form className="mx-auto mt-16 grid max-w-3xl gap-4 rounded-3xl bg-cream p-10">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm" placeholder="Your name" />
            <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm" placeholder="Phone number" />
          </div>
          <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm" placeholder="Service of interest" />
          <textarea rows={5} className="rounded-xl border border-border bg-white px-4 py-3 text-sm" placeholder="How can we help?" />
          <button type="button" className="mt-2 self-center rounded-full bg-sand-deep px-8 py-4 text-xs tracking-[0.22em] text-white hover:bg-sand-deep/90">
            REQUEST APPOINTMENT
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
