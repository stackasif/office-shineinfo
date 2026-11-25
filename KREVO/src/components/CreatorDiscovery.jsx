"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const CATEGORIES = [
      {
        id: "all",
        name: "All Creators",
        creators: [
          {
            id: "all-1",
            name: "Aarav Mehta",
            handle: "@aaravcreates",
            location: "Mumbai, India",
            verified: true,
            image: "https://images.pexels.com/photos/35489831/pexels-photo-35489831.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Food & Dining", "Latin Bistro"],
            bio: "Creating relatable food and lifestyle reels with a focus on everyday Indian brands.",
            rating: "4.9",
            jobs: 142
          },
          {
            id: "all-2",
            name: "Isha Kapoor",
            handle: "@ishakapoorlife",
            location: "Delhi, India",
            verified: true,
            image: "https://images.pexels.com/photos/7288892/pexels-photo-7288892.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Lifestyle", "Smart Home"],
            bio: "Sharing modern home, lifestyle and product stories through authentic short-form videos.",
            rating: "5.0",
            jobs: 98
          },
          {
            id: "all-3",
            name: "Ananya Sharma",
            handle: "@ananyaglows",
            location: "Bengaluru, India",
            verified: true,
            image: "https://images.pexels.com/photos/33918028/pexels-photo-33918028.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Skincare", "Clean Beauty"],
            bio: "Testing skincare favourites and creating honest beauty routines for Indian audiences.",
            rating: "4.9",
            jobs: 215
          },
          {
            id: "all-4",
            name: "Rohan Malhotra",
            handle: "@rohanunboxes",
            location: "Pune, India",
            verified: true,
            image: "https://images.pexels.com/photos/33222221/pexels-photo-33222221.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Tech & Audio", "Unboxing"],
            bio: "Making clear, engaging tech reviews, gadget demos and product-first unboxing videos.",
            rating: "4.8",
            jobs: 120
          }
        ]
      },
      {
        id: "food",
        name: "Food & Restaurants",
        creators: [
          {
            id: "food-1",
            name: "Kabir Sethi",
            handle: "@kabireats",
            location: "Delhi, India",
            verified: true,
            image: "https://images.pexels.com/photos/35565046/pexels-photo-35565046.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Artisan Pasta", "Restaurant Guide"],
            bio: "Exploring neighbourhood cafés, local restaurants and new food launches across Delhi.",
            rating: "5.0",
            jobs: 184
          },
          {
            id: "food-2",
            name: "Meera Nair",
            handle: "@meeracooks",
            location: "Kochi, India",
            verified: true,
            image: "https://images.pexels.com/photos/1563075/pexels-photo-1563075.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Boba & Desserts", "Matcha Cafes"],
            bio: "Creating easy home recipes, regional food stories and kitchen product demonstrations.",
            rating: "4.9",
            jobs: 156
          },
          {
            id: "food-3",
            name: "Arjun Rao",
            handle: "@arjunfoodtrail",
            location: "Hyderabad, India",
            verified: true,
            image: "https://images.pexels.com/photos/35489831/pexels-photo-35489831.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Smoked Meats", "Grill Master"],
            bio: "Reviewing local eateries, street food and new restaurant experiences.",
            rating: "4.9",
            jobs: 112
          },
          {
            id: "food-4",
            name: "Diya Shah",
            handle: "@diyadiningdiaries",
            location: "Ahmedabad, India",
            verified: true,
            image: "https://images.pexels.com/photos/7288892/pexels-photo-7288892.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Plant-Based", "Global Flavors"],
            bio: "Sharing vegetarian recipes, café discoveries and food brand collaborations.",
            rating: "4.8",
            jobs: 89
          }
        ]
      },
      {
        id: "lifestyle",
        name: "Lifestyle",
        creators: [
          {
            id: "life-1",
            name: "Aditi Verma",
            handle: "@aditiverma.daily",
            location: "Mumbai, India",
            verified: true,
            image: "https://images.pexels.com/photos/33918028/pexels-photo-33918028.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Home Decor", "Minimalist Living"],
            bio: "Documenting everyday routines, home finds and practical lifestyle products.",
            rating: "4.9",
            jobs: 167
          },
          {
            id: "life-2",
            name: "Reyansh Khanna",
            handle: "@reyanshliving",
            location: "Gurugram, India",
            verified: true,
            image: "https://images.pexels.com/photos/33222221/pexels-photo-33222221.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Everyday Carry", "Urban Loft"],
            bio: "Creating clean, modern lifestyle content around work, home and everyday essentials.",
            rating: "5.0",
            jobs: 104
          },
          {
            id: "life-3",
            name: "Tara Iyer",
            handle: "@taraslowdays",
            location: "Chennai, India",
            verified: true,
            image: "https://images.pexels.com/photos/35565046/pexels-photo-35565046.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Self-Care", "Studio Decor"],
            bio: "Sharing mindful routines, self-care finds and thoughtful home styling.",
            rating: "4.8",
            jobs: 135
          },
          {
            id: "life-4",
            name: "Vivaan Joshi",
            handle: "@vivaanontheroad",
            location: "Jaipur, India",
            verified: true,
            image: "https://images.pexels.com/photos/1563075/pexels-photo-1563075.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Coastal Living", "Morning Routine"],
            bio: "Showcasing everyday essentials, local experiences and city lifestyle stories.",
            rating: "4.9",
            jobs: 94
          }
        ]
      },
      {
        id: "beauty",
        name: "Beauty & Fashion",
        creators: [
          {
            id: "beauty-1",
            name: "Sana Qureshi",
            handle: "@sanabeautyedit",
            location: "Delhi, India",
            verified: true,
            image: "https://images.pexels.com/photos/35489831/pexels-photo-35489831.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Glass Skin", "Editorial Makeup"],
            bio: "Creating skincare explainers, makeup looks and honest beauty product reviews.",
            rating: "5.0",
            jobs: 278
          },
          {
            id: "beauty-2",
            name: "Kavya Menon",
            handle: "@kavyaglowup",
            location: "Bengaluru, India",
            verified: true,
            image: "https://images.pexels.com/photos/7288892/pexels-photo-7288892.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Streetwear", "Capsule Wardrobe"],
            bio: "Making approachable beauty tutorials and product-focused skincare reels.",
            rating: "4.9",
            jobs: 194
          },
          {
            id: "beauty-3",
            name: "Nisha Bansal",
            handle: "@nishastyles",
            location: "Chandigarh, India",
            verified: true,
            image: "https://images.pexels.com/photos/33918028/pexels-photo-33918028.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Clean Fragrance", "Runway Trends"],
            bio: "Styling contemporary Indian fashion, everyday outfits and beauty essentials.",
            rating: "4.9",
            jobs: 162
          },
          {
            id: "beauty-4",
            name: "Ritika Das",
            handle: "@ritikahairstudio",
            location: "Kolkata, India",
            verified: true,
            image: "https://images.pexels.com/photos/33222221/pexels-photo-33222221.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Hair Health", "Dermatology Picks"],
            bio: "Sharing haircare routines, styling tips and product demonstrations.",
            rating: "4.8",
            jobs: 140
          }
        ]
      },
      {
        id: "travel",
        name: "Travel",
        creators: [
          {
            id: "travel-1",
            name: "Ira Malhotra",
            handle: "@iragoesplaces",
            location: "Delhi, India",
            verified: true,
            image: "https://images.pexels.com/photos/35565046/pexels-photo-35565046.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Boutique Resorts", "Drone Guides"],
            bio: "Creating practical travel guides, hotel walkthroughs and destination reels.",
            rating: "5.0",
            jobs: 210
          },
          {
            id: "travel-2",
            name: "Aditya Kulkarni",
            handle: "@adityatrails",
            location: "Pune, India",
            verified: true,
            image: "https://images.pexels.com/photos/1563075/pexels-photo-1563075.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["European Escapes", "Hotel Stays"],
            bio: "Documenting road trips, weekend escapes and travel gear in real-world use.",
            rating: "4.9",
            jobs: 175
          },
          {
            id: "travel-3",
            name: "Simran Gill",
            handle: "@simranwanders",
            location: "Amritsar, India",
            verified: true,
            image: "https://images.pexels.com/photos/35489831/pexels-photo-35489831.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Outdoor Adventure", "Alpine Hikes"],
            bio: "Sharing scenic stays, local culture and travel experiences across India.",
            rating: "4.9",
            jobs: 130
          },
          {
            id: "travel-4",
            name: "Neil D'Souza",
            handle: "@neiltraveldiaries",
            location: "Goa, India",
            verified: true,
            image: "https://images.pexels.com/photos/7288892/pexels-photo-7288892.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Solo Travel", "Coastal Towns"],
            bio: "Creating beach, stay and experience-led content for travel and hospitality brands.",
            rating: "4.8",
            jobs: 98
          }
        ]
      },
      {
        id: "fitness",
        name: "Fitness & Wellness",
        creators: [
          {
            id: "fit-1",
            name: "Pranav Singh",
            handle: "@pranavtrains",
            location: "Noida, India",
            verified: true,
            image: "https://images.pexels.com/photos/33918028/pexels-photo-33918028.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Strength Training", "Macro Nutrition"],
            bio: "Sharing strength workouts, fitness routines and practical training gear reviews.",
            rating: "5.0",
            jobs: 192
          },
          {
            id: "fit-2",
            name: "Ayesha Khan",
            handle: "@ayeshafitlife",
            location: "Mumbai, India",
            verified: true,
            image: "https://images.pexels.com/photos/33222221/pexels-photo-33222221.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Vinyasa Yoga", "Mindfulness"],
            bio: "Creating approachable wellness, movement and activewear content.",
            rating: "4.9",
            jobs: 164
          },
          {
            id: "fit-3",
            name: "Kunal Desai",
            handle: "@kunal.moves",
            location: "Surat, India",
            verified: true,
            image: "https://images.pexels.com/photos/35565046/pexels-photo-35565046.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Marathon Prep", "Recovery Tech"],
            bio: "Making workout demonstrations and honest reviews of fitness essentials.",
            rating: "4.9",
            jobs: 147
          },
          {
            id: "fit-4",
            name: "Mitali Roy",
            handle: "@mitaliyoga",
            location: "Kolkata, India",
            verified: true,
            image: "https://images.pexels.com/photos/1563075/pexels-photo-1563075.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Mat Pilates", "Activewear Review"],
            bio: "Sharing yoga flows, recovery routines and mindful wellness product content.",
            rating: "4.8",
            jobs: 118
          }
        ]
      },
      {
        id: "tech",
        name: "Tech & Products",
        creators: [
          {
            id: "tech-1",
            name: "Dev Patel",
            handle: "@devtechdaily",
            location: "Ahmedabad, India",
            verified: true,
            image: "https://images.pexels.com/photos/35489831/pexels-photo-35489831.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Flagship Phones", "Audio Gear"],
            bio: "Testing everyday gadgets, smartphones and useful consumer technology.",
            rating: "5.0",
            jobs: 245
          },
          {
            id: "tech-2",
            name: "Myra Sinha",
            handle: "@myratechspace",
            location: "Bengaluru, India",
            verified: true,
            image: "https://images.pexels.com/photos/7288892/pexels-photo-7288892.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Desk Setups", "Mechanical Keyboards"],
            bio: "Creating desk setup tours, app explainers and practical tech demonstrations.",
            rating: "4.9",
            jobs: 180
          },
          {
            id: "tech-3",
            name: "Siddharth Rao",
            handle: "@sidunboxes",
            location: "Hyderabad, India",
            verified: true,
            image: "https://images.pexels.com/photos/33918028/pexels-photo-33918028.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Smart Wearables", "EDC Tech"],
            bio: "Producing detailed unboxings and real-world product comparison videos.",
            rating: "4.9",
            jobs: 155
          },
          {
            id: "tech-4",
            name: "Pooja Reddy",
            handle: "@poojadigital",
            location: "Chennai, India",
            verified: true,
            image: "https://images.pexels.com/photos/33222221/pexels-photo-33222221.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop",
            tags: ["Creator Cameras", "Lighting Kits"],
            bio: "Making easy-to-follow tech tutorials and creator-tool product demos.",
            rating: "4.8",
            jobs: 132
          }
        ]
      }
    ];

function CreatorCard({ creator, index, reduceMotion }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col overflow-hidden rounded-[22px] bg-[#eceae2]"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#d8d5ca]">
        <img
          src={creator.image}
          alt={creator.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <h3 className="truncate text-[17px] font-bold tracking-tight text-[#22201E]">
              {creator.name}
            </h3>
            {creator.verified && (
              <span className="shrink-0 text-[#4f6b62]" title="Verified creator" aria-label="Verified creator">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 2 14.8 4l3.4-.1 1.1 3.2 2.7 2-1.1 3.2 1.1 3.2-2.7 2-1.1 3.2-3.4-.1L12 22l-2.8-2-3.4.1-1.1-3.2-2.7-2 1.1-3.2L2 8.5l2.7-2 1.1-3.2 3.4.1L12 2Zm-1.1 13.8 6-6-1.4-1.4-4.6 4.6-2.2-2.2-1.4 1.4 3.6 3.6Z" />
                </svg>
              </span>
            )}
          </div>

          <p className="mb-3.5 text-[13px] text-[#77736b]">
            {creator.location} <span className="mx-1">·</span> {creator.handle}
          </p>

          <div className="mb-3.5 flex flex-wrap gap-1.5">
            {creator.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[#dedbd0] px-2.5 py-1 text-[11px] font-medium tracking-tight text-[#46433d]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-5 line-clamp-2 text-[13px] leading-relaxed text-[#625f57]">
            {creator.bio}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 text-[12px]">
          <div className="flex items-center gap-1.5 font-semibold text-[#22201E]">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
            </svg>
            {creator.rating}
          </div>
          <p className="text-right text-[#77736b]">
            <span className="font-semibold text-[#22201E]">{creator.jobs}</span> completed jobs
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function CreatorDiscovery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const handleCategoryChange = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const currentCategory = CATEGORIES[activeIndex] || CATEGORIES[0];

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-10"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#22201E] sm:text-[34px]">
            Find Top Instagram Creators
          </h2>
          <p className="text-[15px] leading-relaxed text-[#625f57] sm:text-base">
            Discover talented Instagram creators who bring your brand to life through authentic content.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 flex justify-center sm:mb-12"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="no-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-[#eceae2] p-1.5 sm:p-2">
            {CATEGORIES.map((category, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(index)}
                  aria-pressed={isActive}
                  className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors sm:px-5 sm:text-sm ${
                    isActive
                      ? "text-[#E6E3D6]"
                      : "text-[#625f57] hover:text-[#22201E]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="creator-discovery-active-tab"
                      className="absolute inset-0 rounded-full bg-[#22201E]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentCategory.id}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-live="polite"
          >
            {currentCategory.creators.map((creator, index) => (
              <CreatorCard
                key={creator.id}
                creator={creator}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="flex flex-col items-center justify-center pt-12 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-3 text-sm font-medium text-[#625f57]">
            Ready to get started?
          </p>
          <a
            href="/find-creators"
            className="inline-flex items-center justify-center rounded-full bg-[#22201E] px-7 py-3 text-sm font-semibold tracking-wide text-[#E6E3D6] transition-colors duration-200 hover:bg-[#3a3732]"
          >
            Start Hiring
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
