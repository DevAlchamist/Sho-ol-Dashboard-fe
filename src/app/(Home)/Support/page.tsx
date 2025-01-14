import React from "react";
import { colors } from "../../../lib/color";
import Header from "./Header";

const page = () => {
  return (
    <div className=" ">
      {/* Gradient Background */}
      {/* content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Header />
          {/* Support Options */}
        </div>
      </div>
    </div>
  );
};

export default page;
