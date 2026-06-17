import cosmetic from "@/assets/svc-cosmetic.jpg";
import whitening from "@/assets/svc-whitening.jpg";
import implant from "@/assets/svc-implant.jpg";
import invisalign from "@/assets/svc-invisalign.jpg";
import rootcanal from "@/assets/svc-rootcanal.jpg";
import pediatric from "@/assets/svc-pediatric.jpg";
import veneers from "@/assets/svc-veneers.jpg";
import emergency from "@/assets/svc-emergency.jpg";
import smile from "@/assets/svc-smile.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  intro: string;
  highlights: { title: string; body: string }[];
  procedure: string[];
  benefits: string[];
  duration: string;
  priceFrom: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    tagline: "Custom smile makeovers tailored to your face & personality.",
    image: cosmetic,
    intro:
      "Our cosmetic dentistry program in Sikar combines digital smile design, high-grade ceramics, and an artist's eye to give you a smile that looks naturally yours — only better.",
    highlights: [
      { title: "Digital Smile Design", body: "See a 3D preview of your new smile before any treatment begins." },
      { title: "Tooth-Coloured Materials", body: "Premium composites and ceramics that blend seamlessly with natural enamel." },
      { title: "Minimally Invasive", body: "We preserve as much of your natural tooth structure as possible." },
    ],
    procedure: [
      "Free in-clinic consultation and full smile analysis",
      "Digital scans, photographs, and a 3D smile mock-up",
      "Personalised treatment plan with cost & timeline",
      "Tooth preparation and temporary restorations",
      "Final fitting, polishing and smile reveal",
    ],
    benefits: [
      "A balanced, symmetrical smile",
      "Brighter, whiter teeth",
      "Stronger bite and chewing comfort",
      "Confidence in every photo",
    ],
    duration: "2 – 4 appointments",
    priceFrom: "₹6,000",
    faqs: [
      { q: "Will it hurt?", a: "Most cosmetic procedures are painless. We use gentle local anaesthetic when needed." },
      { q: "How long do results last?", a: "With good home care, 10 – 15 years and often longer." },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    tagline: "Professional in-chair whitening for a brighter, glowing smile.",
    image: whitening,
    intro:
      "Stains from tea, coffee, tobacco and time can dull your smile. Our supervised whitening lifts shades safely in a single visit — without harming enamel.",
    highlights: [
      { title: "In-Chair LED Whitening", body: "Up to 6 shades lighter in about 60 minutes." },
      { title: "Take-Home Kits", body: "Custom trays and dentist-grade gel for top-up whitening at home." },
      { title: "Sensitivity Care", body: "Desensitising gels included to keep the experience comfortable." },
    ],
    procedure: [
      "Oral health check and shade reading",
      "Gum protection barrier applied",
      "Whitening gel + LED activation in cycles",
      "Final shade comparison & aftercare plan",
    ],
    benefits: [
      "Visibly whiter smile in one sitting",
      "Safe, enamel-friendly formulation",
      "Long-lasting results with simple touch-ups",
    ],
    duration: "60 – 90 minutes",
    priceFrom: "₹4,500",
    faqs: [
      { q: "Is whitening safe?", a: "Yes — when supervised by a dentist, it does not damage enamel." },
      { q: "How long do results last?", a: "Typically 12 – 18 months depending on diet and habits." },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    tagline: "Permanent, natural-looking replacements for missing teeth.",
    image: implant,
    intro:
      "Dental implants restore the look, feel and full function of your natural teeth. We use globally trusted implant systems with a long-term clinical track record.",
    highlights: [
      { title: "Titanium-Grade Implants", body: "Biocompatible posts that fuse with your jaw bone." },
      { title: "Single-Day Procedure", body: "Most implant placements are completed in one comfortable visit." },
      { title: "Lifetime Solution", body: "Cared for properly, implants can last a lifetime." },
    ],
    procedure: [
      "3D CBCT scan and treatment planning",
      "Painless implant placement under local anaesthesia",
      "Healing period of 3 – 4 months (with temporary tooth)",
      "Custom crown design and final fitting",
    ],
    benefits: [
      "Chew, speak and smile normally again",
      "Prevents bone loss in the jaw",
      "Does not damage neighbouring teeth",
    ],
    duration: "3 – 4 months total",
    priceFrom: "₹22,000 / implant",
    faqs: [
      { q: "Is the surgery painful?", a: "No — local anaesthesia keeps the procedure painless. Mild soreness for a day or two is normal." },
      { q: "Am I a candidate?", a: "Most healthy adults with adequate bone are candidates. A quick scan tells us for sure." },
    ],
  },
  {
    slug: "invisalign",
    title: "Invisalign & Clear Aligners",
    tagline: "Straighten your teeth invisibly — no metal braces.",
    image: invisalign,
    intro:
      "Clear aligners gently move teeth into position using a series of custom-printed trays. They're removable, virtually invisible, and ideal for teens and adults.",
    highlights: [
      { title: "Removable Trays", body: "Take them out to eat, brush, and on special occasions." },
      { title: "Predictable Results", body: "See your final smile in a 3D simulation before you begin." },
      { title: "Fewer Visits", body: "Typically only a check-up every 6 – 8 weeks." },
    ],
    procedure: [
      "Digital intra-oral scan (no messy putty)",
      "Custom 3D treatment plan & preview",
      "Receive your set of aligners",
      "Switch trays every 1 – 2 weeks, monthly check-ins",
    ],
    benefits: [
      "Virtually invisible",
      "More comfortable than fixed braces",
      "Easier to keep your teeth clean",
    ],
    duration: "6 – 18 months",
    priceFrom: "₹85,000",
    faqs: [
      { q: "How long do I wear them daily?", a: "22 hours a day — only remove for eating and brushing." },
      { q: "Are aligners as effective as braces?", a: "For most mild-to-moderate cases, yes." },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    tagline: "Save your natural tooth — painlessly, often in a single visit.",
    image: rootcanal,
    intro:
      "Modern root canal therapy is nothing like its reputation. With rotary endodontics and magnification, we relieve pain and save your tooth in comfort.",
    highlights: [
      { title: "Single-Sitting RCT", body: "Most cases completed in one appointment." },
      { title: "Rotary Endodontics", body: "Precise, faster cleaning of the root canals." },
      { title: "Painless Procedure", body: "Performed under effective local anaesthesia." },
    ],
    procedure: [
      "Digital X-ray and diagnosis",
      "Local anaesthesia for complete comfort",
      "Cleaning and shaping of canals",
      "Sealing and a protective crown",
    ],
    benefits: [
      "Ends toothache fast",
      "Saves your natural tooth",
      "Restores normal chewing",
    ],
    duration: "45 – 90 minutes",
    priceFrom: "₹3,500",
    faqs: [
      { q: "Is RCT painful?", a: "No — it relieves pain. The procedure itself is done under anaesthesia." },
      { q: "Do I need a crown after?", a: "Yes, a crown protects the treated tooth long-term." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    tagline: "Gentle, fun dentistry to keep little smiles healthy.",
    image: pediatric,
    intro:
      "From the first tooth to teenage years, we make dental visits a positive experience. Our child-friendly approach focuses on prevention, education and trust.",
    highlights: [
      { title: "Tell-Show-Do Approach", body: "We explain everything in a child's language before doing it." },
      { title: "Preventive Care", body: "Fluoride application, sealants and habit counselling." },
      { title: "Painless Treatments", body: "Topical numbing and a calm environment for nervous kids." },
    ],
    procedure: [
      "Friendly meet-and-greet visit",
      "Gentle examination & cleaning",
      "Preventive treatment as needed",
      "Home-care coaching for parents",
    ],
    benefits: [
      "Cavity-free childhood",
      "Positive attitude towards dentistry",
      "Early detection of bite issues",
    ],
    duration: "30 – 45 minutes",
    priceFrom: "₹500",
    faqs: [
      { q: "From what age should kids visit?", a: "By their first birthday or when the first tooth appears." },
      { q: "How often?", a: "Every 6 months for routine check-ups." },
    ],
  },
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    tagline: "Ultra-thin ceramic shells for an instantly perfect smile.",
    image: veneers,
    intro:
      "Veneers correct chips, gaps, stains and uneven teeth in just a couple of visits. We use premium e.max and zirconia veneers for natural translucency and strength.",
    highlights: [
      { title: "Minimal Tooth Reduction", body: "Just a fraction of a millimetre prepared from the front surface." },
      { title: "Premium Ceramics", body: "Stain-resistant, lifelike e.max & zirconia options." },
      { title: "Custom Shade Match", body: "Designed to flatter your face and skin tone." },
    ],
    procedure: [
      "Smile consultation and shade selection",
      "Light tooth preparation & impressions",
      "Lab fabrication of custom veneers",
      "Bonding & final polish",
    ],
    benefits: [
      "Instantly transforms your smile",
      "Long-lasting, stain-resistant",
      "Natural appearance",
    ],
    duration: "2 visits over 7 – 10 days",
    priceFrom: "₹9,000 / tooth",
    faqs: [
      { q: "How long do veneers last?", a: "10 – 15 years with good care." },
      { q: "Will they look fake?", a: "No — modern ceramics mimic real enamel beautifully." },
    ],
  },
  {
    slug: "emergency-care",
    title: "Emergency Dental Care",
    tagline: "Same-day relief for dental pain & accidents.",
    image: emergency,
    intro:
      "Toothache, swelling, a knocked-out tooth or a broken crown? Call us on 9783204194 — we keep slots reserved daily for dental emergencies in Sikar.",
    highlights: [
      { title: "Same-Day Appointment", body: "Walk-ins and emergencies prioritised." },
      { title: "Rapid Pain Relief", body: "Immediate diagnosis and pain management." },
      { title: "Trauma Care", body: "Saving knocked-out teeth, fractures and abscesses." },
    ],
    procedure: [
      "Call 9783204194 — quick triage on the phone",
      "Immediate examination on arrival",
      "Pain relief and stabilising treatment",
      "Follow-up plan for definitive care",
    ],
    benefits: [
      "Fast relief from pain",
      "Higher chance of saving the tooth",
      "Friendly, calm emergency team",
    ],
    duration: "Same-day, 30 – 60 minutes",
    priceFrom: "₹500 consultation",
    faqs: [
      { q: "What if a tooth is knocked out?", a: "Keep it in milk or saliva and reach us within 60 minutes for the best chance of re-implantation." },
      { q: "Are you open on Sundays?", a: "Yes, by appointment for emergencies." },
    ],
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    tagline: "A combination plan crafted around your dream smile.",
    image: smile,
    intro:
      "A smile makeover blends multiple cosmetic and restorative treatments into one personalised plan — whitening, veneers, alignment and gum contouring as needed.",
    highlights: [
      { title: "Full Face Analysis", body: "We design the smile to match your face shape and personality." },
      { title: "All-In-One Plan", body: "One coordinated treatment plan, one transparent cost." },
      { title: "Real Smile Preview", body: "Try-on mock-ups before final treatment." },
    ],
    procedure: [
      "Detailed consultation & photography",
      "Custom digital smile design",
      "Combination of selected treatments",
      "Final reveal and maintenance plan",
    ],
    benefits: [
      "Dramatic, photo-ready smile",
      "Boosted confidence",
      "Improved bite and oral health",
    ],
    duration: "2 – 6 weeks",
    priceFrom: "₹35,000",
    faqs: [
      { q: "Is it just cosmetic?", a: "No — most makeovers also fix function, bite and long-term tooth health." },
      { q: "Can I see results first?", a: "Yes, with a digital preview and physical mock-up before treatment." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
