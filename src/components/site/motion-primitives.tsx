import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/* ---------------- Reveal: fade + rise on enter ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? undefined : { opacity: 0, y }}
      animate={inView && !reduced ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- TextReveal: line-by-line mask reveal ---------------- */
export function TextReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={className}>
      <Tag className="contents">
        {lines.map((line, i) => (
          <span key={line + i} className="block overflow-hidden">
            <motion.span
              className={cn("block", lineClassName)}
              initial={reduced ? undefined : { y: "110%" }}
              animate={inView && !reduced ? { y: "0%" } : undefined}
              transition={{ duration: 1.1, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

/* ---------------- ImageReveal: clip-path curtain + slow scale ---------------- */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        className="h-full w-full"
        initial={reduced ? undefined : { clipPath: "inset(0 0 100% 0)", scale: 1.12 }}
        animate={inView && !reduced ? { clipPath: "inset(0 0 0% 0)", scale: 1 } : undefined}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}

/* ---------------- Parallax wrapper ---------------- */
export function Parallax({
  children,
  distance = 80,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------- MagneticButton ---------------- */
export function MagneticButton({
  children,
  onClick,
  variant = "solid",
  className,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setOffset({
          x: (e.clientX - (r.left + r.width / 2)) * 0.28,
          y: (e.clientY - (r.top + r.height / 2)) * 0.34,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={cn(
        "eyebrow inline-flex items-center justify-center gap-3 px-8 py-4 transition-colors duration-500",
        variant === "solid" && "bg-earth text-ivory hover:bg-earth-deep",
        variant === "outline" &&
          "border border-earth/35 text-earth hover:border-earth hover:bg-earth hover:text-ivory",
        variant === "ghost" && "text-earth hover:text-terracotta",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}

/* ---------------- Marquee ---------------- */
export function Marquee({
  items,
  className,
  duration = 34,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex w-max items-center gap-14 will-change-transform"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={item + i} className="eyebrow flex items-center gap-14 whitespace-nowrap">
            {item}
            <span className="inline-block size-1 rounded-full bg-copper" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------- SmoothScroll (Lenis) ---------------- */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}

/* ---------------- Desktop custom cursor ---------------- */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a,button,[data-cursor='hover']")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden rounded-full border border-earth/60 mix-blend-multiply md:block"
      animate={{
        x: pos.x - (active ? 22 : 7),
        y: pos.y - (active ? 22 : 7),
        width: active ? 44 : 14,
        height: active ? 44 : 14,
        backgroundColor: active ? "transparent" : "var(--earth)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.25 }}
    />
  );
}
