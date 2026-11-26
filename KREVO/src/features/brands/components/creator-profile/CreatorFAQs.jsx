
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What type of content does this creator create?",
    answer:
      "This information will be updated when the creator adds their content preferences.",
  },
  {
    question: "How long does content delivery take?",
    answer:
      "Delivery time will be shared by the creator when discussing a collaboration.",
  },
  {
    question: "Can I request custom content?",
    answer:
      "Yes, you can discuss your content requirements with the creator before confirming a collaboration.",
  },
  {
    question: "Does the creator provide revisions?",
    answer:
      "Revision terms can be discussed and confirmed before starting the project.",
  },
  {
    question: "How can I collaborate with this creator?",
    answer:
      "Click the Select Creator button to start the creator selection process.",
  },
];

export default function CreatorFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="mt-6 rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-xs text-[#77746C]">
          Common questions about working with creators.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl bg-[#E6E3D6]"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between gap-4 p-4 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="text-sm font-medium">
                {faq.question}
              </span>

              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="border-t border-[#DAD7CB] px-4 py-4">
                <p className="text-xs leading-6 text-[#77746C]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
