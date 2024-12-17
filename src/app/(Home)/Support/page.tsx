import React from "react";
import { colors } from "../../../lib/color";
import Header from "./Header";

const page = () => {
  return (
    <div className="min-h-screen relative">
      {/* Gradient Background */}
      <div
        className="fixed inset-0 z-0 "
        style={{ background: colors.background.gradient }}
      />
      {/* Decorative Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-20"
          style={{
            background: colors.primary.gradient,
            filter: "blur(150px)",
          }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-20"
          style={{
            background: colors.secondary.gradient,
            filter: "blur(150px)",
          }}
        />
      </div>
      {/* content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Header />
          {/* Support Options */}
        </div>
      </div>
    </div>
  );
};

export default page;
