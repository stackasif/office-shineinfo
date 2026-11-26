
"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

export default function CreatorProfileCard({
  creator,
  isSaved,
  onToggleSave,
  index = 0,
}) {
  const PlatformIcon =
    creator.platform === "YouTube" ? FaYoutube : FaInstagram;

  function handleBookmarkClick(event) {
    event.preventDefault();
    event.stopPropagation();

    onToggleSave(creator.username);
  }

  return (
    <article
      style={{ animationDelay: `${index * 70}ms` }}
      className="group relative aspect-[1/1.05] w-full animate-card-enter overflow-hidden rounded-xl bg-[#22201E] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
    >
      {/* Creator Image */}
      <img
        src={creator.image}
        alt={creator.alt || creator.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5" />

      {/* Platform and Followers */}
      <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 text-[11px] font-semibold text-white drop-shadow-md">
        <PlatformIcon size={15} />
        <span>{creator.followers}K</span>
      </div>

      {/* Bookmark Button */}
      <button
        type="button"
        onClick={handleBookmarkClick}
        aria-label={isSaved ? "Remove saved creator" : "Save creator"}
        aria-pressed={isSaved}
        className={`absolute right-3 top-3 z-20 rounded-full p-2 text-white opacity-0 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 focus:opacity-100 ${
          isSaved
            ? "bg-[#22201E]"
            : "bg-black/35 hover:bg-black/60"
        }`}
      >
        {isSaved ? (
          <FaBookmark size={15} />
        ) : (
          <FaRegBookmark size={15} />
        )}
      </button>

      {/* Creator Details */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-3 text-white">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold leading-tight drop-shadow-sm">
            {creator.name}
          </h2>

          <p className="mt-1 truncate text-[11px] text-white/75">
            {creator.category}
          </p>
        </div>

        {/* Demo Price */}
        <span className="shrink-0 text-sm font-bold drop-shadow-sm">
          ${creator.price || 150}
        </span>
      </div>

      {/* Entire Card Clickable */}
      <Link
        href={creator.href}
        aria-label={`View ${creator.name}'s profile`}
        className="absolute inset-0 z-[5] rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#0A8754]"
      />
    </article>
  );
}
