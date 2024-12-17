import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../../lib/color";
import { Headphones } from "lucide-react";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.div
        className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8"
        style={{
          background: colors.primary.gradient,
          boxShadow: "0 8px 32px rgba(77, 68, 181, 0.2)",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Headphones className="w-12 h-12 text-white" />
      </motion.div>

      <motion.h1
        className="text-6xl font-bold mb-6 bg-clip-text text-transparent"
        style={{ backgroundImage: colors.primary.gradient }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        How Can We Help?
      </motion.h1>

      <motion.p
        className="text-xl max-w-2xl mx-auto"
        style={{ color: colors.text.secondary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Get instant support for your academic journey. Our dedicated team is
        here to ensure your success every step of the way.
      </motion.p>
    </motion.div>
  );
};

export default Header;
