"use client";

import { motion, useReducedMotion } from "motion/react";

const benefits = [
  {
    number: "01",
    title: "Creators that fit your brand",
    description:
      "Find creators based on your niche, campaign goals, content style, and audience relevance instead of scrolling through endless profiles.",
    proof: "Relevant creator discovery",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Content creator posing for a lifestyle brand photoshoot",
    imageLabel: "Creator discovery",
  },
  {
    number: "02",
    title: "One place for your campaign",
    description:
      "Keep your brief, creator selection, collaboration details, and content progress organised in one clear campaign workflow.",
    proof: "A more organised workflow",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Creative team planning a campaign around a table",
    imageLabel: "Campaign workspace",
  },
  {
    number: "03",
    title: "Clear collaboration from start to finish",
    description:
      "Know what has been agreed, what content is expected, and where each collaboration stands throughout the campaign.",
    proof: "Transparent campaign progress",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Team members discussing and reviewing project progress",
    imageLabel: "Collaboration progress",
  },
  {
    number: "04",
    title: "Content made for real audiences",
    description:
      "Work with creators who understand their communities and create content that feels natural to the platforms where people discover brands.",
    proof: "Creator-led storytelling",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Creative content production setup",
    imageLabel: "Authentic content",
  },
];

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.08,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseKrevo() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#E6E3D6] py-20 text-[#22201E] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777267]">
              Why choose KREVO
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              Less time managing. More time creating.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:justify-self-end"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Creator collaborations should move your brand forward, not add
            more complexity to your day. KREVO brings the key parts of the
            process together so your team can focus on the work that matters.
          </motion.p>
        </div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2"
          variants={cardContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.08 }}
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.number}
              variants={reduceMotion ? undefined : cardItem}
              className="flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-[#B8B4A9] bg-[#eceae2]"
            >
              <div className="relative h-52 overflow-hidden bg-[#D8D5CC] sm:h-60">
                <img
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22201E]/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 rounded-full border border-white/40 bg-[#22201E]/45 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
                  {benefit.imageLabel}
                </span>
                <span className="absolute right-5 top-4 text-xs font-semibold tracking-[0.18em] text-white drop-shadow">
                  {benefit.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="max-w-md text-xl font-semibold leading-snug sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#625F57]">
                  {benefit.description}
                </p>

                <div className="mt-auto border-t border-[#B8B4A9] pt-4">
                  <p className="text-xs font-medium text-[#4F4B43]">
                    {benefit.proof}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 rounded-2xl border border-[#B8B4A9] bg-[#22201E] px-6 py-8 text-[#E6E3D6] sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8B4A9]">
              Built for better collaborations
            </p>
            <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
              Make every creator collaboration count.
            </h3>
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#D0CCC0] lg:mt-0">
            Bring your next campaign to KREVO and build a creator partnership
            around what your brand actually needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
