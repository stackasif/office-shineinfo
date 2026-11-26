
"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  Check,
  MapPin,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import CreatorPortfolio from "./CreatorPortfolio";
import CreatorAbout from "./CreatorAbout";
import CreatorExpertise from "./CreatorExpertise";
import CreatorInsights from "./CreatorInsights";
import CreatorCollaborations from "./CreatorCollaborations";
import CreatorFAQs from "./CreatorFAQs";
import CreatorSimilar from "./CreatorSimilar";
import CreatorSelectModal from "./CreatorSelectModal";
import CreatorToast from "./CreatorToast";


import Sidebar from "../dashboard/Sidebar";
import DashboardHeader from "../dashboard/DashboardHeader";

export default function CreatorProfile({ creator }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#E6E3D6] text-[#22201E]">

      {/* Dashboard Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Dashboard Area */}
      <div className="min-h-screen lg:pl-[238px]">

        {/* Dashboard Header */}
        <DashboardHeader onMenuClick={openSidebar} />

        <main className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">

          {/* Back Navigation */}
          <div className="mb-6">
            <Link
              href="/dashboard/discover-creators"
              className="inline-flex items-center gap-2 text-xs text-[#77746C] transition-colors hover:text-[#22201E]"
            >
              <ArrowLeft size={16} />
              Back to Discover Creators
            </Link>
          </div>

          {/* Creator Profile Card */}
          <section className="rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Creator Information */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Profile Image */}
                <img
                  src={creator.image}
                  alt={creator.alt || creator.name}
                  className="h-28 w-28 rounded-2xl object-cover"
                />

                {/* Creator Details */}
                <div>

                  <h1 className="text-2xl font-semibold tracking-tight">
                    {creator.name}
                  </h1>

                  <p className="mt-1 text-sm text-[#77746C]">
                    {creator.username}
                  </p>

                  {/* Category */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">

                    <span className="rounded-full bg-[#E6E3D6] px-3 py-1 text-xs font-medium">
                      {creator.category}
                    </span>

                    <span className="rounded-full bg-[#E6E3D6] px-3 py-1 text-xs text-[#77746C]">
                      {creator.platform}
                    </span>

                  </div>

                  {/* Location */}
                  {creator.location && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#77746C]">
                      <MapPin size={14} />
                      {creator.location}
                    </div>
                  )}

                  {/* Bio */}
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#77746C]">
                    {creator.bio || "Creator profile details coming soon."}
                  </p>

                </div>
              </div>

              {/* Profile Actions */}
              <div className="flex flex-wrap gap-3">

                <button
                    type="button"
                    onClick={() => setIsSelectModalOpen(true)}
                    className="rounded-lg bg-[#22201E] px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#3A3834]"
                  >
                    Select Creator →
                </button>

              </div>

            </div>

            {/* Creator Statistics */}
            <div className="mt-7 grid grid-cols-1 gap-3 border-t border-[#DAD7CB] pt-6 sm:grid-cols-3">

              <div className="rounded-xl bg-[#E6E3D6] p-4">
                <div className="flex items-center gap-2 text-xs text-[#77746C]">
                  <Users size={15} />
                  Audience
                </div>

                <p className="mt-2 text-xl font-semibold">
                  {creator.followersDisplay}
                </p>

                <p className="mt-1 text-[11px] text-[#77746C]">
                  {creator.platform} followers / subscribers
                </p>
              </div>

              <div className="rounded-xl bg-[#E6E3D6] p-4">
                <div className="flex items-center gap-2 text-xs text-[#77746C]">
                  <BriefcaseBusiness size={15} />
                  Completed Projects
                </div>

                <p className="mt-2 text-xl font-semibold">
                  {creator.projects}
                </p>
              </div>

              <div className="rounded-xl bg-[#E6E3D6] p-4">
                <div className="flex items-center gap-2 text-xs text-[#77746C]">
                  <Check size={15} />
                  Demo Price
                </div>

                <p className="mt-2 text-xl font-semibold">
                  ${creator.price}
                </p>
              </div>

            </div>

          </section>
          <CreatorPortfolio portfolio={creator.portfolio || []} />
          <CreatorAbout creator={creator} />
          <CreatorExpertise creator={creator} />
          <CreatorInsights creator={creator} />
          <CreatorCollaborations creator={creator} />
          <CreatorFAQs />
          <CreatorSimilar creator={creator} />

          <CreatorSelectModal
            creator={creator}
            isOpen={isSelectModalOpen}
            onClose={() => setIsSelectModalOpen(false)}
            onConfirm={() => {
  setIsSelectModalOpen(false);
  setIsToastVisible(true);
}}
          />

          <CreatorToast
  message="Creator selected successfully!"
  isVisible={isToastVisible}
  onClose={() => setIsToastVisible(false)}
/>

        </main>
      </div>
    </div>
  );
}
