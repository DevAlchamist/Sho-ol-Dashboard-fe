import FoodTable from "@/components/Resuable/FoodTable";
import SearchBar from "@/components/Resuable/Search";
import { Bell, Settings } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-5 p-4">
      <div className="w-full flex items-center justify-between">
        <div className="text-3xl text-PURPLE font-bold">Food</div>
        <div className="flex items-center gap-5">
          <SearchBar />
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white p-2 text-[#A098AE]">
              <Bell />
            </div>
            <div className="rounded-full bg-white p-2 text-[#A098AE]">
              <Settings />
            </div>
            <div className="flex gap-2 text-[#A098AE]">
              <div className=" text-[#A098AE] text-right">
                <div className="text-[14px]">Username</div>
                <div className="text-[10px]">Role</div>
              </div>
              <div className="bg-violet-200 p-5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <FoodTable />
    </div>
  );
};

export default page;
