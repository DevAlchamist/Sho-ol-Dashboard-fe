import { Calendar, Clock, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const StudentComments = () => {
  return (
    <div className="w-[430px] flex flex-col gap-5">
      <div className="font-bold py-4 text-2xl text-TEXT">Student Comments</div>
      <div className="flex flex-col gap-5 bg-white overflow-hidden rounded-xl p-6">
        <Quote className="text-YELLOW" />
        <div className="text-[12px] text-TEXT">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          exercitationem ab et neque iusto.
        </div>
        <div className="flex gap-2 text-[#A098AE]">
          <div className="bg-GREY-2 p-5 rounded-full"></div>
          <div className=" text-[#A098AE] text-left">
            <div className="text-[14px] text-TEXT font-semibold">Username</div>
            <div className="text-[10px]">5 Days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComments;
