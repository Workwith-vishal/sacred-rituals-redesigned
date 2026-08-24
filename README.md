# Sacred Rituals Redesigned

Redesign the existing Nabhi Sutra website into a premium, award-level Ayurvedic wellness e-commerce experience.
Reference brand/site:
https://nabhisutra.com/
IMPORTANT:
Do not make a generic Shopify redesign.
Do not copy another website.
Preserve the existing Nabhi Sutra brand, products, content, pricing, and e-commerce intent, but completely transform the visual experience.
CREATIVE DIRECTION
Core concept:
"ANCIENT RITUALS. REIMAGINED."
Visual feeling:
Indian Ayurveda × modern luxury wellness × editorial fashion × cinematic digital experience.
Use:
warm ivory / cream backgrounds
deep earthy brown
muted botanical green
terracotta
subtle copper accents
elegant serif display typography
clean modern sans-serif
large typography
generous whitespace
organic botanical imagery
premium product photography
Avoid:
generic green wellness websites
excessive rounded cards
excessive gradients
SaaS-style UI
clutter
too many animations
fake medical claims
TECH STACK
Use:
React + TypeScript + Tailwind CSS + Framer Motion/GSAP + Lenis + React Three Fiber/Three.js where useful + Lucide icons.
Use modern React Bits-style components selectively:
magnetic buttons
text reveals
image reveals
marquee
spotlight cards
hover interactions
animated navigation
smooth section transitions
Do NOT add libraries just for decoration.
HERO
Create a cinematic full-screen hero.
Headline:
ANCIENT RITUALS.
REIMAGINED.
Subtext:
"Reviving Ayurvedic and natural age-old rituals for modern everyday wellness."
Primary CTA:
EXPLORE RITUALS
Secondary CTA:
OUR STORY
Hero visual:
premium Nabhi Sutra products surrounded by subtle botanical/organic forms.
Add a lightweight Three.js/R3F visual layer:
an abstract oil droplet / botanical form that subtly reacts to mouse movement and scroll.
Keep the 3D subtle and performance-friendly.
NAVBAR
Create a minimal floating navbar.
Logo:
Nabhi Sutra
Links:
SHOP
RITUALS
ADHYAY
OUR STORY
JOURNAL
Right:
SEARCH
ACCOUNT
CART
Add a thin promotional announcement bar above it.
On scroll:
navbar becomes compact and slightly translucent.
Create a fullscreen animated menu on mobile and desktop.
SECTION 01 — BRAND STATEMENT
Large editorial typography:
WELLNESS IS NOT A TREND.
IT IS A RITUAL.
Use a slow image reveal / parallax botanical background.
Keep this section visually minimal.
SECTION 02 — FIND YOUR RITUAL
Create an interactive category experience.
Categories:
SKIN
HAIR
DIGESTION
SLEEP
STRESS
DAILY WELLNESS
HYDRATION
KIDS
Use large editorial cards instead of ordinary category tiles.
Hovering a card reveals its related product imagery.
CTA:
DISCOVER YOUR RITUAL
SECTION 03 — FEATURED PRODUCTS
Show real Nabhi Sutra products from the provided website.
Prioritize products such as:
Healthy Hair Care Belly Button Oil
Sensational Skin Care Belly Button Oil
Daily Digestion & Detox
Sleep / Stress Relief Oil
Copper Stems
Pure Rose Water
Shata Dhauta Ghrita
Shirodhara Scalp Therapy Oil
Create large premium product cards.
Each card:
image
product name
short description
sale price
original price
quick add
Hover:
secondary image + smooth motion.
Do NOT use a boring 4-column Shopify grid.
SECTION 04 — FROM ROOT TO RITUAL
Create the signature storytelling section.
Large text:
FROM ROOT
TO RITUAL.
As the user scrolls:
ingredient → formulation → product → ritual
Use GSAP/Framer Motion scroll animation.
Images should morph/reveal between stages.
This should be one of the most memorable sections on the website.
SECTION 05 — INGREDIENTS
Create an immersive ingredient showcase.
Examples:
NEEM
GINGER
LAVENDER
ROSE
GHEE
CASTOR
COPPER
Use oversized ingredient names with botanical imagery.
Hovering an ingredient changes the background/image.
Keep the layout editorial rather than card-heavy.
SECTION 06 — ADHYAY
Create a visually distinct premium section for ADHYAY.
Headline:
WELLNESS, THOUGHTFULLY MODERNIZED.
Show:
Rose Water
Copper Stems
Shata Dhauta Ghrita
Bamboo Toothbrush
Scalp Therapy
Use premium product composition and subtle motion.
CTA:
EXPLORE ADHYAY
SECTION 07 — EXPERT
Feature:
Dr. Falguni Chauhan
BAMS (Ayurveda Consultant) | MA Psychology
Headline:
ASK THE EXPERT.
Create an editorial split layout:
portrait + expertise + short introduction.
CTA:
MEET THE EXPERT
Do not make unsupported medical claims.
SECTION 08 — SOCIAL PROOF
Headline:
400,000+ PEOPLE.
ONE JOURNEY TO BETTER WELLNESS.
Create horizontally scrolling testimonial/review cards.
Use real available review content where possible.
Make it feel premium rather than like a standard review widget.
SECTION 09 — SHARK TANK / MEDIA
Create an editorial credibility section:
FROM AYURVEDIC RITUAL
TO SHARK TANK INDIA.
Use the existing media imagery/content.
Add subtle press/media storytelling.
Do not create fake publications or awards.
SECTION 10 — JOURNAL
Title:
THE AYURVEDA JOURNAL
Create an editorial magazine-style layout.
Feature the existing blog topics:
Rose Water
Copper Water
Shata Dhauta Ghrita
Ayurveda & Wellness
Use large featured article + smaller articles.
FOOTER
Large closing statement:
MAKE WELLNESS A RITUAL.
Include:
Shop
Adhyay
Our Story
Journal
Contact
FAQ
Track Order
Instagram
YouTube
Facebook
Newsletter signup.
INTERACTIONS
Use restrained premium motion:
smooth Lenis scrolling
text reveal
image reveal
magnetic buttons
product hover transitions
subtle parallax
animated cart drawer
fullscreen search
fullscreen navigation
scroll-triggered storytelling
subtle cursor interaction on desktop
Create a custom cursor only on desktop.
Respect prefers-reduced-motion.
CART
Create a premium slide-out cart.
Show:
product
quantity
price
subtotal
free-shipping progress
recommended products
Use the existing:
"₹250 away from FREE SHIPPING" logic where applicable.
CTA:
CHECKOUT
PRODUCT QUICK VIEW
Clicking a product opens an elegant quick-view modal with:
large image
product name
price
variants
quantity
add to cart
short description
view product
MOBILE
Do not simply shrink desktop.
Create a deliberate mobile experience:
clean sticky navigation
touch-friendly controls
horizontal product sections
simplified 3D
optimized images
sticky purchase actions where appropriate
PERFORMANCE
Prioritize performance over unnecessary effects.
Lazy-load:
Three.js
large images
below-fold sections
Use:
dynamic imports
responsive images
WebP/AVIF
GPU-conscious animation
Do not allow animation to make the website slow.
DESIGN RULE
The website should feel like:
A premium Ayurvedic editorial experience that happens to be an e-commerce store.
Not:
an e-commerce store with animations added to it.
Every section should have a clear visual purpose.
Use real Nabhi Sutra content and products from the existing site.
Do not use lorem ipsum.
Do not invent products.
Do not invent reviews.
Do not invent medical claims.
Make the first viewport spectacular, then maintain the same visual quality throughout the entire page.
Build reusable React components and keep the code clean and maintainable.
The final result should feel distinctive, cinematic, premium, Indian, modern and highly memorable.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ca46764c-b8f8-4051-a785-503cd1413497).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
