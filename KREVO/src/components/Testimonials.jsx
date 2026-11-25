"use client";

import { motion, useReducedMotion } from "motion/react";

const testimonials = [
  {
    quote:
      "KREVO made it easier to organise our creator campaign and keep the content requirements clear from the beginning.",
    name: "Brand Partner",
    role: "Campaign collaboration",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=85",
    imageAlt: "Portrait of a female creator",
    type: "Brand",
  },
  {
    quote:
      "Having the campaign details and collaboration expectations organised in one place makes the process feel much smoother.",
    name: "Creator Partner",
    role: "Creator collaboration",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=85",
    imageAlt: "Portrait of a male creator",
    type: "Creator",
  },
  {
    quote:
      "The process helped us move from a campaign idea to working with creators without losing track of the important details.",
    name: "Agency Partner",
    role: "Campaign management",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&h=240&q=85",
    imageAlt: "Portrait of an agency professional",
    type: "Agency",
  },
];

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#E6E3D6] py-20 text-[#22201E] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777267]">
              The KREVO experience
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              Better collaborations start with a better process.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:justify-self-end"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            A good creator partnership needs clear expectations, organised
            communication, and content that serves the campaign. That is the
            experience KREVO is designed to support.
          </motion.p>
        </div>

        <motion.div
          className="mt-12 grid gap-4 lg:grid-cols-3"
          variants={cardContainerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.type}
              variants={cardItemVariants}
              className="flex min-h-[360px] flex-col rounded-2xl border border-[#B8B4A9] bg-[#eceae2] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777267]">
                  {`0${index + 1}`} / {item.type}
                </p>
                <span className="h-px w-10 bg-[#B8B4A9]" />
              </div>

              <blockquote className="mt-7 flex-1 text-base font-medium leading-7 text-[#22201E] sm:text-lg">
                “{item.quote}”
              </blockquote>

              <div className="mt-8 flex items-center gap-3 border-t border-[#B8B4A9] pt-5">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-12 w-12 rounded-full border border-[#B8B4A9] object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="mt-0.5 text-xs text-[#777267]">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
