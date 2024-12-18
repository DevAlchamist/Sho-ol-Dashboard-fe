import InfoCard from "@/components/Resuable/InfoCard";
import PaymentHistory from "@/components/Resuable/PaymentHistory";
import ScheduleTable from "@/components/Resuable/ScheduleTable";
import SearchBar from "@/components/Resuable/Search";
import StudentTable from "@/components/Resuable/StudentList";
import { Button } from "@/components/ui/button";
import { ArrowDown, Bell, Plus, Settings } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-5 p-4">
      <div className="w-full flex items-center justify-between">
        <div className="text-3xl text-PURPLE font-bold">Students</div>
        <div className="flex items-center gap-3">
          <SearchBar />
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
      {/* Student Info */}
      <div className="flex gap-5">
        <div className="flex h-full w-full flex-col gap-5">
          <InfoCard />
          <PaymentHistory />
        </div>
        <ScheduleTable />
      </div>
    </div>
  );
};

export default page;
