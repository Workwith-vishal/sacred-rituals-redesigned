import { Suspense, lazy, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { MagneticButton, TextReveal } from "@/components/site/motion-primitives";

const HeroBlob = lazy(() => import("@/components/site/hero-blob"));

export function Hero() {
  const [showBlob, setShowBlob] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;
    const id = window.setTimeout(() => setShowBlob(true), 1200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden bg-ivory">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduced ? undefined : { scale: 1.14 }}
        animate={reduced ? undefined : { scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={heroImg}
          alt="Nabhi Sutra belly button oil with neem leaves, rose petals and a copper vessel"
          width={1920}
          height={1200}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ivory/45" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ivory via-ivory/50 to-transparent" />
      </motion.div>

      {showBlob && (
        <div className="pointer-events-none absolute top-1/2 right-[-6%] -z-10 hidden h-[62vh] w-[52vw] -translate-y-1/2 opacity-80 md:block">
          <Suspense fallback={null}>
            <HeroBlob />
          </Suspense>
        </div>
      )}

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pt-32 pb-16 md:px-10 md:pb-20">
        <motion.p
          className="eyebrow mb-8 text-earth/70"
          initial={reduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Est. Ayurveda · Belly Button Oiling · India
        </motion.p>

        <TextReveal
          as="h1"
          lines={["ANCIENT RITUALS.", "REIMAGINED."]}
          className="display-xl text-earth-deep"
          lineClassName="tracking-[-0.03em]"
          delay={0.5}
        />

        <div className="mt-10 flex flex-col gap-10 border-t border-earth/15 pt-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="max-w-md text-[0.95rem] leading-relaxed text-earth/80"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Reviving Ayurvedic and natural age-old rituals for modern everyday wellness.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
          >
            <MagneticButton
              variant="solid"
              onClick={() =>
                document.getElementById("rituals")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Rituals
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() =>
                document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Story
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex items-center gap-3 text-earth/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <ArrowDown className="size-4" strokeWidth={1.25} />
          <span className="eyebrow">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
