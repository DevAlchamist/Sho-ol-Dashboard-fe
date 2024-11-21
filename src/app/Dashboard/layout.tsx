"use client";
import SidebarComponent from "@/components/Resuable/SideBar";
import React from "react";

const Dashboardlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <div className="flex h-screen overflow-hidden">
        <SidebarComponent />
      </div>
      <main className="flex-1 bg-[#f3f4ff] h-screen overflow-y-auto ">
        {children}
      </main>
      <div></div>
    </div>
  );
};

export default Dashboardlayout;
