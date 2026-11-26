"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Bookmark, Send, Handshake, Store, Settings, CircleHelp, LogOut, Plus, X } from "lucide-react";

const groups = [
  { title: "Main Navigation", links: [
    { label: "Home", href: "/dashboard", icon: Home },
    { label: "Discover Creators", href: "/dashboard/discover-creators", icon: Compass },
    { label: "My Lists", href: "/dashboard/my-lists", icon: Bookmark },
  ]},
  { title: "Workspace", links: [
    { label: "My Requests", href: "/dashboard/my-requests", icon: Send },
    { label: "Collaborations", href: "/dashboard/collaborations", icon: Handshake },
  ]},
  { title: "Account", links: [
    { label: "Business Profile", href: "/dashboard/business-profile", icon: Store },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
    { label: "Help & Support", href: "/dashboard/help-and-support", icon: CircleHelp },
  ]},
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && <button aria-label="Close menu" onClick={onClose} className="fixed inset-0 z-40 bg-black/30 lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[238px] flex-col justify-between border-r border-[#DAD7CB] bg-[#F7F6F0] px-4 py-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div>
          <div className="mb-8 flex items-center justify-between px-2">
            <Link href="/dashboard" className="text-xl font-bold tracking-tight text-[#22201E]">KREVO</Link>
            <button onClick={onClose} aria-label="Close menu" className="p-2 text-[#77746C] lg:hidden"><X size={20} /></button>
          </div>
          <Link href="/dashboard/discover-creators" onClick={onClose} className="mb-7 flex items-center justify-center gap-2 rounded-lg bg-[#22201E] px-3 py-2.5 text-xs font-medium text-white hover:bg-[#3A3834]"><Plus size={18} />Find Your Creator</Link>
          <nav className="space-y-6">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="mb-2.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-[#99958B]">{group.title}</p>
                <div className="space-y-1">
                  {group.links.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href || (item.href === "/dashboard/discover-creators" && pathname.startsWith("/dashboard/discover-creators"));
                    return <Link key={item.label} href={item.href} onClick={onClose} className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs ${active ? "bg-[#ECEAE2] font-medium text-[#22201E]" : "text-[#77746C] hover:bg-[#ECEAE2] hover:text-[#22201E]"}`}><Icon size={19} />{item.label}</Link>;
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="border-t border-[#E2DFD5] pt-5">
          <div className="mb-3 flex items-center gap-3 rounded-lg bg-[#ECEAE2] p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22201E] text-xs text-white">B</div>
            <div><p className="text-xs font-medium text-[#22201E]">Brand Studio</p><p className="text-[11px] text-[#77746C]">Workspace Admin</p></div>
          </div>
          <Link href="/login" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[11px] text-[#77746C] hover:bg-[#ECEAE2]"><LogOut size={19} />Logout</Link>
        </div>
      </aside>
    </>
  );
}
