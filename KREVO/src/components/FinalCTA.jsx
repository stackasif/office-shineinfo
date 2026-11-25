"use client";

import { motion, useReducedMotion } from "motion/react";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-[#E6E3D6] py-16 text-[#22201E] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-3xl border border-[#B8B4A9] bg-[#22201E] px-6 py-12 text-[#E6E3D6] sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div variants={reveal}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8B4A9]">
                Your next campaign starts here
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-6xl">
                Ready to create something people remember?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#D0CCC0] sm:text-base">
                Bring your brand and campaign idea to KREVO. Find creators who
                fit your vision and turn your brief into creator-led content.
              </p>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-start gap-4 lg:items-end"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#E6E3D6] px-6 py-3.5 text-sm font-semibold text-[#22201E] transition-colors hover:bg-white"
              >
                Find your creator
                <span aria-hidden="true" className="ml-3 text-base">
                  →
                </span>
              </a>

              <p className="max-w-xs text-left text-xs leading-5 text-[#B8B4A9] lg:text-right">
                Start with your campaign brief. Build the right creator
                collaboration from there.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={reveal}
            className="mt-12 border-t border-[#514E47] pt-5"
          >
            <p className="text-xs tracking-wide text-[#B8B4A9]">
              KREVO — Creator collaborations, made clearer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
