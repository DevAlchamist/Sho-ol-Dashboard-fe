import SearchBar from "@/components/Resuable/Search";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <div className="text-3xl text-[#4D44B5] font-bold">Dashboard</div>
        <SearchBar />
      </div>
      <div>User</div>
      <div>Role</div>
    </div>
  );
};

export default page;
