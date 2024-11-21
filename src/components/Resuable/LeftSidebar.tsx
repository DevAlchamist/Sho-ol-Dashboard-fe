"use client";
import useAppStore from "@/store/useAppStore";
import React from "react";

const LeftSidebar = ({ user }: any) => {
  return (
    <div className="bg-white w-[395px] h-screen">
      <div>User: {user?.username || "N/A"}</div>
      <div>Role: {user?.role || "N/A"}</div>
    </div>
  );
};

export default LeftSidebar;
