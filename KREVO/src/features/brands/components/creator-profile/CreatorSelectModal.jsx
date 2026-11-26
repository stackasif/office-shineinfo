
"use client";

import { X, Check } from "lucide-react";

export default function CreatorSelectModal({
  creator,
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Select Creator</h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 transition-colors hover:bg-[#DAD7CB]"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-2 text-sm text-[#77746C]">
          Are you sure you want to select this creator for your project?
        </p>

        <div className="mt-6 flex items-center gap-4 rounded-xl bg-[#E6E3D6] p-4">
          <img
            src={creator.image}
            alt={creator.name}
            className="h-16 w-16 rounded-xl object-cover"
          />

          <div>
            <h3 className="text-sm font-semibold">{creator.name}</h3>
            <p className="mt-1 text-xs text-[#77746C]">
              {creator.username}
            </p>
            <p className="mt-2 text-sm font-semibold">
              ${creator.price}
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-[#22201E]/20 px-4 py-3 text-xs font-medium transition-colors hover:bg-[#E6E3D6]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#22201E] px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-[#3A3834]"
          >
            <Check size={15} />
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}
