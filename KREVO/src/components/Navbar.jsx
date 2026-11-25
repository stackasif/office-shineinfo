
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

// Navbar glass background
const glassNav =
  "bg-white/[0.58] backdrop-blur-[16px] border border-white/75 shadow-[0_4px_24px_-2px_rgba(34,32,30,0.04),0_2px_6px_-1px_rgba(34,32,30,0.02)]";

// Mobile menu background
const glassMenu =
  "bg-white/[0.85] backdrop-blur-[20px] border border-white/80 shadow-[0_16px_36px_-4px_rgba(34,32,30,0.08)]";

// Desktop dropdown background
const glassDropdown =
  "bg-white/[0.97] backdrop-blur-[24px] border border-white shadow-[0_20px_44px_-6px_rgba(34,32,30,0.14)]";

// Desktop navigation link styling
const desktopLink =
  "px-3.5 py-2 text-[14px] font-medium text-[#22201E]/85 hover:text-[#22201E] hover:bg-black/[0.03] rounded-full transition-all duration-200";

// Mobile navigation link styling
const mobileLink =
  "text-[15px] font-medium text-[#22201E] px-3 py-2.5 rounded-xl hover:bg-black/[0.03] transition-colors";

// Solutions dropdown items
const solutionsItems = [
  {
    title: "Find Creators",
    desc: "Discover the right faces for your brand",
    href: "#find-creators",
  },
  {
    title: "Create a Campaign",
    desc: "Share your brief, budget and requirements",
    href: "#create-campaign",
  },
  {
    title: "UGC Content Creation",
    desc: "Get authentic videos, photos and reels",
    href: "#ugc-content",
  },
  {
    title: "Store & Location Shoots",
    desc: "Find creators for your next on-site shoot",
    href: "#store-shoots",
  },
  {
    title: "For Agencies",
    desc: "Find creators for your clients",
    href: "#agencies",
  },
];

// Creators dropdown items
const creatorsItems = [
  {
    title: "Join as a Creator",
    desc: "Create your profile and get discovered",
    href: "#join-creator",
  },
  {
    title: "How It Works",
    desc: "Understand bookings, shoots and submissions",
    href: "#how-it-works",
  },
  {
    title: "Creator Requirements",
    desc: "Check what you need before applying",
    href: "#creator-requirements",
  },
  {
    title: "Creator FAQs",
    desc: "Learn about approvals, work and payments",
    href: "#creator-faqs",
  },
];

// Desktop dropdown component
function DesktopDropdown({ label, items, footer }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className={`${desktopLink} flex items-center gap-1.5 focus:outline-none`}
        aria-haspopup="true"
      >
        <span>{label}</span>

        <ChevronDown
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          strokeWidth={2}
        />
      </button>

      {/* Desktop dropdown */}
      <div
        className="absolute left-0 top-full pt-3 w-[360px] invisible opacity-0 translate-y-1 transition-all duration-200
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0"
      >
        <div className={`${glassDropdown} rounded-3xl p-2`}>
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-4 py-3 rounded-2xl hover:bg-black/[0.04] transition-colors"
            >
              <div className="text-[14px] font-semibold text-[#22201E]">
                {item.title}
              </div>

              <div className="text-[12.5px] text-[#22201E]/60 mt-0.5 leading-snug">
                {item.desc}
              </div>
            </Link>
          ))}

          {footer && (
            <>
              <div className="h-px bg-black/[0.06] mx-3 my-1.5" />

              <Link
                href={footer.href}
                className="block px-4 py-3 rounded-2xl text-[13.5px] font-semibold text-[#22201E] hover:bg-black/[0.04] transition-colors"
              >
                {footer.label}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Mobile accordion component
function MobileAccordion({
  label,
  items,
  footer,
  open,
  onToggle,
  onNavigate,
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`${mobileLink} w-full flex items-center justify-between`}
      >
        <span>{label}</span>

        <ChevronDown
          className={`w-4 h-4 text-[#22201E]/60 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-1 ml-2 pl-3 border-l border-black/[0.08] flex flex-col">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onNavigate}
              className="px-3 py-2.5 rounded-xl hover:bg-black/[0.03] transition-colors"
            >
              <div className="text-[14px] font-semibold text-[#22201E]">
                {item.title}
              </div>

              <div className="text-[12.5px] text-[#22201E]/60 mt-0.5 leading-snug">
                {item.desc}
              </div>
            </Link>
          ))}

          {footer && (
            <Link
              href={footer.href}
              onClick={onNavigate}
              className="px-3 py-2.5 rounded-xl text-[13.5px] font-semibold text-[#22201E] hover:bg-black/[0.03] transition-colors"
            >
              {footer.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

// Main Navbar component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const [openSection, setOpenSection] = useState(null);

  // Close mobile menu and reset accordion
  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  // Toggle mobile accordion
  const toggleSection = (name) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Background overlay - outside header */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="fixed inset-0 bg-[#22201E]/25 backdrop-blur-[3px] z-40 md:hidden"
        />
      )}

      {/* Navbar header */}
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.15 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full pt-6 md:pt-8 px-4 sm:px-6 lg:px-8 sticky top-0 z-50"
      >
        <div className="max-w-[1280px] mx-auto relative">
          <nav
            className={`${glassNav} rounded-full h-[66px] px-6 sm:px-8 flex items-center justify-between transition-all duration-300 relative`}
            aria-label="Main Navigation"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22201E] rounded-full"
              >
                <div className="w-8 h-8 rounded-full bg-[#22201E] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M3 12a9 9 0 0 1 15-6.7L12 12" />
                    <path d="M21 12a9 9 0 0 1-15 6.7L12 12" />
                  </svg>
                </div>

                <span className="text-[14px] font-bold tracking-tight text-[#22201E]">
                  KREVO
                </span>
              </Link>
            </div>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
              <DesktopDropdown
                label="Solutions"
                items={solutionsItems}
              />

              <Link href="#how-it-works" className={desktopLink}>
                How It Works
              </Link>

              <DesktopDropdown
                label="For Creators"
                items={creatorsItems}
                footer={{
                  label: "Already a creator? Log in →",
                  href: "#login",
                }}
              />

              <Link href="#faqs" className={desktopLink}>
                FAQs
              </Link>
            </div>

            {/* Desktop action buttons */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              <Link
                href="#login"
                className="text-[14px] font-medium text-[#22201E]/85 hover:text-[#22201E] transition-colors duration-200 px-2 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22201E] rounded-md"
              >
                Log in
              </Link>

              <Link
                href="/find-your-creator"
                className="bg-[#22201E] hover:bg-[#34312e] text-white text-[14px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#22201E]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#22201E] hover:bg-black/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-[#22201E]"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile dropdown menu */}
          <motion.div
            initial={false}
            animate={
              isOpen
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: reduceMotion ? 0 : -8, scale: reduceMotion ? 1 : 0.985 }
            }
            transition={{
              duration: reduceMotion ? 0.12 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            aria-hidden={!isOpen}
            className={`${glassMenu} absolute top-full left-0 right-0 md:hidden mt-3 rounded-3xl p-6 max-h-[75vh] overflow-y-auto origin-top z-50 ${
              isOpen ? "" : "invisible"
            }`}
          >
            <div className="flex flex-col space-y-3">
              <MobileAccordion
                label="Solutions"
                items={solutionsItems}
                open={openSection === "solutions"}
                onToggle={() => toggleSection("solutions")}
                onNavigate={closeMenu}
              />

              <Link
                href="#how-it-works"
                onClick={closeMenu}
                className={mobileLink}
              >
                How It Works
              </Link>

              <MobileAccordion
                label="For Creators"
                items={creatorsItems}
                footer={{
                  label: "Already a creator? Log in →",
                  href: "#login",
                }}
                open={openSection === "creators"}
                onToggle={() => toggleSection("creators")}
                onNavigate={closeMenu}
              />

              <Link
                href="#faqs"
                onClick={closeMenu}
                className={mobileLink}
              >
                FAQs
              </Link>

              <div className="h-px bg-black/[0.06] my-2" />

              {/* Mobile action buttons */}
              <div className="flex flex-col gap-3 pt-1">
                <Link
                  href="#login"
                  onClick={closeMenu}
                  className="w-full text-center text-[15px] font-medium text-[#22201E] py-2.5 rounded-xl hover:bg-black/[0.03] transition-colors"
                >
                  Log in
                </Link>

                <Link
                  href="#start-campaign"
                  onClick={closeMenu}
                  className="w-full text-center bg-[#22201E] hover:bg-[#34312e] text-white text-[15px] font-medium py-3 rounded-full shadow-sm transition-all duration-200"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
}

export default Navbar;
