import { Person, PersonOutline } from "@mui/icons-material";
import { Mail, MapPin, MoreHorizontal, Phone } from "lucide-react";
import React from "react";

const InfoCard = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-white w-full h-full">
      <div className="h-[140px] bg-PURPLE w-full"></div>
      <div className="w-full h-full px-5">
        <div className="flex relative  w-full items-end justify-between ">
          <div className="rounded-full absolute -top-24 w-[200px] h-[200px] bg-[#C1BBEB] border-white border-x-8 border-y-8"></div>
        </div>
        <div className="items-end justify-end flex w-full ">
          <MoreHorizontal className="text-gray-400" />
        </div>
        <div className="pt-20 flex flex-col gap-2">
          <div className="text-3xl text-[#303972] font-bold">Karen Hope</div>
          <div className=" text-sm text-[#A098AE] font-bold">Student</div>
          <div className="text-sm text-[#A098AE] py-5 gap-4 flex items-center text-start">
            <div className="flex flex-col gap-2">
              <div>Parents:</div>
              <div className="flex gap-2 items-center">
                <PersonOutline className="bg-[#FB7D5B] text-white p-[6px] h-9 rounded-full w-9" />
                <span className="text-[#303972] font-semibold truncate">
                  Justine Hope
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Address:</div>
              <div className="flex gap-2 items-center">
                <MapPin className="bg-[#FB7D5B] text-white p-[6px] h-9 rounded-full w-9" />
                <span className="text-[#303972] font-semibold truncate">
                  Jakarta, Indonesia{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Phone:</div>
              <div className="flex gap-2 items-center">
                <Phone className="bg-[#FB7D5B] text-white p-[6px] h-9 rounded-full w-9" />
                <span className="text-[#303972] font-semibold truncate">
                  +91 82877 62253{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>EMail:</div>
              <div className="flex gap-2 items-center">
                <Mail className="bg-[#FB7D5B] text-white p-[6px] h-9 rounded-full w-9" />
                <span className="text-[#303972] font-semibold truncate">
                  nayakshubhanshu060705@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
