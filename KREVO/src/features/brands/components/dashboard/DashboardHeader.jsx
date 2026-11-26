"use client";
import { Bell, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const pageTitles = {
  "/dashboard": "Home",
  "/discover-creators": "Discover Creators",
  "/my-lists": "My Lists",
  "/my-requests": "My Requests",
  "/collaborations": "Collaborations",
  "/business-profile": "Business Profile",
  "/settings": "Settings",
  "/help-and-support": "Help & Support",
};

export default function DashboardHeader({ onMenuClick }) {
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] || "Dashboard";

  return (
    <header className="fixed left-0 right-0 top-0 z-30 h-16 border-b border-[#DAD7CB] bg-[#F7F6F0]/90 backdrop-blur-xl lg:left-[238px]">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} aria-label="Open menu" className="rounded-lg p-2 text-[#77746C] hover:bg-[#ECEAE2] lg:hidden">
            <Menu size={20} />
          </button>
          <h1 className="text-sm font-semibold text-[#22201E]">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Notifications" className="rounded-lg bg-[#ECEAE2] p-2 text-[#77746C]"><Bell size={17} /></button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22201E] text-xs text-white">B</div>
            <span className="hidden text-xs font-medium text-[#22201E] sm:block">Brand Studio</span>
          </div>
        </div>
      </div>
    </header>
  );
}
