import FoodRating from "@/components/Resuable/FoodRating";
import StudentComments from "@/components/Resuable/StudentComments";
import { Bell, MoreHorizontal, Settings } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-5 p-4">
      <div className="w-full flex  items-center justify-between">
        <div className="text-3xl text-TEXT font-bold">Food Details</div>
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
            <div className="bg-GREY-2 p-5 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-full h-full p-5 flex flex-col gap-8 rounded-xl bg-white">
          <div className="flex gap-6">
            <div className="bg-GREY-2 rounded-xl min-w-[300px] h-[200px]"></div>
            <div className=" flex gap-5 text-GREY-3 flex-col">
              <div className="flex flex-col gap-3 text-2xl font-bold text-TEXT">
                Beef Steak with Fried Potato
                <div className="text-[10px] w-fit text-white font-light  px-5 rounded-full bg-PURPLE">
                  Lunch
                </div>
              </div>
              <div className="w-fit text-[12px]">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias rem dolorum porro esse quod cum aliquam nesciunt
                explicabo similique modi.
              </div>
            </div>
            <div className="px-5">
              <MoreHorizontal className="text-GREY-3" />
            </div>
          </div>
          <FoodRating />
          <div className="w-full flex items-start gap-10">
            <div className="gap-2 w-full flex flex-col">
              <div className="font-bold text-TEXT text-xl">Ingredient</div>
              <div className=" text-GREY-3">
                <ul className="list-disc pl-5">
                  {[
                    "2 tablespoons butter, softened, divided",
                    "1 cup sugar",
                    "2 eggs, beaten",
                    "1 teaspoon vanilla extract",
                    "1 3/4 cups all-purpose flour",
                    "1/2 teaspoon baking powder",
                    "1/4 teaspoon salt",
                    "1/2 cup milk",
                  ].map((item, index) => (
                    <li className="" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="gap-2 w-full flex flex-col">
              <div className="font-bold text-TEXT text-xl">Calories</div>
              <div className=" text-GREY-3">
                <ul className="list-disc pl-5">
                  {[
                    "Calories: 217.",
                    "Water: 61%",
                    "Protein: 26.1 grams.",
                    "Carbs: 0 grams.",
                    "Sugar: 0 grams.",
                    "Fiber: 0 grams.",
                    "Fat: 11.8 grams.",
                  ].map((item, index) => (
                    <li className="" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <StudentComments />
      </div>
    </div>
  );
};

export default page;
