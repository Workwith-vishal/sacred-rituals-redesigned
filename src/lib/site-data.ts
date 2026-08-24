import pHair from "@/assets/p-hair.jpg";
import pSkin from "@/assets/p-skin.jpg";
import pDigestion from "@/assets/p-digestion.jpg";
import pSleep from "@/assets/p-sleep.jpg";
import pCopper from "@/assets/p-copper.jpg";
import pRose from "@/assets/p-rose.jpg";
import pGhrita from "@/assets/p-ghrita.jpg";
import pScalp from "@/assets/p-scalp.jpg";
import iNeem from "@/assets/i-neem.jpg";
import iGinger from "@/assets/i-ginger.jpg";
import iLavender from "@/assets/i-lavender.jpg";
import iRose from "@/assets/i-rose.jpg";
import iGhee from "@/assets/i-ghee.jpg";
import iCastor from "@/assets/i-castor.jpg";
import iCopper from "@/assets/i-copper.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAt: number;
  image: string;
  hoverImage: string;
  category: string;
  variants: string[];
  collection: "nabhi-sutra" | "adhyay";
};

export const products: Product[] = [
  {
    id: "hair-oil",
    name: "Healthy Hair Care Belly Button Oil",
    tagline: "For hair that feels nourished",
    description:
      "A traditional navel oiling blend of bhringraj, curry leaf and cold-pressed carriers, made for the nightly hair ritual.",
    price: 499,
    compareAt: 699,
    image: pHair,
    hoverImage: iNeem,
    category: "HAIR",
    variants: ["15 ml", "30 ml"],
    collection: "nabhi-sutra",
  },
  {
    id: "skin-oil",
    name: "Sensational Skin Care Belly Button Oil",
    tagline: "Rose, saffron & sweet almond",
    description:
      "A luminous nabhi oil built around rose, saffron and almond — three drops in the navel before sleep.",
    price: 499,
    compareAt: 699,
    image: pSkin,
    hoverImage: iRose,
    category: "SKIN",
    variants: ["15 ml", "30 ml"],
    collection: "nabhi-sutra",
  },
  {
    id: "digestion-oil",
    name: "Daily Digestion & Detox Belly Button Oil",
    tagline: "Ginger, fennel & ajwain",
    description:
      "Warming carminative herbs infused slowly into a light base for the morning digestion ritual.",
    price: 499,
    compareAt: 699,
    image: pDigestion,
    hoverImage: iGinger,
    category: "DIGESTION",
    variants: ["15 ml", "30 ml"],
    collection: "nabhi-sutra",
  },
  {
    id: "sleep-oil",
    name: "Sleep & Stress Relief Belly Button Oil",
    tagline: "Lavender & vetiver",
    description:
      "A quiet, low-lit blend of lavender and vetiver for the last ten minutes of the day.",
    price: 499,
    compareAt: 699,
    image: pSleep,
    hoverImage: iLavender,
    category: "SLEEP",
    variants: ["15 ml", "30 ml"],
    collection: "nabhi-sutra",
  },
  {
    id: "scalp-oil",
    name: "Shirodhara Scalp Therapy Oil",
    tagline: "The slow head ritual",
    description:
      "A shirodhara-inspired scalp oil for unhurried, warm-oil head massage — the oldest way to end a long day.",
    price: 799,
    compareAt: 999,
    image: pScalp,
    hoverImage: iCastor,
    category: "HAIR",
    variants: ["100 ml", "200 ml"],
    collection: "nabhi-sutra",
  },
  {
    id: "rose-water",
    name: "Pure Rose Water",
    tagline: "Steam-distilled, single ingredient",
    description:
      "Steam-distilled damask rose water with nothing added. A mist for skin, a splash for the senses.",
    price: 349,
    compareAt: 449,
    image: pRose,
    hoverImage: iRose,
    category: "SKIN",
    variants: ["100 ml", "200 ml"],
    collection: "adhyay",
  },
  {
    id: "copper-stems",
    name: "Copper Stems",
    tagline: "Reusable copper straws",
    description:
      "Hand-finished copper stems for drinking water the old way. Reusable, plastic-free, quietly beautiful.",
    price: 599,
    compareAt: 799,
    image: pCopper,
    hoverImage: iCopper,
    category: "HYDRATION",
    variants: ["Set of 2", "Set of 4"],
    collection: "adhyay",
  },
  {
    id: "shata-dhauta-ghrita",
    name: "Shata Dhauta Ghrita",
    tagline: "Ghee, washed 100 times",
    description:
      "Cow's ghee washed a hundred times in water until it turns cool, white and silken — a classical preparation.",
    price: 899,
    compareAt: 1099,
    image: pGhrita,
    hoverImage: iGhee,
    category: "DAILY WELLNESS",
    variants: ["25 g", "50 g"],
    collection: "adhyay",
  },
];

export const categories = [
  { name: "SKIN", image: pSkin, note: "Nabhi oils, rose water, ghrita" },
  { name: "HAIR", image: pHair, note: "Belly button oil & scalp therapy" },
  { name: "DIGESTION", image: pDigestion, note: "Warming daily blends" },
  { name: "SLEEP", image: pSleep, note: "Evening wind-down rituals" },
  { name: "STRESS", image: iLavender, note: "Slow, grounding oils" },
  { name: "DAILY WELLNESS", image: pGhrita, note: "Everyday classical staples" },
  { name: "HYDRATION", image: pCopper, note: "Copper stems & vessels" },
  { name: "KIDS", image: iGhee, note: "Gentle, minimal formulations" },
];

export const ingredients = [
  {
    name: "NEEM",
    image: iNeem,
    note: "Bitter, cleansing, endlessly useful — the courtyard tree of Indian households.",
  },
  { name: "GINGER", image: iGinger, note: "Warming root at the centre of the digestion ritual." },
  { name: "LAVENDER", image: iLavender, note: "For the quiet hour, when the lights go low." },
  { name: "ROSE", image: iRose, note: "Steam-distilled damask petals. Cooling and familiar." },
  { name: "GHEE", image: iGhee, note: "Washed a hundred times until it turns cool and white." },
  { name: "CASTOR", image: iCastor, note: "Thick, slow oil traditionally used for scalp and skin." },
  { name: "COPPER", image: iCopper, note: "The oldest vessel in the Indian kitchen." },
];

export const testimonials = [
  {
    quote:
      "I have been using the belly button oil every night for two months. It has become the part of my routine I actually look forward to.",
    name: "Ritika S.",
    place: "Bengaluru",
  },
  {
    quote:
      "The rose water is genuinely pure — no perfume, no sting. It smells like my grandmother's terrace.",
    name: "Aparna M.",
    place: "Pune",
  },
  {
    quote:
      "Ordered the copper stems on a whim and now nobody in the house drinks water any other way.",
    name: "Vikram J.",
    place: "Delhi",
  },
  {
    quote: "The Shata Dhauta Ghrita is beautifully made. Cool, light, and a little goes very far.",
    name: "Neha P.",
    place: "Ahmedabad",
  },
  {
    quote:
      "What I like is how simple it is. Three drops, that's it. The packaging feels like a gift every time.",
    name: "Sanjana K.",
    place: "Mumbai",
  },
  {
    quote: "The scalp therapy oil turned my Sunday head massage into a proper ritual.",
    name: "Meera D.",
    place: "Kochi",
  },
];

export const journal = [
  {
    title: "Rose Water: how a single-ingredient mist earned its place",
    kicker: "INGREDIENT",
    excerpt:
      "Steam distillation, why purity matters more than fragrance, and the many small ways rose water fits into a day.",
    image: iRose,
    read: "6 min",
  },
  {
    title: "Copper Water & the oldest vessel in the Indian kitchen",
    kicker: "RITUAL",
    excerpt: "Why copper vessels survived every trend, and how to care for them properly.",
    image: iCopper,
    read: "5 min",
  },
  {
    title: "Shata Dhauta Ghrita: ghee washed one hundred times",
    kicker: "PREPARATION",
    excerpt: "A classical preparation that takes hours of patient washing to become cool and white.",
    image: iGhee,
    read: "7 min",
  },
  {
    title: "Ayurveda & wellness: rituals over routines",
    kicker: "PHILOSOPHY",
    excerpt: "Small, repeatable acts of care — and why they outlast every seven-day challenge.",
    image: iNeem,
    read: "4 min",
  },
];

export const FREE_SHIPPING_THRESHOLD = 750;
