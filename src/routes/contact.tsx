import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const servicesList = [
  { value: "cosmetic-dentistry", label: "Cosmetic Dentistry" },
  { value: "teeth-whitening", label: "Teeth Whitening" },
  { value: "dental-implants", label: "Dental Implants" },
  { value: "invisalign", label: "Invisalign & Clear Aligners" },
  { value: "root-canal", label: "Root Canal Treatment" },
  { value: "pediatric", label: "Pediatric Dentistry" },
  { value: "veneers", label: "Dental Veneers" },
  { value: "emergency", label: "Emergency Dental Care" },
  { value: "smile-makeover", label: "Smile Makeover" },
  { value: "other", label: "Other" },
];

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
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredServices = servicesList.filter((service) =>
    service.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
          {/* Booking Form - Left Side */}
          <form className="grid gap-4 rounded-3xl bg-cream p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
              <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Phone number" />
            </div>

            {/* Hidden input for form submission value */}
            <input type="hidden" name="service" value={value} />

            {/* Custom Searchable Select Dropdown */}
            <div ref={containerRef} className="relative w-full">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground/85 hover:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition cursor-pointer text-left"
              >
                <span className={cn(!value && "text-muted-foreground")}>
                  {value
                    ? servicesList.find((service) => service.value === value)?.label
                    : "Service of interest"}
                </span>
                <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform duration-200", isOpen && "rotate-180")} />
              </button>

              {isOpen && (
                <div className="absolute z-50 left-0 right-0 mt-2 max-h-80 rounded-2xl border border-border bg-white shadow-xl flex flex-col p-2 space-y-2 animate-in fade-in-0 slide-in-from-top-2 duration-150">
                  {/* Search Input Container */}
                  <div className="flex items-center bg-slate-50 border border-border rounded-xl px-3 py-2">
                    <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search input"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground py-0.5"
                    />
                  </div>
                  {/* Options List */}
                  <div className="overflow-y-auto max-h-52 space-y-0.5">
                    {filteredServices.length === 0 ? (
                      <div className="py-6 text-center text-sm text-muted-foreground">No options found</div>
                    ) : (
                      filteredServices.map((service) => (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() => {
                            setValue(service.value);
                            setIsOpen(false);
                            setSearchTerm("");
                          }}
                          className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-left hover:bg-slate-50 transition cursor-pointer text-foreground/85 hover:text-foreground"
                        >
                          <div className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                            value === service.value ? "border-sand-deep bg-sand-deep text-white" : "border-border bg-slate-50"
                          )}>
                            {value === service.value && (
                              <Check className="h-3.5 w-3.5 stroke-[3px]" />
                            )}
                          </div>
                          <span className="font-medium">{service.label}</span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <textarea rows={5} className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="How can we help?" />
            <button type="button" className="mt-2 self-center rounded-full bg-sand-deep px-8 py-4 text-xs tracking-[0.22em] text-white hover:bg-sand-deep/90 transition cursor-pointer">
              REQUEST APPOINTMENT
            </button>
          </form>

          {/* Location Map - Right Side */}
          <div className="rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239099.541306907!2d65.93274737499999!3d27.63329340000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cbbc2b813fbd1%3A0xeb6cd73382c20f9f!2sDentaproof%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1781729440052!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Denta Proof Dental Hospital Location"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
