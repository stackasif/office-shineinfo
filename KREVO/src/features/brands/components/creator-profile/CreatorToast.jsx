
"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";

export default function CreatorToast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  return (
    <div
      className={`fixed right-5 top-20 z-[60] flex items-center gap-3 rounded-xl border border-[#DAD7CB] bg-[#ECEAE2] px-5 py-4 shadow-lg transition-all duration-300 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-5 opacity-0"
      }`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DAD7CB]">
        <Check size={16} className="text-[#22201E]" />
      </div>

      <p className="text-sm font-medium text-[#22201E]">
        {message}
      </p>
    </div>
  );
}
