import hygieneImg from "@/assets/journal-hygiene.jpg";
import whiteningImg from "@/assets/journal-whitening.jpg";
import kidsImg from "@/assets/journal-kids.jpg";

export interface JournalPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: { heading: string; paragraphs: string[] }[];
  tips: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "smile-healthy-habits",
    tag: "Hygiene",
    title: "5 Habits That Keep Your Smile Healthy",
    excerpt: "Small daily routines that make a big difference for long-term oral health.",
    image: hygieneImg,
    date: "January 15, 2026",
    readTime: "4 min read",
    content: [
      {
        heading: "Brush Twice, Floss Once",
        paragraphs: [
          "The foundation of a healthy smile is simple: brush your teeth twice a day for two minutes, and floss at least once daily. Brushing removes plaque from tooth surfaces, while flossing cleans the tight spaces between teeth where your brush can't reach.",
          "Use a soft-bristled brush and gentle circular motions. Aggressive brushing can wear down enamel and irritate gums, doing more harm than good. Replace your toothbrush every 3-4 months or sooner if the bristles fray.",
        ],
      },
      {
        heading: "Don't Skip the Tongue",
        paragraphs: [
          "Bacteria love to hide on your tongue, causing bad breath and contributing to plaque buildup. A gentle scrape with your toothbrush or a tongue scraper each morning can make a surprising difference in how fresh your mouth feels.",
        ],
      },
      {
        heading: "Watch What You Drink",
        paragraphs: [
          "Water is your smile's best friend. It rinses away food particles and neutralizes acids. Limit sugary drinks and acidic beverages like soda and citrus juices, which erode enamel over time. If you do indulge, rinse with water afterward.",
        ],
      },
      {
        heading: "Eat a Tooth-Friendly Diet",
        paragraphs: [
          "What you eat has a direct impact on your teeth. Calcium-rich foods like milk, cheese, and yogurt help strengthen enamel, while crunchy fruits and vegetables like apples, carrots, and celery stimulate saliva flow, which naturally cleans teeth. Limit sugary, sticky snacks that cling to your teeth and feed harmful bacteria.",
        ],
      },
      {
        heading: "Regular Checkups Matter",
        paragraphs: [
          "Even the best home routine can't replace professional cleanings. Visit your dentist every six months for a thorough cleaning and exam. Early detection of issues like cavities or gum disease saves you pain, time, and money down the road.",
        ],
      },
    ],
    tips: [
      "Wait 30 minutes after eating before brushing — acids soften enamel temporarily.",
      "Chew sugar-free gum after meals to stimulate saliva, your mouth's natural defense.",
      "Use fluoride toothpaste to strengthen enamel and fight decay.",
      "Invest in an electric toothbrush for more consistent cleaning power.",
      "Avoid smoking — it stains teeth and dramatically increases gum disease risk.",
    ],
  },
  {
    slug: "in-clinic-vs-home-whitening",
    tag: "Whitening",
    title: "In-Hospital vs At-Home Whitening",
    excerpt: "What actually works, what's safe, and what to expect from each option.",
    image: whiteningImg,
    date: "February 3, 2026",
    readTime: "5 min read",
    content: [
      {
        heading: "In-Hospital Professional Whitening",
        paragraphs: [
          "In-hospital whitening delivers the fastest, most dramatic results. Using professional-grade peroxide gel and often activated by a special LED light, a single session can lighten your teeth by several shades in under an hour.",
          "The biggest advantage is safety and supervision. Your gums are protected, the concentration is precisely controlled, and any sensitivity is managed immediately. Results typically last 1-3 years with good oral care.",
        ],
      },
      {
        heading: "At-Home Whitening Kits",
        paragraphs: [
          "Over-the-counter strips, trays, and pens offer convenience at a lower cost. However, the peroxide concentration is much weaker, meaning results take weeks of consistent use and are usually subtler.",
          "Custom take-home trays from your dentist bridge the gap. They fit your teeth precisely, use a stronger but safe gel, and let you whiten gradually over 1-2 weeks. This is a great middle ground for many patients.",
        ],
      },
      {
        heading: "What to Watch Out For",
        paragraphs: [
          "DIY remedies like baking soda, lemon juice, or activated charcoal can damage enamel and irritate gums. Stick to products with the ADA seal of approval or treatments supervised by your dentist.",
          "Sensitivity is the most common side effect. It usually fades within a few days. Using a desensitizing toothpaste before and after whitening helps minimize discomfort.",
        ],
      },
    ],
    tips: [
      "Avoid coffee, tea, and red wine for 48 hours after whitening — pores in enamel are open and stain easily.",
      "Professional whitening is ideal for special occasions — fast, safe, and reliable.",
      "At-home kits work best for maintenance between professional treatments.",
      "Not everyone is a candidate — whitening won't work on crowns, veneers, or deep intrinsic stains.",
      "Always consult your dentist before starting any whitening regimen.",
    ],
  },
  {
    slug: "child-first-dental-visit",
    tag: "Kids",
    title: "Your Child's First Dental Visit",
    excerpt: "How we make the first appointment a positive experience for little ones.",
    image: kidsImg,
    date: "March 10, 2026",
    readTime: "3 min read",
    content: [
      {
        heading: "When to Schedule the First Visit",
        paragraphs: [
          "The Indian Dental Association recommends bringing your child in by their first birthday or within six months of their first tooth erupting. Early visits help us catch any developmental issues and familiarize your child with the dental environment.",
          "Don't wait until there's a problem. Early positive experiences build trust and reduce dental anxiety for life. Children who start young are far more likely to maintain regular dental care as adults.",
        ],
      },
      {
        heading: "What Happens at the First Visit",
        paragraphs: [
          "We keep it gentle and fun. The dentist will examine your child's teeth, gums, and jaw development, clean any teeth present, and apply a fluoride varnish if appropriate. We also discuss diet, thumb-sucking, and brushing techniques with parents.",
          "Your child can sit in your lap for comfort. We use kid-friendly language, show them our tools, and often reward them with a small sticker or toy. The goal is to make them feel safe and happy.",
        ],
      },
      {
        heading: "Preparing Your Child at Home",
        paragraphs: [
          "Read children's books about going to the dentist and play pretend dentist games. Avoid using scary words like 'pain,' 'shot,' or 'drill.' Instead, describe the dentist as a friendly tooth doctor who helps keep smiles strong.",
          "Schedule the appointment for a time when your child is well-rested and fed. A tired, hungry child is less likely to cooperate. Bring a favorite comfort toy if it helps.",
        ],
      },
    ],
    tips: [
      "Never bribe your child with sweets to behave at the dentist — it sends the wrong message.",
      "Stay calm yourself — children pick up on parental anxiety easily.",
      "Start brushing as soon as the first tooth appears with a rice-grain sized smear of toothpaste.",
      "Limit juice and sugary snacks — cavities are the most common childhood disease.",
      "Make dental visits a regular, routine part of your child's health care, not just for emergencies.",
    ],
  },
];
