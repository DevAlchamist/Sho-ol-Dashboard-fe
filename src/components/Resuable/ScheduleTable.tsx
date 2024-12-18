import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const ScheduleTable = () => {
  return (
    <div className="w-[430px] flex flex-col gap-5">
      <div className="p-4 bg-white rounded-xl">
        <div className="font-bold">Schedule Details</div>
        <div className="text-[10px] text-[#A098AE]">
          Thursday, 10th April , 2021
        </div>
      </div>
      <div className="flex bg-white overflow-hidden rounded-r-xl">
        <div className="w-4 rounded-l-xl bg-PURPLE"></div>
        <div className="p-4 gap-3 w-full flex flex-col bg-white">
          <div className="flex flex-col gap-1">
            <div className="">Basic Algorithm</div>
            <div className="text-[10px]">Algorithm</div>
          </div>
          <div className="flex text-[10px] w-full justify-between gap-5 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <Calendar className="h-4 w-4" />
                March 20, 2024
              </div>
              <div className="flex gap-2">
                <Clock className="h-4 w-4" />
                March 20, 2024
              </div>
            </div>
            <div className="">
              <Image
                height={100}
                width={100}
                src="https://via.placeholder.com/150"
                alt="img"
                className="rounded-full h-14 w-14"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white overflow-hidden rounded-r-xl">
        <div className="w-4 rounded-l-xl bg-[#FB7D5B]"></div>
        <div className="p-4 gap-3 w-full flex flex-col bg-white">
          <div className="flex flex-col gap-1">
            <div className="">Basic Art</div>
            <div className="text-[10px]">Art</div>
          </div>
          <div className="flex text-[10px] w-full justify-between gap-5 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <Calendar className="h-4 w-4" />
                March 20, 2024
              </div>
              <div className="flex gap-2">
                <Clock className="h-4 w-4" />
                March 20, 2024
              </div>
            </div>
            <div className="">
              <Image
                height={100}
                width={100}
                src="https://via.placeholder.com/150"
                alt="img"
                className="rounded-full h-14 w-14"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white overflow-hidden rounded-r-xl">
        <div className="w-4 rounded-l-xl bg-[#FCC43E]"></div>
        <div className="p-4 gap-3 w-full flex flex-col bg-white">
          <div className="flex flex-col gap-1">
            <div className="">HTML & CSS Class</div>
            <div className="text-[10px]">Programming</div>
          </div>
          <div className="flex text-[10px] w-full justify-between gap-5 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <Calendar className="h-4 w-4" />
                March 20, 2024
              </div>
              <div className="flex gap-2">
                <Clock className="h-4 w-4" />
                March 20, 2024
              </div>
            </div>
            <div className="">
              <Image
                height={100}
                width={100}
                src="https://via.placeholder.com/150"
                alt="img"
                className="rounded-full h-14 w-14"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white overflow-hidden rounded-r-xl">
        <div className="w-4 rounded-l-xl bg-[#303972]"></div>
        <div className="p-4 gap-3 w-full flex flex-col bg-white">
          <div className="flex flex-col gap-1">
            <div className="">Simple Past Tense</div>
            <div className="text-[10px]">English</div>
          </div>
          <div className="flex text-[10px] w-full justify-between gap-5 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <Calendar className="h-4 w-4" />
                March 20, 2024
              </div>
              <div className="flex gap-2">
                <Clock className="h-4 w-4" />
                March 20, 2024
              </div>
            </div>
            <div className="">
              <Image
                height={100}
                width={100}
                src="https://via.placeholder.com/150"
                alt="img"
                className="rounded-full h-14 w-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTable;
