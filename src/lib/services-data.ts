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
  intro: string[];
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
    intro: [
      "Our cosmetic dentistry program in Raipur combines digital smile design, high-grade ceramics, and an artist's eye to give you a smile that looks naturally yours — only better. We understand that a smile is a key part of your identity, which is why we customize every treatment plan to align perfectly with your facial features, skin tone, and personal expression.",
      "Whether you are looking to fix small chips, close gaps, or completely redesign your smile, our modern solutions are minimally invasive and highly aesthetic. We utilize state-of-the-art materials like e.max veneers, zirconium crowns, and advanced bonding techniques to deliver durable, beautiful results.",
      "At Denta Proof Raipur, we prioritize your comfort and active involvement throughout the process. Through digital mock-ups and live previews, you can see and approve your potential new smile before any physical work begins, ensuring complete confidence in the final outcome."
    ],
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
    intro: [
      "Stains from tea, coffee, tobacco, and natural aging can dull your smile over time. Our professional in-office whitening treatments lift stubborn discoloration safely and quickly in a single visit, without harming your tooth enamel or causing severe sensitivity.",
      "We use advanced LED-activated whitening gels that break down deep stains at a molecular level, giving you results that are far superior to over-the-counter products. During the procedure, your gums are fully protected with a specialized barrier, and we apply a soothing desensitizing agent afterward for maximum comfort.",
      "In addition to the in-chair session, we provide customized follow-up tips and optional home-maintenance kits to keep your smile bright and glowing for a long time. With basic hygiene and care, your new radiant smile can last for over a year."
    ],
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
    intro: [
      "Dental implants restore the look, feel, and full functionality of your natural teeth. Whether you've lost teeth due to decay, injury, or age, implants provide a permanent, non-removable solution that feels completely natural and prevents bone loss in the jaw.",
      "We use globally trusted implant systems with a long-term clinical track record, combined with computer-guided surgical planning for maximum precision. The implant post acts as a new tooth root, fusing directly with your jawbone to create an exceptionally strong foundation.",
      "Once the healing process is complete, we attach a custom-crafted ceramic crown that matches your neighboring teeth perfectly. This allows you to eat, speak, and smile with absolute confidence, without the worry of loose dentures or damaging surrounding teeth."
    ],
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
    intro: [
      "Clear aligners gently move teeth into their ideal position using a series of custom-printed, medical-grade plastic trays. They are virtually invisible, comfortable, and can be removed easily when eating, brushing, or attending special events.",
      "Using advanced 3D scanning technology, we create a precise digital model of your mouth. We then simulate the entire movement of your teeth, allowing you to see a step-by-step preview of your journey and your final smile before the treatment even begins.",
      "Unlike traditional metal braces, clear aligners have no sharp wires or brackets, minimizing oral irritation. It is the perfect choice for busy teens and professionals in Raipur who want to enhance their smile discreetly and comfortably."
    ],
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
    intro: [
      "Modern root canal therapy is nothing like its old reputation. With advanced rotary endodontics, digital imaging, and high-magnification loops, we can relieve severe toothaches and save your natural teeth in a highly comfortable and efficient manner.",
      "A root canal is necessary when the inner pulp of a tooth becomes inflamed or infected due to deep decay or injury. During the procedure, we carefully clean out the infection, sanitize the canals, and seal the space to prevent future contamination.",
      "We complete most root canal treatments in a single sitting, followed by a durable custom crown to restore the tooth's structural strength. Saving your natural tooth is always our priority, as it maintains your natural bite and prevents shifting."
    ],
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
    intro: [
      "From the first tooth to teenage years, we make dental visits a positive and fun experience for little ones. Our pediatric care focuses heavily on dental education, cavity prevention, and building a foundation of trust that prevents dental anxiety for life.",
      "Our clinic is designed to put kids at ease, and we use a gentle 'Tell-Show-Do' communication style. We explain every tool and step in playful, non-scary language, ensuring your child feels in control and safe throughout their routine cleaning or treatment.",
      "We offer specialized services such as fluoride applications to strengthen growing enamel, dental sealants to protect chewing surfaces from decay, and guidance on positive brushing habits and nutrition for parents."
    ],
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
    intro: [
      "Dental veneers are ultra-thin shells of premium ceramic or porcelain that are custom-bonded to the front surfaces of your teeth. They are the ideal solution for instantly correcting chips, cracks, gaps, severe discoloration, or minor misalignment.",
      "We offer high-grade e.max and zirconia veneers, celebrated for their natural translucency, lifelike shine, and incredible durability. Because the shells are incredibly thin, we only need to prepare a fraction of a millimeter of your enamel, preserving your tooth structure.",
      "Each veneer is individually handcrafted and shade-matched to complement your facial structure and skin tone. In just two visits, veneers can provide a dramatic yet natural-looking transformation that is highly resistant to coffee, tea, and smoke stains."
    ],
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
    intro: [
      "Dental emergencies can be stressful and painful. Whether you are dealing with a severe toothache, swelling, a fractured tooth, a knocked-out tooth, or a damaged restoration, our team in Raipur is prepared to provide same-day relief.",
      "We keep emergency time slots open in our daily schedule so that walk-in patients can be diagnosed and treated without long wait times. Our immediate priority is to manage your pain, stabilize the condition, and prevent further damage to your teeth and gums.",
      "If you experience a dental emergency, contact us immediately. We will guide you through crucial first-aid steps over the phone — such as how to preserve a knocked-out tooth — to ensure the best chance of saving your tooth upon arrival."
    ],
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
    intro: [
      "A smile makeover is a comprehensive, customized rejuvenation plan that combines multiple cosmetic and restorative treatments to achieve your dream smile. We look at your entire facial aesthetic, including lip line, gum height, and tooth proportions, to design a balanced look.",
      "Based on your goals, a makeover may combine teeth whitening, ceramic veneers, clear aligners, aesthetic dental crowns, or gum contouring. We use digital smile analysis to plan every detail, giving you a preview of the final results before we start.",
      "This comprehensive approach not only enhances the visual beauty of your smile but also restores proper alignment, bite function, and long-term oral health. It is a transformative investment in your self-confidence and overall well-being."
    ],
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
