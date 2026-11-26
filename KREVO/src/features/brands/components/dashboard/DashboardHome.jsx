"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import CreatorCard from "./CreatorCard";
import CategoryCard from "./CategoryCard";
import { creators as allCreators } from "../../data/creatorsData";
import { categories } from "../../data/dashboardData";

export default function DashboardHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function openSidebar() { setIsSidebarOpen(true); }
  function closeSidebar() { setIsSidebarOpen(false); }

  return (
    <div className="min-h-screen bg-[#E6E3D6] text-[#22201E]">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="min-h-screen lg:pl-[238px]">
        <DashboardHeader onMenuClick={openSidebar} />
        <main className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <section className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#77746C]">01 / Brand Workspace</p>
              <h1 className="text-[26px] font-semibold tracking-tight sm:text-[34px]">Welcome back, Aura Studio</h1>
              <p className="mt-2 text-xs leading-5 text-[#77746C] sm:text-sm">Discover talented creators and find the right voices to bring your brand to life.</p>
            </div>
            <Link href="/dashboard/discover-creators" className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#22201E] px-5 py-2.5 text-xs font-medium text-white hover:bg-[#3A3834]">Explore Creators <span>→</span></Link>
          </section>

          <section className="mb-12">
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#77746C]">02 / Curated Talent</p><h2 className="text-[20px] font-semibold tracking-tight">Recommended Creators</h2><p className="mt-1.5 text-xs text-[#77746C]">Creators selected based on your business category.</p></div>
              <Link href="/dashboard/discover-creators" className="w-fit text-xs font-medium hover:underline">View All →</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
             {allCreators.slice(-18).map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="mb-6"><p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#77746C]">03 / Industries</p><h2 className="text-[20px] font-semibold tracking-tight">Explore by Category</h2><p className="mt-1.5 text-xs text-[#77746C]">Find creators who match your brand&apos;s industry.</p></div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
              {categories.map((category) => <CategoryCard key={category.name} category={category} />)}
            </div>
          </section>

          <section>
            <div className="mb-4"><p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#77746C]">04 / Updates</p><h2 className="text-[20px] font-semibold tracking-tight">Recent Activity</h2></div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-[#F7F6F0] px-4 py-10 text-center">
              <h3 className="text-base font-semibold">No requests yet</h3>
              <p className="mt-1.5 text-xs text-[#77746C]">Your submitted creator requests will appear here.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
