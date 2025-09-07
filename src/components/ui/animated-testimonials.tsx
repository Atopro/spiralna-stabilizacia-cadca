"use client";
import * as React from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: AnimatedTestimonial[];
  autoplay?: boolean;
  className?: string;
}) {
  const [active, setActive] = React.useState(0);
  const handleNext = () => setActive((p) => (p + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const isActive = (i: number) => i === active;

  React.useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(handleNext, 5000);
    return () => clearInterval(id);
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* Image stack */}
        <div>
          <div className="relative h-72 md:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.src + i}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(i) ? 1 : 0.7,
                    scale: isActive(i) ? 1 : 0.95,
                    z: isActive(i) ? 0 : -100,
                    rotate: isActive(i) ? 0 : randomRotateY(),
                    zIndex: isActive(i) ? 999 : testimonials.length + 2 - i,
                    y: isActive(i) ? [0, -60, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text + controls */}
        <div className="flex justify-between flex-col py-2">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-white">{testimonials[active].name}</h3>
            <p className="text-sm text-white/80">{testimonials[active].designation}</p>
            <motion.p className="text-lg text-white/85 mt-6 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * i }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-3 pt-10 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center group/button hover:bg-white/15 transition"
              aria-label="Predchádzajúce"
            >
              <IconArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center group/button hover:bg-white/15 transition"
              aria-label="Ďalšie"
            >
              <IconArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}