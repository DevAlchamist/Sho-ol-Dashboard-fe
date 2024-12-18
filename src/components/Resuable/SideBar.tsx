"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarMinusIcon,
  ChartBarIcon,
  ForkKnife,
  GitGraphIcon,
  Home,
  LayoutDashboard,
  PiggyBankIcon,
  Settings,
  User2,
  Users,
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Home", icon: Home, href: "/Dashboard" },
  { name: "Students", icon: Users, href: "/Dashboard/Students" },
  { name: "Teachers", icon: User2, href: "/Dashboard/Teachers" },
  { name: "Event", icon: CalendarMinusIcon, href: "/Dashboard/Event" },
  { name: "Finance", icon: PiggyBankIcon, href: "/Dashboard/Finance" },
  { name: "Food", icon: ForkKnife, href: "/Dashboard/Food" },
  { name: "Chat", icon: ChartBarIcon, href: "/Dashboard/Chat" },
  { name: "Latest Activity", icon: GitGraphIcon, href: "/Dashboard/Activity" },
  { name: "Settings", icon: Settings, href: "/Dashboard/Settings" },
];

export default function SidebarComponent() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-[300px] h-screen pl-4 py-4 bg-PURPLE text-white">
      {/* Sidebar Header */}
      <div className="flex items-center p-4 h-[64px] bg-PURPLE">
        <Image
          width={100}
          height={100}
          src="https://i.imgur.com/7wNrnSI.png"
          alt="icon"
          className="h-fit w-8"
        />
        <h2 className="ml-2 text-xl font-bold">Shool</h2>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-grow py-4 pl-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 pl-3 py-2 my-1  rounded-l-full transition-colors ${
              pathname === item.href
                ? "bg-[#f3f4ff] text-PURPLE"
                : "text-[#c1bbeb] hover:text-PURPLE hover:bg-[#f3f4ff]"
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <footer className="p-4 bg-PURPLE text-center">
        <p className="text-xs font-semibold">
          Shool - School Admission Dashboard
        </p>
        <p className="text-xs">Made with 🪄 by Dev Alchamist 🧙‍♂️</p>
      </footer>
    </div>
  );
}
