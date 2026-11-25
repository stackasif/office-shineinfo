"use client";
import Link from "next/link";

// Motion is used for the entrance animations.
// useReducedMotion checks whether the visitor prefers fewer animations.
import { motion, useReducedMotion } from "motion/react";

// --------------------------------------------------
// 1. SMALL REUSABLE ICON COMPONENTS
// --------------------------------------------------

function ArrowRight() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-[#22201E]"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      className="h-3 w-3 fill-current text-white"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 fill-current text-blue-400"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

// --------------------------------------------------
// 2. REUSABLE CREATOR VIDEO CARD
// --------------------------------------------------
// We use this same component for both creator cards.
// The information changes through props.

function CreatorVideoCard({
  position,
  rotation,
  category,
  categoryColor,
  creatorName,
  creatorStats,
  performance,
  performanceColor,
  video,
  delay,
  reduceMotion,
}) {
  return (
    <motion.div
      // Position places the card on the left or right.
      // Width changes according to the screen size.
      className={`absolute ${position} w-[190px] sm:w-[230px] lg:w-[185px] xl:w-[195px]`}

      // Starting position of the animation.
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 25,
        scale: reduceMotion ? 1 : 0.94,
      }}

      // Final position of the animation.
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      // Animation speed and delay.
      transition={{
        duration: reduceMotion ? 0.2 : 0.85,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Main card */}
      <div
        className={`
          group/card
          relative
          aspect-[9/16]
          overflow-hidden
          rounded-2xl
          border-[3px]
          border-[#E6E3D6]
          bg-[#22201E]
          shadow-[0_20px_50px_rgba(34,32,30,0.18)]
          transition-transform
          duration-500
          sm:rounded-3xl
          ${rotation}
        `}
      >
        {/* Creator video */}
        <video
          className="h-full w-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
        />

        {/* Dark overlay helps the text remain readable */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            flex-col
            justify-between
            bg-gradient-to-t
            from-black/85
            via-black/20
            to-transparent
            p-3.5
            text-white
            sm:p-4
            lg:p-3.5
          "
        >
          {/* Top part: category and heart icon */}
          <div className="flex items-center justify-between gap-2">
            <span
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/20
                bg-white/20
                px-2
                py-0.5
                text-[10px]
                font-semibold
                text-white
                backdrop-blur-md
                sm:text-xs
              "
            >
              {/* Small colored dot */}
              <span className={`h-1.5 w-1.5 rounded-full ${categoryColor}`} />
              {category}
            </span>

            {/* Heart icon */}
            <div
              className="
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-black/40
                backdrop-blur-sm
              "
            >
              <HeartIcon />
            </div>
          </div>

          {/* Bottom part: creator details */}
          <div>
            <div className="mb-1 flex items-center gap-1.5">
              <span className="text-xs font-bold tracking-tight text-white sm:text-sm">
                {creatorName}
              </span>

              <VerifiedIcon />
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                gap-2
                text-[10px]
                font-medium
                text-white/80
                sm:text-xs
              "
            >
              <span>{creatorStats}</span>

              <span className={`${performanceColor} font-semibold`}>
                {performance}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------
// 3. MAIN HERO COMPONENT
// --------------------------------------------------

function Hero() {
  // Check if the visitor prefers reduced animations.
  const reduceMotion = useReducedMotion();

  // Common animation settings for the hero text.
  const contentTransition = {
    duration: reduceMotion ? 0.2 : 0.7,
    ease: [0.22, 1, 0.36, 1],
  };

  // Every text element starts slightly below its final position.
  const initialAnimation = {
    opacity: 0,
    y: reduceMotion ? 0 : 22,
  };

  // Every text element moves to this final position.
  const finalAnimation = {
    opacity: 1,
    y: 0,
  };

  return (
    <section
      id="hero"
      className="
        w-full
        min-h-[calc(100svh-105px)]
        flex
        items-center
        overflow-hidden
        bg-[#E6E3D6]
        px-4
        py-12
        text-[#22201E]
        sm:px-6
        md:py-20
        lg:min-h-[calc(100svh-105px)]
        lg:px-12
        lg:py-10
        xl:py-12
      "
    >
      {/* Main container: text on the left and videos on the right */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-12
          lg:gap-6
          xl:gap-8
        "
      >
        {/* ------------------------------------------ */}
        {/* LEFT SIDE: HERO TEXT AND BUTTONS           */}
        {/* ------------------------------------------ */}

        <div className="z-10 flex flex-col items-start lg:col-span-7">
          {/* Small badge above the heading */}
          <motion.div
            initial={initialAnimation}
            animate={finalAnimation}
            transition={{
              ...contentTransition,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#22201E]/10
              bg-[#22201E]/5
              px-3.5
              py-1.5
              lg:mb-4
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-[#22201E]/80
              "
            >
              Top 1% UGC Creator Network
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={initialAnimation}
            animate={finalAnimation}
            transition={{
              ...contentTransition,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="
              mb-5
              text-3xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-[#22201E]
              sm:text-4xl
              md:text-5xl
              lg:mb-4
              lg:text-[48px]
              xl:text-[54px]
            "
          >
            Scale your brand with authentic{" "}
            <span
              className="
                relative
                inline-block
                text-[#22201E]
                underline
                decoration-[#22201E]/30
                underline-offset-8
              "
            >
              creator videos.
            </span>
          </motion.h1>

          {/* Short description below the heading */}
          <motion.p
            initial={initialAnimation}
            animate={finalAnimation}
            transition={{
              ...contentTransition,
              delay: reduceMotion ? 0 : 0.32,
            }}
            className="
              mb-7
              max-w-2xl
              text-[12px]
              font-normal
              leading-relaxed
              text-[#22201E]/80
              sm:text-[14px]
              md:mb-8
              md:text-[16px]
              lg:mb-6
              lg:text-[14px]
              xl:text-[15px]
            "
          >
            Connect with high-converting creators, streamline content
            production, and launch high-impact ad creative tested to
            drive real ROAS across TikTok, Meta, and YouTube.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={initialAnimation}
            animate={finalAnimation}
            transition={{
              ...contentTransition,
              delay: reduceMotion ? 0 : 0.44,
            }}
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-4
              sm:w-auto
              sm:flex-row
              sm:items-center
              lg:gap-3
            "
          >
            {/* Primary button */}
            
            <Link
                href="/find-your-creator"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl bg-[#22201E]
                  px-8 py-4 text-center text-base font-bold text-[#E6E3D6]
                  shadow-lg shadow-[#22201E]/15
                  transition-all duration-300
                  hover:scale-[1.02] hover:bg-[#22201E]/90
                  active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-[#22201E] focus-visible:ring-offset-2
                  lg:px-7 lg:py-3.5 lg:text-sm
                "
              >
              <span>Find Your Creator</span>
              <ArrowRight />
            </Link>

            {/* Secondary button */}
            <a
              href="#join-creators"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border-2
                border-[#22201E]
                bg-transparent
                px-8
                py-4
                text-center
                text-base
                font-bold
                text-[#22201E]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#22201E]/5
                active:scale-[0.98]
                lg:px-7
                lg:py-3.5
                lg:text-sm
              "
            >
              Join as a Creator
            </a>
          </motion.div>

          {/* Social proof: small trust messages below the buttons */}
          <motion.div
            initial={initialAnimation}
            animate={finalAnimation}
            transition={{
              ...contentTransition,
              delay: reduceMotion ? 0 : 0.56,
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-6
              border-t
              border-[#22201E]/10
              pt-8
              text-xs
              font-medium
              text-[#22201E]/70
              sm:gap-10
              sm:text-sm
              lg:mt-7
              lg:gap-7
              lg:pt-5
              lg:text-xs
            "
          >
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Verified 48h turnaround</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>No upfront commitments</span>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------ */}
        {/* RIGHT SIDE: CREATOR VIDEO CARDS             */}
        {/* ------------------------------------------ */}

        <div
          className="
            relative
            flex
            items-center
            justify-center
            py-6
            sm:py-10
            lg:col-span-5
            lg:py-0
          "
        >
          {/* Soft background glow behind the cards */}
          <div
            className="
              pointer-events-none
              absolute
              -z-10
              h-72
              w-72
              rounded-full
              bg-[#22201E]/5
              blur-3xl
              sm:h-96
              sm:w-96
              lg:h-72
              lg:w-72
            "
          />

          {/* Container that holds both video cards */}
          <div
            className="
              relative
              flex
              h-[480px]
              w-full
              max-w-[340px]
              items-center
              justify-center
              sm:h-[540px]
              sm:max-w-[420px]
              md:max-w-[460px]
              lg:h-[400px]
              lg:max-w-[360px]
              xl:h-[420px]
              xl:max-w-[390px]
            "
          >
            {/* First creator card */}
            <CreatorVideoCard
              position="-left-2 top-2 z-10 sm:left-2 sm:top-4"
              rotation="rotate-[-7deg] hover:rotate-[-3deg]"
              category="Beauty & Skincare"
              categoryColor="bg-rose-400"
              creatorName="Elena Rostova"
              creatorStats="UGC Creator • 182k"
              performance="+3.8x ROAS"
              performanceColor="text-emerald-300"
              video="/videos/creator-beauty.mp4"
              delay={0.3}
              reduceMotion={reduceMotion}
            />

            {/* Second creator card */}
            <CreatorVideoCard
              position="right-0 bottom-2 z-20 sm:right-2 sm:bottom-4"
              rotation="rotate-[7deg] hover:rotate-[3deg]"
              category="Fashion & Lifestyle"
              categoryColor="bg-amber-400"
              creatorName="Marcus & Claire"
              creatorStats="Style & OOTD • 340k"
              performance="Top Performing"
              performanceColor="text-amber-300"
              video="/videos/creator-fashion.mp4"
              delay={0.5}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
