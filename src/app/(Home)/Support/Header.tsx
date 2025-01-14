import React from "react";
import { colors } from "../../../lib/color";
import { Headphones } from "lucide-react";

const Header = () => {
  return (
    <div className="text-center">
      <div
        className="inline-flex items-center justify-center w-24 h-fit rounded-3xl mb-8 transform transition-transform duration-300 hover:scale-105"
        style={{
          background: colors.primary.gradient,
          boxShadow: "0 8px 32px rgba(77, 68, 181, 0.2)",
        }}
      >
        <Headphones className="w-12 h-12 text-white" />
      </div>

      <h1
        className="text-6xl font-bold mb-6 bg-clip-text text-transparent transform transition-opacity duration-500"
        style={{ backgroundImage: colors.primary.gradient }}
      >
        How Can We Help?
      </h1>

      <p
        className="text-xl max-w-2xl mx-auto opacity-100 transition-opacity duration-500"
        style={{ color: colors.text.secondary }}
      >
        Get instant support for your academic journey. Our dedicated team is
        here to ensure your success every step of the way.
      </p>
    </div>
  );
};

export default Header;
