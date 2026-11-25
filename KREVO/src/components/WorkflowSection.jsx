"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const creators = [
  {
    username: "@aanya_sharma",
    niche: "Beauty",
    image:
      "https://images.pexels.com/photos/35489831/pexels-photo-35489831.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    imageAlt: "Indian fashion creator walking confidently on a Mumbai street",
  },
  {
    username: "@kabir_mehta",
    niche: "Fitness",
    image:
      "https://images.pexels.com/photos/7288892/pexels-photo-7288892.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    imageAlt: "Indian male creator posing outdoors in Mumbai",
  },
  {
    username: "@riya_verma",
    niche: "Lifestyle",
    image:
      "https://images.pexels.com/photos/33918028/pexels-photo-33918028.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    imageAlt: "Indian lifestyle creator posing against a colorful Mumbai street backdrop",
  },
  {
    username: "@advait_kapoor",
    niche: "Tech",
    image:
      "https://images.pexels.com/photos/33222221/pexels-photo-33222221.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    imageAlt: "Indian male creator leaning casually in an urban setting",
  },
  {
    username: "@tanvi_fooddiaries",
    niche: "Food",
    image:
      "https://images.pexels.com/photos/35565046/pexels-photo-35565046.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    imageAlt: "Indian creator in a contemporary Mumbai street-fashion photoshoot",
  },
  {
    username: "@ishita_style",
    niche: "Fashion",
    image:
      "https://images.pexels.com/photos/1563075/pexels-photo-1563075.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
    imageAlt: "Indian male fashion creator posing confidently on an urban street",
  },
];

const workflowSteps = [
  "Find Creators",
  "Book & Connect",
  "Plan & Pay",
  "Create Content",
  "Review & Deliver",
  "Rate & Grow",
];

export default function FindCreatorsPreviewSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  // Start the 4-second tab rotation only while this section is visible.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let intervalId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (intervalId === null) {
            intervalId = window.setInterval(() => {
              setActiveStep((currentStep) => (currentStep + 1) % workflowSteps.length);
            }, 4000);
          }
        } else if (intervalId !== null) {
          window.clearInterval(intervalId);
          intervalId = null;
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (intervalId !== null) window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E6E3D6] px-4 py-16 text-[#22201E] sm:px-6 lg:px-8 lg:py-5 xl:py-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center lg:mb-5"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8B4A9] bg-[#eceae2] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#625F57]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22201E]" />
            End-to-end architecture
            <span className="h-1.5 w-1.5 rounded-full bg-[#22201E]" />
          </span>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Everything in One Workflow
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#625F57] sm:text-base lg:mt-2 lg:text-sm">
            Streamline your end-to-end UGC creator operations from initial
            discovery to final content delivery.
          </p>
        </motion.div>

        {/* Clickable workflow navigation */}
        <div className="mb-10 overflow-x-auto pb-2 lg:mb-5 lg:pb-0">
          <div className="mx-auto flex w-max items-center gap-1 rounded-full bg-[#22201E] p-1 lg:gap-0.5">
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-pressed={isActive}
                  className={`flex shrink-0 items-center whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22201E] lg:px-3 lg:py-2 ${
                    isActive
                      ? "bg-[#eceae2] text-[#22201E]"
                      : "text-[#E6E3D6]/75 hover:text-[#E6E3D6]"
                  }`}
                >
                  {isActive && (
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#22201E]" />
                  )}
                  <span className="mr-1.5 opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[2rem] bg-[#D8D5CA] p-5 sm:p-8 lg:rounded-[1.5rem] lg:p-5 xl:p-6"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
              transition={{
                opacity: { duration: 0.65, delay: 0.04, ease: "easeInOut" },
                y: { duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] },
                filter: { duration: 0.65, delay: 0.04, ease: "easeInOut" },
              }}
              className="grid min-w-0 items-stretch gap-9 lg:grid-cols-12 lg:gap-7 xl:gap-9"
            >
            {/* Left information */}
            <div className="flex min-w-0 flex-col justify-center lg:col-span-5 lg:h-full">
              {activeStep === 2 ? (
                <>
                  <span className="mb-5 inline-flex w-fit items-center rounded-md bg-[#eceae2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    Step 03 of 06&nbsp; • &nbsp;Plan &amp; Pay
                  </span>

                  <h3 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[34px] lg:leading-[1.12] xl:text-[38px]">
                    Finalize Your Package &amp; Payment
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:mt-3 lg:text-sm lg:leading-6">
                    Review the creator&apos;s quotation, confirm your
                    deliverables and complete the payment to officially start
                    your project.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3 lg:mt-4 lg:gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">
                      <span className="text-sm">₹</span>
                      Transparent Pricing
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">
                      <span className="text-sm">✓</span>
                      Secure Payment
                    </span>
                  </div>

                  <div className="mt-8 flex max-w-md items-start gap-4 rounded-2xl bg-[#eceae2] p-5 shadow-sm lg:mt-4 lg:gap-3 lg:p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22201E] text-sm text-[#E6E3D6]">
                      🔒
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#22201E]">
                        Escrow Security Guarantee
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#625F57]">
                        Payments are safely retained until final delivery
                        approval. Funds released only upon sign-off.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeStep === 5 ? (
                <>
                  <span className="mb-5 inline-flex w-fit items-center rounded-md bg-[#eceae2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    Step 06 of 06&nbsp; • &nbsp;Rate &amp; Grow
                  </span>
                  <h3 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[34px] lg:leading-[1.12] xl:text-[38px]">
                    Every Collaboration Builds Something Better.
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:mt-3 lg:text-sm lg:leading-6">
                    Once your project is complete, share your experience and rate your creator. Build trusted partnerships and make your next UGC collaboration even better.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">Rate Your Creator</span>
                    <span className="rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">Share Project Feedback</span>
                    <span className="rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">Build Lasting Partnerships</span>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#B8B4A9] pt-5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    <span>Archive Dossier: STG-06-REL</span>
                    <span className="h-1 w-1 rounded-full bg-[#B8B4A9]" />
                    <span>Retention &amp; Partnership Value</span>
                  </div>
                </>
              ) : activeStep === 4 ? (
                <div className="grid w-full grid-cols-2 gap-3 sm:gap-4">
                  <div className="h-[400px] overflow-hidden rounded-2xl bg-[#D8D5CA] shadow-sm sm:h-[450px] lg:h-[340px] xl:h-[370px]">
                    <img
                      alt="Indian female UGC creator reviewing a skincare product video on her laptop in a modern studio"
                      className="h-full w-full object-cover pointer-events-none"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxKUG9teUbKntSiXB_d5AXYsddkA66NjJ3EP33CRs2rZ3ufvUCaCT8sGEupkxQVvwqCn_lnD3uHgN9xY6qzrRWP42ms_uKCpQZ4bu4NGFzugCw94f6AItfMjGB4jefmwOsQBnXUZ2D7gOx6R7VdWp7UAT_qj6_YaCOJk3byXWG0XdT0sDbVEztL0ALCQ8WTSRfHFGhqR1B7hP9GTgHMBja65nl1SCDv6PclF1YCr0"
                    />
                  </div>
                  <div className="h-[400px] overflow-hidden rounded-2xl bg-[#D8D5CA] shadow-sm sm:h-[450px] lg:h-[340px] xl:h-[370px]">
                    <img
                      alt="Close-up of a laptop displaying a finished UGC skincare video"
                      className="h-full w-full object-cover pointer-events-none"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkq0GJB8sw7qIPci6UJzn3plHW4-KZ9UMz6NtZwo532c-GwMcbawqVnv0hoJrMhsnFHK2SMlIt5Rh98p5gs2Y6NWcyObsyLbceCAKgP1WcODg2vvtJl-VVxg2B1tltW82P0kklsoMCK6l7BS00L2ond0qX-E0bzshuVGFTuUdKt5A_NNqWrcYs-mqI_fQtGZJlvTfbFZH6E6KjoxCWbVRuXyINgFUwk6OR028UgUg"
                    />
                  </div>
                </div>
              ) : activeStep === 3 ? (
                <>
                  <span className="mb-5 inline-flex w-fit items-center rounded-md bg-[#eceae2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    Step 04 of 06&nbsp; • &nbsp;Create Content
                  </span>

                  <h3 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[34px] lg:leading-[1.12] xl:text-[38px]">
                    From Ideas to Engaging Content
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:mt-3 lg:text-sm lg:leading-6">
                    Share your creative brief and let your selected creator bring
                    your brand&apos;s vision to life through authentic, high-quality
                    UGC videos.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">
                      <span className="text-sm">●</span>
                      Professional Video Shoots
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">
                      <span className="text-sm">✓</span>
                      Brand-Focused Content
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#B8B4A9] pt-5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    <span>Dossier ID: STG-04-PRD</span>
                    <span className="h-1 w-1 rounded-full bg-[#B8B4A9]" />
                    <span>Direct-to-Lens Execution</span>
                  </div>
                </>
              ) : activeStep === 1 ? (
                <>
                  <span className="mb-5 inline-flex w-fit items-center rounded-md bg-[#eceae2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    Step 02 of 06&nbsp; • &nbsp;Book &amp; Connect
                  </span>

                  <h3 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
                    Connect With Your Selected Creator
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:mt-3 lg:text-sm lg:leading-6">
                    Check creator availability, schedule a meeting and discuss
                    your project requirements. Connect directly with your
                    chosen creator to align on video concepts, shoot locations
                    and deliverables before moving forward.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "Flexible Scheduling",
                      "Direct Creator Connection",
                      "Project Discussion",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#C7C3B8] bg-[#eceae2] px-3.5 py-2 text-xs font-medium text-[#22201E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex max-w-md items-start gap-4 border-t border-[#B8B4A9] pt-6 lg:mt-4 lg:pt-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#22201E] text-lg font-semibold text-[#E6E3D6]">
                      ✓
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#625F57]">
                        Direct alignment guarantee
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#625F57]">
                        Verified calendar sync with automated video conference
                        provisioning and recorded audio logs.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span className="mb-5 inline-flex w-fit items-center rounded-md bg-[#eceae2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    Step 01 of 06&nbsp; • &nbsp;Find Creators
                  </span>

                  <h3 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
                    Find the Right Creator Before You Commit
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:mt-3 lg:text-sm lg:leading-6">
                    Search 1.3M+ vetted creators by platform, niche, audience,
                    and budget. See verified engagement rates and demographics
                    before you commit. Spend less time searching and more time
                    running campaigns.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "Vetted Creators",
                      "Detailed Audience Demographics",
                      "Free to Search",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#C7C3B8] bg-[#eceae2] px-3.5 py-2 text-xs font-medium text-[#22201E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex max-w-md items-start gap-4 border-t border-[#B8B4A9] pt-6 lg:mt-4 lg:pt-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#22201E] text-sm font-bold text-[#E6E3D6]">
                      1.3M
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#625F57]">
                        Database fidelity
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#625F57]">
                        Real-time profile performance verification with
                        authenticated Instagram graph insights.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right-side showcase changes with the selected workflow tab */}
            <div className="min-w-0 lg:col-span-7 lg:flex lg:h-full lg:items-center">
              {activeStep === 2 ? (
                <div className="relative mx-auto w-full max-w-[540px] py-4 lg:py-0">
                  {/* Creator quotation card */}
                  <div className="flex min-h-[230px] w-full flex-col justify-between rounded-2xl bg-[#eceae2] p-5 shadow-md sm:p-7">
                    <div className="flex items-center gap-3.5 border-b border-[#D8D5CA] pb-5">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#D8D5CA]">
                        <img
                          src={creators[0].image}
                          alt="Aanya Sharma creator profile"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-bold text-[#22201E]">
                            Aanya Sharma
                          </p>
                          <span className="text-xs text-[#22201E]">✓</span>
                        </div>
                        <p className="mt-0.5 text-xs text-[#625F57]">
                          @aanyabeauty
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 py-5">
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-[#625F57]">Deliverables</span>
                        <span className="font-semibold text-[#22201E]">
                          2 UGC Videos
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-end justify-between gap-4 border-t border-[#D8D5CA] pt-5">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                          Total Net Investment
                        </p>
                        <p className="mt-1 text-2xl font-bold tracking-tight text-[#22201E]">
                          ₹15,000
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#22201E] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#E6E3D6]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E6E3D6]" />
                        Quotation Approved
                      </span>
                    </div>
                  </div>

                  {/* Payment confirmation card */}
                  <div className="relative z-10 ml-auto -mt-5 flex min-h-[230px] w-[94%] flex-col justify-between rounded-2xl bg-white p-5 shadow-xl sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#22201E] text-lg text-[#E6E3D6]">
                          ✓
                        </div>
                        <div>
                          <p className="text-sm font-bold leading-tight text-[#22201E]">
                            Payment Successful
                          </p>
                          <p className="mt-1 text-[10px] text-[#625F57]">
                            Reference ID: #TXN-8842-KRV
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-[#22201E]">
                          ₹15,000
                        </p>
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#625F57]">
                          Paid In Full
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-[#eceae2] p-3.5">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#625F57]">
                          Payment Gateway
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#22201E]">
                          Escrow Protected ACH
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#625F57]">
                          Project Milestone
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#22201E]">
                          Pre-Production Activated
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeStep === 5 ? (
                <div className="relative mx-auto flex h-[500px] w-full max-w-[620px] items-center justify-center sm:h-[520px] lg:h-[390px] xl:h-[420px]">
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-[360px] w-[360px] rounded-full bg-[#eceae2]/70 blur-2xl" />
                  </div>
                  <div className="absolute left-2 top-5 z-10 w-[52%] rotate-[-3deg] rounded-2xl bg-[#eceae2] p-2.5 pb-6 shadow-xl sm:left-4 sm:top-4 sm:p-3 sm:pb-7">
                    <div className="h-[290px] overflow-hidden rounded-lg bg-[#D8D5CA] sm:h-[340px] lg:h-[230px] xl:h-[255px]">
                      <img alt="Indian brand owner and creative partner planning a product promotion campaign together on a laptop" className="h-full w-full object-cover" src="https://framerusercontent.com/images/e77tXCFA4shf1A7qJK5KB4X6ZI.png?height=1024&width=1536" />
                    </div>
                    <div className="flex items-center justify-between gap-2 px-1 pt-3 text-[8px] font-semibold uppercase tracking-wider text-[#625F57] sm:text-[9px]">
                      <span>Campaign Review Dossier</span><span>ID #9042-UG</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-1 z-20 w-[61%] rotate-[3deg] rounded-2xl bg-[#eceae2] p-2.5 pb-6 shadow-2xl sm:right-3 sm:p-3 sm:pb-7">
                    <div className="h-[220px] overflow-hidden rounded-lg bg-[#D8D5CA] sm:h-[260px] lg:h-[175px] xl:h-[195px]">
                      <img alt="Indian brand team celebrating and appreciating a creator after a successful brand collaboration" className="h-full w-full object-cover" src="https://www.paricosmetic.com/cdn/shop/articles/WhatsApp_Image_2025-05-07_at_1.08.40_PM_d721f452-ad2c-4c43-a2a2-e63dd20e8885.jpg?v=1748333842&width=3840" />
                    </div>
                    <div className="flex items-center justify-between gap-2 px-1 pt-3 text-[8px] font-semibold uppercase tracking-wider text-[#22201E] sm:text-[9px]">
                      <span>Production Debrief • Mumbai</span><span className="text-[#625F57]">Verified Relationship</span>
                    </div>
                  </div>
                  <div className="absolute right-1 top-5 z-30 flex flex-col items-end gap-2 sm:right-2 sm:top-8">
                    <span className="rounded-full bg-[#22201E] px-3 py-2 text-[8px] font-semibold tracking-wider text-[#E6E3D6] shadow-lg sm:text-[9px]">PARTNERSHIP RATING • 5.0 ★</span>
                    <span className="rounded-full bg-[#eceae2] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-wider text-[#22201E] shadow-md sm:text-[9px]">Verified Collaboration</span>
                  </div>
                </div>
              ) : activeStep === 4 ? (
                <div className="flex h-full flex-col justify-center lg:pl-4">
                  <span className="mb-4 inline-flex w-fit items-center rounded-md bg-[#eceae2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625F57]">
                    Step 05 of 06&nbsp; • &nbsp;Review &amp; Deliver
                  </span>

                  <h3 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#22201E] sm:text-4xl lg:text-[40px] lg:leading-[1.2]">
                    Review. Approve. Download.
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#625F57] sm:text-base lg:mt-3 lg:text-sm lg:leading-6">
                    Preview your videos, request revisions and download your
                    approved content. Your final UGC is ready to go.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">
                      Video Preview
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">
                      Easy Revisions
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eceae2] px-4 py-2.5 text-xs font-semibold text-[#22201E] shadow-sm">
                      Final Delivery
                    </span>
                  </div>
                </div>
              ) : activeStep === 3 ? (
                <div className="relative mx-auto w-full max-w-[620px] py-3 sm:py-4 lg:py-0">
                  {/* Main behind-the-scenes production image */}
                  <div className="relative aspect-[4/3] max-h-[500px] w-full overflow-hidden rounded-2xl bg-[#D8D5CA] shadow-md lg:max-h-[340px] xl:max-h-[380px]">
                    <img
                      alt="Creator filming a UGC product video in a studio with ring light and botanical serum"
                      className="h-full w-full object-cover"
                      src="/images/Vertical-ugc.png"
                    />

                    <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md bg-[#22201E]/90 px-3 py-2 text-[#E6E3D6] shadow-sm backdrop-blur-sm sm:left-4 sm:top-4">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                      <span className="text-[8px] font-semibold uppercase tracking-wider sm:text-[9px]">
                        Shoot in Progress • 4K UGC Capture
                      </span>
                    </div>

                    <span className="absolute right-3 top-3 rounded bg-[#eceae2]/90 px-2.5 py-1.5 text-[8px] font-semibold tracking-wider text-[#22201E] backdrop-blur-sm sm:right-4 sm:top-4 sm:text-[9px]">
                      Natural Diffused • 5600K
                    </span>
                  </div>

                  {/* Vertical 9:16 recording preview */}
                  <div className="absolute -bottom-3 right-2 z-10 aspect-[9/16] w-32 overflow-hidden rounded-xl bg-[#22201E] shadow-2xl sm:-bottom-5 sm:right-5 sm:w-44">
                    <img
                      alt="Vertical UGC video preview of a creator presenting botanical skincare"
                      className="h-full w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNOMsbF43JfdXHUPRzrUKQ-NFq8_QhcgdjIYv_7d7IAzo1EHcRXui3p4nxqt8nKSShBYaGcic2BxLrxaErXMZOG6VdHbmlA0E46OV6SRJ8S8LhF-CsSYwjIedhs04zkTfFcY2ohA67E5XUenv9J9utqjM76KoGbiqo7QJLrQwasTbasX9rkv2kL55En63B3qPqM1hJ9DEPlD3CzecGy7GA5cmcfuZ_Tc9rLAjmZc"
                    />

                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-2.5">
                      <div className="flex items-center justify-between text-[8px] font-semibold tracking-wide text-white drop-shadow-md">
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          REC
                        </span>
                        <span>4K / 60 FPS</span>
                      </div>
                      <div className="flex items-center justify-between text-[7px] tracking-widest text-white drop-shadow-md">
                        <span>KREVO FRAME</span>
                        <span>9:16 RAW</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeStep === 1 ? (
                <div className="rounded-2xl bg-[#eceae2] p-4 shadow-sm sm:p-6 lg:p-4">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#D5D1C6] pb-4 lg:mb-3 lg:pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#22201E]" />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#625F57] sm:text-[10px]">
                        Krevo discovery &amp; calendar engine
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 rounded bg-[#E6E3D6] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#625F57]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#22201E]" />
                      Live sync
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-12">
                    {/* Creator profile preview */}
                    <div className="flex flex-col gap-3 rounded-xl bg-[#E6E3D6] p-3 sm:col-span-7 sm:p-4">
                      <div className="relative aspect-[4/4] overflow-hidden rounded-lg bg-[#D8D5CA] lg:aspect-[5/4]">
                        <img
                          src={creators[0].image}
                          alt="Aanya Sharma, beauty and lifestyle creator"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute right-3 top-3 rounded-full bg-[#22201E] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#E6E3D6]">
                          Open for bookings
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-[#22201E]">
                              Aanya Sharma
                            </span>
                            <span className="text-xs text-[#625F57]">✓</span>
                          </div>
                          <span className="text-[10px] text-[#625F57]">
                            @aanyabeauty
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#625F57]">
                          <span>Beauty &amp; Lifestyle</span>
                          <span>Mumbai, India</span>
                        </div>
                      </div>
                    </div>

                    {/* Availability and meeting confirmation */}
                    <div className="flex flex-col gap-4 sm:col-span-5">
                      <div className="rounded-xl bg-[#E6E3D6] p-3 sm:p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-[#22201E]">
                              Available Schedule
                            </p>
                            <p className="mt-1 text-[10px] text-[#625F57]">
                              Nov 23 – Nov 29
                            </p>
                          </div>
                          <span className="text-lg text-[#625F57]">▦</span>
                        </div>

                        <div className="space-y-1.5">
                          {[
                            ["Mon 23", "10:00 AM", false],
                            ["Tue 24", "02:00 PM", false],
                            ["Wed 25", "11:30 AM (IST)", true],
                            ["Thu 26", "04:30 PM", false],
                            ["Fri 27", "Booked", false],
                          ].map(([day, time, selected]) => (
                            <div
                              key={day}
                              className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-[10px] ${
                                selected
                                  ? "bg-[#22201E] font-semibold text-[#E6E3D6]"
                                  : day === "Fri 27"
                                    ? "bg-[#D8D5CA] text-[#8A867D]"
                                    : "bg-[#eceae2] text-[#625F57]"
                              }`}
                            >
                              <span>{day}</span>
                              <span>{time}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl bg-[#E6E3D6] p-3 sm:p-4">
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <p className="text-xs font-semibold text-[#22201E]">
                            Meeting Confirmed
                          </p>
                          <span className="rounded-full bg-[#D8D5CA] px-2 py-1 text-[9px] font-medium text-[#625F57]">
                            Ready
                          </span>
                        </div>

                        <div className="space-y-2 rounded-lg bg-[#eceae2] p-3 text-[10px]">
                          <div className="flex items-center justify-between gap-2 font-semibold text-[#22201E]">
                            <span>Aanya Sharma</span>
                            <span className="font-normal text-[#625F57]">
                              45 min
                            </span>
                          </div>
                          <p className="text-[#22201E]">
                            Wed, 25 Nov • 11:30 AM IST
                          </p>
                          <p className="leading-4 text-[#625F57]">
                            Topic: UGC Concept &amp; Deliverables Sync
                          </p>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#D5D1C6] pt-4 text-[9px] font-medium uppercase tracking-wider text-[#625F57]">
                    <span>Direct creator availability</span>
                    <span>Automated briefing rooms</span>
                    <span>Spec v4.28</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-[#eceae2] p-4 shadow-sm sm:p-6 lg:p-4">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#D5D1C6] pb-4 lg:mb-3 lg:pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#22201E]" />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#625F57] sm:text-[10px]">
                        Curated creator directory • 1.3M+ profiles
                      </span>
                    </div>
                    <span className="rounded bg-[#E6E3D6] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#625F57]">
                      Indexed roster
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5">
                    {creators.map((creator) => (
                      <div
                        key={creator.username}
                        className="relative aspect-square overflow-hidden rounded-xl bg-[#D8D5CA]"
                      >
                        <img
                          src={creator.image}
                          alt={creator.imageAlt}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#22201E]/85 to-transparent px-2 pb-2 pt-6 text-[#E6E3D6]">
                          <p className="truncate text-[10px] font-semibold sm:text-xs">
                            {creator.username}
                          </p>
                          <p className="mt-0.5 text-[9px] text-[#E6E3D6]/80 sm:text-[10px]">
                            {creator.niche}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#D5D1C6] pt-4 text-[9px] font-medium uppercase tracking-wider text-[#625F57]">
                    <span>Instagram UGC roster • All niches represented</span>
                    <span className="hidden sm:inline">Metric spec: v4.28</span>
                  </div>
                </div>
              )}
            </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
