import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../../lib/color";
import {
  BookOpen,
  Clock,
  MessageCircle,
  Phone,
} from "lucide-react";

const Options = () => {
  const supportOptions = [
    {
      icon: <MessageCircle />,
      title: "Live Chat Support",
      description:
        "Get instant help from our support team through our real-time chat system.",
      delay: 0.1,
    },
    {
      icon: <BookOpen />,
      title: "Learning Resources",
      description:
        "Access our extensive library of tutorials, guides, and educational materials.",
      delay: 0.2,
    },
    {
      icon: <Phone />,
      title: "Direct Support Line",
      description:
        "Speak directly with our support team for immediate assistance with urgent matters.",
      delay: 0.3,
    },
    {
      icon: <Clock />,
      title: "24/7 Availability",
      description:
        "Round-the-clock support for critical issues and emergency assistance.",
      delay: 0.4,
    },
  ];
  return (
    <motion.div
      className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {supportOptions.map((option, index) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{
            y: -8,
            transition: { type: "spring", stiffness: 300 },
          }}
          className="group relative overflow-hidden rounded-3xl backdrop-blur-xl h-full"
          style={{
            background: colors.background.glass,
            border: `1px solid ${colors.border.light}`,
            boxShadow: "0 8px 32px rgba(77, 68, 181, 0.1)",
          }}
        >
          <div className="p-6 relative z-10">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
              style={{
                background: colors.primary.glass,
                boxShadow: "0 8px 32px rgba(77, 68, 181, 0.1)",
              }}
            >
              {option.icon}
            </div>

            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: colors.text.primary }}
            >
              {option.title}
            </h3>

            <p className="text-base" style={{ color: colors.text.secondary }}>
              {option.description}
            </p>
          </div>

          {/* Decorative gradient circle */}
          <div
            className="absolute top-0 right-0 w-48 h-48 -mr-24 -mt-24 rounded-full opacity-10 transition-all duration-300 group-hover:scale-150"
            style={{ background: colors.primary.gradient }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Options;
