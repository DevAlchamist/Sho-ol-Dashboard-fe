import {
  ChartNoAxesColumnIncreasing,
  ChartPie,
  MoveUpRight,
  Star,
} from "lucide-react";
import React from "react";

const FoodRating = () => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <div className="text-GREY-3 flex flex-col gap-2 text-sm">
        Rating
        <div className="flex gap-3 text-xl">
          <Star className="text-YELLOW" />
          <span className="text-TEXT font-extrabold">4.9</span>
        </div>
      </div>
      <div className="flex gap-3">
        <ChartNoAxesColumnIncreasing className="h-14 w-14 text-TEXT" />
        <div>
          <div className="text-TEXT text-lg font-bold">1453</div>
          <div className="text-GREY-3 ">Total Order</div>
        </div>
      </div>
      <div className="flex gap-3">
        <MoveUpRight className="h-14 w-14 text-TEXT" />
        <div>
          <div className="text-TEXT text-xl font-bold">26 %</div>
          <div className="text-GREY-3 ">Interest</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ChartPie className="h-14 w-14 text-TEXT" />
        <div className="text-TEXT text-xl font-bold">50 %</div>
      </div>
    </div>
  );
};

export default FoodRating;
