"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreatorCard({ creator }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="creator-card group isolate relative mb-6 w-full aspect-[4/4.8] overflow-hidden rounded-[24px] bg-[#F7F6F0] transform-gpu transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none [clip-path:inset(0_round_24px)]">
      <style jsx>{`
        @keyframes creatorCardEnter {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .creator-card {
          animation: creatorCardEnter 550ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .creator-card {
            animation: none;
          }
        }
      `}</style>

      {/* Creator Image (clipped by its own wrapper so zoom never escapes the card) */}
      <div className="absolute inset-x-0 top-0 bottom-0.5 isolate overflow-hidden rounded-[24px] transform-gpu [clip-path:inset(0_round_24px)]">
        <img
          src={creator.image}
          alt={creator.name}
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.01] transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.06] [backface-visibility:hidden]"
        />
      </div>

      {/* Save / Bookmark Button */}
      <button
        type="button"
        onClick={() => setIsSaved(!isSaved)}
        aria-label={isSaved ? "Remove from saved creators" : "Save creator"}
        title={isSaved ? "Remove from saved" : "Save creator"}
        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#22201E] backdrop-blur-sm transition-colors hover:bg-white"
      >
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill={isSaved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.75L6 21V4.75Z" />
        </svg>
      </button>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#F7F6F0] via-[#F7F6F0]/95 to-transparent" />

      {/* Creator Details */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-4 pb-5">
        {/* Name and Verified Badge */}
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-base font-bold tracking-tight text-[#22201E]">
            {creator.name}
          </h3>

          <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0A8754] text-white">
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5 12 4 4L19 6"
              />
            </svg>
          </span>
        </div>

        {/* Bio */}
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-neutral-700">
          {creator.bio ||
            `${creator.category} creator creating engaging content for brands.`}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between gap-2">
          {/* Statistics */}
          <div className="flex items-center gap-3 text-xs font-semibold text-neutral-800">
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4 text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>{creator.followers}</span>
            </div>
          </div>

          {/* View Profile */}
          <span className="inline-flex shrink-0 items-center rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-neutral-900">
            View Profile
          </span>
        </div>
      </div>

      {/* Entire Card Clickable */}
      <Link
        href={creator.href}
        aria-label={`View ${creator.name}'s profile`}
        className="absolute inset-0 z-[5] rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-[#0A8754]"
      />
    </article>
  );
}