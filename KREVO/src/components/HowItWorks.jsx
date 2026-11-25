"use client";

import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your brand, product, content style, platform, and budget. A clear brief helps us understand the creators your campaign needs.",
    detail: "Your campaign brief",
    tags: ["Campaign goal", "Content type", "Budget range"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Person working on a laptop at a desk",
    visualTitle: "Create campaign brief",
    visualDescription: "Tell us a little about your campaign",
    visualItems: ["Brand and product details", "Content style and platform", "Campaign budget"],
    visualLabel: "Brief in progress",
  },
  {
    number: "02",
    title: "Discover your best-fit creators",
    description:
      "KREVO helps you explore relevant creators based on your campaign requirements, content style, and audience fit.",
    detail: "Creator matching",
    tags: ["Niche relevance", "Content quality", "Audience fit"],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Lifestyle creator portrait",
    visualTitle: "Discover creators",
    visualDescription: "A shortlist shaped around your brief",
    visualItems: ["Beauty and lifestyle", "Audience match", "Content quality"],
    visualLabel: "Creators matched",
  },
  {
    number: "03",
    title: "Choose and confirm",
    description:
      "Review creator profiles, compare their work, and confirm the creators who feel right for your brand and campaign.",
    detail: "Your creator shortlist",
    tags: ["Review profiles", "Compare creators", "Confirm selection"],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Creator portrait for a collaboration profile",
    visualTitle: "Creator profile",
    visualDescription: "Review the work before confirming",
    visualItems: ["Profile and portfolio", "Campaign deliverables", "Collaboration details"],
    visualLabel: "Ready to confirm",
  },
  {
    number: "04",
    title: "Receive content made for your brand",
    description:
      "Creators produce content based on the agreed brief. Review the submissions and receive content ready for your marketing needs.",
    detail: "Content delivery",
    tags: ["Creator production", "Content review", "Final delivery"],
    image:
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Creator filming product content with a camera",
    visualTitle: "Content delivery",
    visualDescription: "Your campaign content, in one place",
    visualItems: ["Creator submission", "Review and feedback", "Final content delivery"],
    visualLabel: "Content ready",
  },
];

const ease = [0.22, 1, 0.36, 1];

function StepVisual({ step, index }) {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[#B8B4A9] bg-[#d8d3c6] sm:min-h-[360px]">
      <img
        src={step.image}
        alt={step.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#22201E]/55 via-[#22201E]/10 to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
        <div className="max-w-[340px] rounded-2xl border border-white/50 bg-[#F4F1E9]/95 p-5 shadow-xl backdrop-blur-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[#22201E]">{step.visualTitle}</p>
            <span className="rounded-full bg-[#e5e0d4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#625F57]">
              {step.number}
            </span>
          </div>
          <p className="mt-1 text-xs leading-5 text-[#777267]">{step.visualDescription}</p>

          <div className="mt-4 space-y-2.5">
            {step.visualItems.map((item, itemIndex) => (
              <div key={item} className="flex items-center gap-2.5 rounded-lg bg-white/75 px-3 py-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22201E] text-[10px] font-semibold text-[#E6E3D6]">
                  {itemIndex + 1}
                </span>
                <span className="text-xs font-medium text-[#4F4B43]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#d8d3c6] pt-3">
            <span className="text-[11px] font-medium text-[#625F57]">{step.visualLabel}</span>
            <span aria-hidden="true" className="text-sm text-[#22201E]">↗</span>
          </div>
        </div>
      </div>

      <span className="absolute right-5 top-5 rounded-full bg-[#E6E3D6]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#22201E]">
        KREVO workflow
      </span>
    </div>
  );
}

function StepSection({ step, index, reduceMotion }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      className="grid gap-7 rounded-3xl border border-[#B8B4A9] bg-[#eceae2] p-5 sm:gap-9 sm:p-7 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-9"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#ded8ca] px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-[#4F4B43]">
            STEP {step.number}
          </span>
          <span className="h-px w-10 bg-[#B8B4A9]" />
        </div>

        <h3 className="mt-5 max-w-lg text-2xl font-semibold leading-[1.12] tracking-tight text-[#22201E] sm:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#625F57] sm:text-base">
          {step.description}
        </p>

        <div className="mt-7 border-t border-[#B8B4A9] pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#777267]">
            {step.detail}
          </p>
          <div className="flex flex-wrap gap-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#B8B4A9] px-3 py-1.5 text-xs text-[#4F4B43]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <StepVisual step={step} index={index} />
      </div>
    </motion.article>
  );
}

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#E6E3D6] py-20 text-[#22201E] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777267]">
              How it works
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              From your brief to content that moves your brand.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:justify-self-end"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.12, ease }}
          >
            Finding the right creators should feel simple. KREVO brings the
            campaign journey into one clear process, so you can move from an
            idea to creator-made content with confidence.
          </motion.p>
        </div>

        <div className="mt-12 space-y-5 sm:space-y-6">
          {steps.map((step, index) => (
            <StepSection
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#514E47] bg-[#22201E] px-6 py-7 text-[#E6E3D6] sm:flex-row sm:items-center sm:justify-between sm:px-8"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8B4A9]">
              Ready when you are
            </p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
              Your next campaign starts with a brief.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#D0CCC0]">
              Tell us what you want to create. We’ll help you find creators
              who fit the work.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#E6E3D6] px-5 py-3 text-sm font-semibold text-[#22201E] transition-colors hover:bg-white"
          >
            Find your creator
            <span aria-hidden="true" className="ml-3 text-base">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
