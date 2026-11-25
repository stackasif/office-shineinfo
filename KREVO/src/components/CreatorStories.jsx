"use client";


import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";



import {
  Camera,
  Clapperboard,
  VolumeX,
  Heart,
  MessageCircle,
  Send,
  Pause,
  RotateCw,
  Play,
} from "lucide-react";


const creatorVideos = [
  {
    username: "@glowbyclaire",
    caption: "Obsessed with this morning routine glow ✨ #skincare",
    likes: "24.8k",
    comments: "412",
    video: "/videos/creator/1.mp4",
    accent: "text-pink-400",
    liked: true,
  },
  {
    username: "@marcus.active",
    caption: "Pre-workout setup done right 💪 #fitness",
    likes: "18.2k",
    comments: "188",
    video: "/videos/creator/2.mp4",
    accent: "text-teal-400",
    liked: false,
  },
  {
    username: "@techwithnina",
    caption: "Unboxing the new matte series! 📦 #unboxing",
    likes: "49.1k",
    comments: "920",
    video: "/videos/creator/3.mp4",
    accent: "text-amber-400",
    liked: true,
  },
  {
    username: "@sophia_style",
    caption: "3 ways to style your weekend outfit 🍂 #fashion",
    likes: "31.4k",
    comments: "623",
    video: "/videos/creator/4.mp4",
    accent: "text-purple-400",
    liked: true,
  },
  {
    username: "@leo.eats",
    caption: "Morning cold brew that changed everything ☕ #coffee",
    likes: "15.9k",
    comments: "294",
    video: "/videos/creator/5.mp4",
    accent: "text-emerald-400",
    liked: false,
  },
  {
    username: "@wandering_eva",
    caption: "Travel essentials I can't live without ✈️ #travel",
    likes: "62.8k",
    comments: "1.1k",
    video: "/videos/creator/6.mp4",
    accent: "text-sky-400",
    liked: true,
  },
  {
    username: "@chloe.beauty",
    caption: "My favourite beauty product this month 🌸",
    likes: "28.3k",
    comments: "340",
    video: "/videos/creator/7.mp4",
    accent: "text-rose-400",
    liked: false,
  },
  {
    username: "@daily_hacks",
    caption: "Why didn't I discover this sooner?! 🤯",
    likes: "45.7k",
    comments: "819",
    video: "/videos/creator/8.mp4",
    accent: "text-yellow-400",
    liked: true,
  },
  {
    username: "@the.skin.diary",
    caption: "My everyday skincare essentials ✨",
    likes: "32.5k",
    comments: "521",
    video: "/videos/creator/9.mp4",
    accent: "text-pink-400",
    liked: false,
  },
  {
    username: "@fitwithalex",
    caption: "A simple workout routine that works 💪",
    likes: "21.6k",
    comments: "305",
    video: "/videos/creator/10.mp4",
    accent: "text-teal-400",
    liked: true,
  },
  {
    username: "@nina.creates",
    caption: "Unboxing my latest favourite gadget 📦",
    likes: "51.2k",
    comments: "760",
    video: "/videos/creator/11.mp4",
    accent: "text-amber-400",
    liked: false,
  },
  {
    username: "@styledbyemma",
    caption: "Everyday outfit inspiration for you 🍂",
    likes: "29.4k",
    comments: "487",
    video: "/videos/creator/1.mp4",
    accent: "text-purple-400",
    liked: true,
  },
  {
    username: "@coffee.with.sam",
    caption: "Making the perfect iced coffee at home ☕",
    likes: "17.3k",
    comments: "251",
    video: "/videos/creator/2.mp4",
    accent: "text-emerald-400",
    liked: false,
  },
  {
    username: "@explorewithmia",
    caption: "A little adventure and a lot of memories ✈️",
    likes: "68.1k",
    comments: "1.3k",
    video: "/videos/creator/3.mp4",
    accent: "text-sky-400",
    liked: true,
  },
  {
    username: "@beautybylily",
    caption: "Testing my new beauty favourites 🌸",
    likes: "35.7k",
    comments: "440",
    video: "/videos/creator/4.mp4",
    accent: "text-rose-400",
    liked: false,
  },
  {
    username: "@smartliving",
    caption: "Little everyday hacks that save time 🤯",
    likes: "47.2k",
    comments: "905",
    video: "/videos/creator/5.mp4",
    accent: "text-yellow-400",
    liked: true,
  },
  {
    username: "@glowwithsarah",
    caption: "A fresh look for your daily routine ✨",
    likes: "26.9k",
    comments: "390",
    video: "/videos/creator/6.mp4",
    accent: "text-pink-400",
    liked: true,
  },
  {
    username: "@trainwithryan",
    caption: "Consistency is the real secret to fitness 💪",
    likes: "19.8k",
    comments: "276",
    video: "/videos/creator/7.mp4",
    accent: "text-teal-400",
    liked: false,
  },
  {
    username: "@unboxwithmaya",
    caption: "First impressions of my latest purchase 📦",
    likes: "42.6k",
    comments: "718",
    video: "/videos/creator/8.mp4",
    accent: "text-amber-400",
    liked: true,
  },
  {
    username: "@thefashionedit",
    caption: "Your next outfit inspiration starts here 🍂",
    likes: "38.2k",
    comments: "590",
    video: "/videos/creator/9.mp4",
    accent: "text-purple-400",
    liked: false,
  },
  {
    username: "@travelwitholivia",
    caption: "Collecting moments, not things ✈️",
    likes: "73.5k",
    comments: "1.5k",
    video: "/videos/creator/10.mp4",
    accent: "text-sky-400",
    liked: true,
  },
];



function CreatorCard({ creator }) {
  const videoRef = useRef(null);

  // Play only when the video is near the visible screen.
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "100px",
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <article className="group/card relative aspect-[9/16] w-[180px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#22201E]/10 bg-[#22201E] shadow-lg transition-shadow duration-300 hover:shadow-xl sm:w-[200px] md:w-[220px] lg:aspect-[9/15] lg:w-[185px] xl:w-[195px]">

      {/* Creator video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={creator.video}
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
      />

      {/* Dark gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/85" />

      {/* Top reel badge */}
      <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between">
        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
          <Clapperboard size={11} className={creator.accent} />
          Reel
        </span>

        <button
          type="button"
          aria-label="Video is muted"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-md"
        >
          <VolumeX size={12} />
        </button>
      </div>

      {/* Right side actions */}
      <div className="absolute bottom-16 right-2.5 z-10 flex flex-col items-center gap-3 text-white">
        <div className="flex flex-col items-center">
          <button
            type="button"
            aria-label="Like"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-md"
          >
            <Heart
              size={15}
              className={creator.liked ? "fill-rose-500 text-rose-500" : ""}
            />
          </button>

          <span className="mt-0.5 text-[10px] font-semibold">
            {creator.likes}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button
            type="button"
            aria-label="Comments"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-md"
          >
            <MessageCircle size={14} />
          </button>

          <span className="mt-0.5 text-[10px] font-semibold">
            {creator.comments}
          </span>
        </div>

        <button
          type="button"
          aria-label="Share"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-md"
        >
          <Send size={14} />
        </button>
      </div>

      {/* Creator details */}
      <div className="absolute bottom-3 left-3 right-10 z-10 text-left">
        <div className="mb-1.5 flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/60 bg-white/20">
            <Camera size={11} className="text-white" />
          </div>

          <span className="truncate text-[11px] font-bold tracking-wide text-white drop-shadow-md">
            {creator.username}
          </span>
        </div>

        <p className="line-clamp-2 text-[10px] font-normal leading-tight text-white/90 drop-shadow">
          {creator.caption}
        </p>
      </div>
    </article>
  );
}

function CreatorCardGroup() {
  return (
    <div className="flex w-max gap-4 pr-4">
      {creatorVideos.map((creator) => (
        <CreatorCard key={creator.username} creator={creator} />
      ))}
    </div>
  );
}

export default function CreatorStories() {
  const reduceMotion = useReducedMotion();

  const revealTransition = {
    duration: reduceMotion ? 0.2 : 0.75,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-[#E6E3D6] py-10 sm:py-14">
      {/* Section heading */}
      <motion.div
        className="mb-8 max-w-2xl px-4 text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={revealTransition}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ...revealTransition,
            delay: reduceMotion ? 0 : 0.05,
          }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#22201E]/10 bg-[#22201E]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#22201E]"
        >
          <Camera size={14} />
          <span>Creator Stories & Reviews</span>
        </motion.div>

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ...revealTransition,
            delay: reduceMotion ? 0 : 0.12,
          }}
          className="text-2xl font-bold tracking-tight text-[#22201E] sm:text-3xl lg:text-4xl"
        >
          Real People. Real Results.
        </motion.h2>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ...revealTransition,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="mt-2 text-sm text-[#22201E]/65 sm:text-base"
        >
          See how creators bring brands to life through authentic content.
        </motion.p>
      </motion.div>

      {/* Infinite sliding carousel */}
      <div className="group/slider relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-10 bg-gradient-to-r from-[#E6E3D6] to-transparent sm:w-20 md:w-32" />

        {/* Right fade */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-10 bg-gradient-to-l from-[#E6E3D6] to-transparent sm:w-20 md:w-32" />

        {/* Reveal the carousel wrapper without changing its CSS marquee transform */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            ...revealTransition,
            delay: reduceMotion ? 0 : 0.12,
          }}
        >
          <div className="creator-marquee flex w-max gap-0 px-2">
            <CreatorCardGroup />
            <CreatorCardGroup />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
