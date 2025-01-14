import Testimonials from "@/components/ui/testimonial";
import React from "react";

const page = () => {
  return (
    <div className=" py-10 flex flex-col gap-5 items-center justify-center ">
      <div className="text-3xl py-5 text-TEXT text-center font-semibold">
        "Share your experience – your{" "}
        <span className="italic capitalize">Testimonial</span> will appear here
        soon!"
      </div>
      <Testimonials />
      <button className="bg-PURPLE shadow-md hover:shadow-lg transition ease-linear transform duration-100 text-white px-4 py-2 rounded-lg">Put Your Review</button>
    </div>
  );
};

export default page;
