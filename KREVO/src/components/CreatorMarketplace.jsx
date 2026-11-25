"use client";

import { motion, useReducedMotion } from "motion/react";

export default function CreatorMarketplace() {
  const reduceMotion = useReducedMotion();

  const featureCards = [
    {
      number: "01",
      title: "Discover Top Talent",
      description:
        "Browse thousands of verified, certified, and vetted TikTok, TikTok Shop, Instagram, YouTube, Amazon, and UGC creators ready to promote your products.",
    },
    {
      number: "02",
      title: "Hire & Collaborate Securely",
      description:
        "Book creators, manage projects, and communicate securely throughout the entire collaboration process.",
    },
    {
      number: "03",
      title: "Get Scroll-Stopping Content",
      description:
        "Receive high-quality videos and posts with spark codes, ready to boost with ads.",
    },
  ];

  const bottomFeatures = [
    {
      title: "Secure Payments",
      description:
        "We guarantee secure payments between you and the creators and take care of all legal aspects, including contracts and invoices.",
    },
    {
      title: "Certified Creators",
      description:
        "Work with creators who've passed our certifications for quality and expertise.",
    },
    {
      title: "Content is Yours",
      description:
        "You own 100% licensing and distribution rights to use on social, websites, ads, and more.",
    },
  ];

  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.06,
      },
    },
  };

  return (
    <section className="w-full bg-[#E6E3D6] px-4 py-14 text-[#22201E] sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-10 text-center md:mb-12"
          variants={reveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#22201E]/60 sm:text-xs">
            Creator Marketplace
          </span>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Find and Hire Creators Instantly
          </h2>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Responsive Video Panel */}
          <motion.div
            className="w-full min-w-0 lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#eceae2] sm:aspect-[16/10] md:rounded-3xl lg:aspect-auto lg:min-h-[500px] lg:h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/creator-marketplace-demo.mp4"
              />

              {/* Dark Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/20" />

              {/* Top Labels */}
              <div className="pointer-events-none absolute left-3 right-3 top-3 z-10 flex items-center justify-between gap-2 sm:left-4 sm:right-4 sm:top-4">
                <div className="max-w-[65%] truncate rounded-lg bg-[#eceae2]/95 px-3 py-2 text-[10px] font-semibold text-[#22201E] sm:text-xs">
                  Live Creator Discovery
                </div>

                <div className="hidden rounded-lg bg-[#22201E]/75 px-3 py-2 text-[10px] font-medium text-white sm:block sm:text-xs">
                  1,300+ Online Now
                </div>
              </div>

              {/* Category Labels */}
              <div className="pointer-events-none absolute left-3 top-14 z-10 hidden flex-wrap gap-2 sm:left-4 sm:flex">
                <span className="rounded-md bg-[#eceae2]/90 px-2.5 py-1 text-[10px] font-semibold text-[#22201E]">
                  Beauty & Skincare
                </span>

                <span className="rounded-md bg-[#eceae2]/90 px-2.5 py-1 text-[10px] font-semibold text-[#22201E]">
                  TikTok & UGC
                </span>

                <span className="rounded-md bg-[#eceae2]/90 px-2.5 py-1 text-[10px] font-semibold text-[#22201E]">
                  Vetted
                </span>
              </div>

              {/* Bottom Information */}
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 rounded-xl bg-[#eceae2]/95 p-3 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3 sm:p-3.5">
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-bold leading-tight text-[#22201E] sm:text-sm">
                    Interactive Platform Demo
                  </p>

                  <p className="mt-1 text-[9px] font-medium leading-relaxed text-[#22201E]/65 sm:text-xs">
                    Auto-filtering by verified ROI & demographics
                  </p>
                </div>

                <span className="shrink-0 rounded-md bg-[#22201E] px-2 py-1.5 text-[8px] font-semibold text-[#eceae2] sm:px-2.5 sm:text-[10px]">
                  Active Marketplace
                </span>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="flex min-w-0 flex-col gap-4 lg:col-span-5 lg:justify-between"
            variants={reduceMotion ? undefined : stagger}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.12 }}
          >
            {featureCards.map((card) => (
              <motion.article
                key={card.number}
                variants={reduceMotion ? undefined : reveal}
                className="rounded-2xl bg-[#eceae2] p-5 transition-colors duration-200 hover:bg-[#e9e6dc] md:rounded-3xl md:p-6"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold leading-snug text-[#22201E] sm:text-lg">
                    {card.title}
                  </h3>

                  <span className="shrink-0 rounded-full bg-[#E1DED4] px-2.5 py-1 font-mono text-[10px] font-semibold text-[#22201E]/60">
                    {card.number}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-[#22201E]/75 sm:text-sm">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Bottom Feature Cards */}
        <motion.div
          className="mt-5 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-3"
          variants={reduceMotion ? undefined : stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
        >
          {bottomFeatures.map((feature) => (
            <motion.article
              key={feature.title}
              variants={reduceMotion ? undefined : reveal}
              className="rounded-2xl bg-[#eceae2] p-5 transition-colors duration-200 hover:bg-[#e9e6dc] md:p-6"
            >
              <h3 className="mb-2 text-sm font-bold text-[#22201E] sm:text-base">
                {feature.title}
              </h3>

              <p className="text-xs leading-relaxed text-[#22201E]/70 sm:text-sm">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
