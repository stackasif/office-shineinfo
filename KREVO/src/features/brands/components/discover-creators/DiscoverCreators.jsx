"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Sidebar from "../dashboard/Sidebar";
import DashboardHeader from "../dashboard/DashboardHeader";
import CreatorProfileCard from "./CreatorProfileCard";
import {
  creators,
  creatorCategories,
  creatorPlatforms,
  creatorLocations,
} from "../../data/creatorsData";

function FilterSelect({ value, onChange, options, label }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
        className="appearance-none rounded-lg bg-[#ECEAE2] py-2 pl-3 pr-8 text-xs text-[#22201E] outline-none transition-colors hover:bg-[#E2DFD5] focus:ring-2 focus:ring-[#B8B3A5]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <ChevronDown size={15} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#77746C]" />
    </div>
  );
}

export default function DiscoverCreators() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [platform, setPlatform] = useState("all");
  const [location, setLocation] = useState("all");
  const [followersRange, setFollowersRange] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [savedCreators, setSavedCreators] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  function toggleSavedCreator(username) {
    setSavedCreators((current) =>
      current.includes(username)
        ? current.filter((item) => item !== username)
        : [...current, username]
    );
  }

  const filteredCreators = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    const result = creators.filter((creator) => {
      const matchesSearch =
        !search ||
        creator.name.toLowerCase().includes(search) ||
        creator.username.toLowerCase().includes(search) ||
        creator.category.toLowerCase().includes(search);

      const matchesCategory = category === "all" || creator.category === category;
      const matchesPlatform = platform === "all" || creator.platform === platform;
      const matchesLocation = location === "all" || creator.location === location;

      let matchesFollowers = true;
      if (followersRange === "under50") matchesFollowers = creator.followers < 50;
      if (followersRange === "50to100") matchesFollowers = creator.followers >= 50 && creator.followers <= 100;
      if (followersRange === "over100") matchesFollowers = creator.followers > 100;

      return matchesSearch && matchesCategory && matchesPlatform && matchesLocation && matchesFollowers;
    });

    if (sortBy === "followers") {
      result.sort((a, b) => b.followers - a.followers);
    } else if (sortBy === "recent") {
      result.reverse();
    }

    return result;
  }, [searchText, category, platform, location, followersRange, sortBy]);

  const visibleCreators = filteredCreators.slice(0, visibleCount);

  const resetFilters = () => {
    setVisibleCount(8);
    setSearchText("");
    setCategory("all");
    setPlatform("all");
    setLocation("all");
    setFollowersRange("all");
    setSortBy("recommended");
  };

  return (
    <div className="min-h-screen bg-[#E6E3D6] text-[#22201E]">
      <style jsx global>{`
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-enter {
          animation: cardEnter 450ms ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-card-enter { animation: none; }
        }
      `}</style>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="min-h-screen lg:pl-[238px]">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <section className="flex flex-col gap-4 py-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#22201E]">Discover Creators</h1>
              <p className="mt-1 text-sm text-[#77746C]">Find the right creators to bring your brand to life.</p>
            </div>

            <div className="relative w-full">
              <Search size={19} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77746C]" />
              <input
                type="search"
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                  setVisibleCount(8);
                }}
                placeholder="Search creators by name, username or category..."
                className="w-full rounded-lg bg-[#F7F6F0] py-3 pl-11 pr-4 text-sm text-[#22201E] shadow-sm outline-none placeholder:text-[#99958B] focus:ring-2 focus:ring-[#B8B3A5]"
              />
            </div>

            <div className="flex flex-col justify-between gap-3 pt-1 lg:flex-row lg:items-center">
              <div className="flex flex-wrap items-center gap-2">
                <FilterSelect label="Creator category" value={category} onChange={(value) => { setCategory(value); setVisibleCount(8); }}
                  options={[{ value: "all", label: "Creator Category" }, ...creatorCategories.map((item) => ({ value: item, label: item }))]} />
                <FilterSelect label="Platform" value={platform} onChange={(value) => { setPlatform(value); setVisibleCount(8); }}
                  options={[{ value: "all", label: "Platform" }, ...creatorPlatforms.map((item) => ({ value: item, label: item }))]} />
                <FilterSelect label="Location" value={location} onChange={(value) => { setLocation(value); setVisibleCount(8); }}
                  options={[{ value: "all", label: "Location" }, ...creatorLocations.map((item) => ({ value: item, label: item }))]} />
                <FilterSelect label="Follower range" value={followersRange} onChange={(value) => { setFollowersRange(value); setVisibleCount(8); }}
                  options={[
                    { value: "all", label: "Follower Range" },
                    { value: "under50", label: "Under 50K" },
                    { value: "50to100", label: "50K – 100K" },
                    { value: "over100", label: "100K+" },
                  ]} />
                <button type="button" onClick={resetFilters} className="px-2 py-2 text-xs text-[#77746C] hover:text-[#22201E]">
                  Clear filters
                </button>
              </div>

              <FilterSelect label="Sort creators" value={sortBy} onChange={(value) => { setSortBy(value); setVisibleCount(8); }}
                options={[
                  { value: "recommended", label: "Recommended" },
                  { value: "followers", label: "Most Followers" },
                  { value: "recent", label: "Recently Added" },
                ]} />
            </div>
          </section>

          <section className="pb-10">
            {filteredCreators.length > 0 ? (
              <>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {visibleCreators.map((creator, index) => (
                    <CreatorProfileCard
                      key={creator.username}
                      creator={creator}
                      index={index}
                      isSaved={savedCreators.includes(creator.username)}
                      onToggleSave={toggleSavedCreator}
                    />
                  ))}
                </div>

                {visibleCount < filteredCreators.length && (
                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((count) => count + 8)}
                      className="rounded-lg border border-[#22201E] px-6 py-2.5 text-xs font-semibold text-[#22201E] transition-all duration-200 hover:bg-[#22201E] hover:text-white"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-xl bg-[#F7F6F0] px-5 py-12 text-center">
                <h2 className="text-base font-semibold">No creators found</h2>
                <p className="mt-1 text-sm text-[#77746C]">Try changing your search or filters.</p>
                <button onClick={resetFilters} className="mt-4 rounded-lg bg-[#22201E] px-4 py-2 text-xs font-medium text-white">
                  Reset filters
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
