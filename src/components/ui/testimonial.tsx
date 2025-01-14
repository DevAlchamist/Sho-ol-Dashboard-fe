"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const testimonialData: Record<
  "data1" | "data2" | "data3",
  {
    image: string;
    name: string;
    rating: number;
    text: string;
    size: "small" | "medium" | "large";
  }[]
> = {
  data1: [
    {
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Paul Starr",
      rating: 4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
      size: "large",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Sophia Martinez",
      rating: 5,
      text: "Great experience with this team!",
      size: "small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Ethan Walker",
      rating: 5,
      text: "Amazing attention to detail!",
      size: "medium",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Isabella Taylor",
      rating: 4,
      text: "Friendly and professional service!",
      size: "small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "David Johnson",
      rating: 3,
      text: "Satisfactory overall, but some improvements needed.",
      size: "medium",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "David Johnson",
      rating: 3,
      text: "Satisfactory overall, but some improvements needed.",
      size: "medium",
    },
  ],
  data2: [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Anna Rose",
      rating: 5,
      text: "Exceptional service and quality!",
      size: "medium",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Lucas Brown",
      rating: 4,
      text: "Great experience with only minor issues.",
      size: "small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590086782794-94e5c392aee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Olivia Wilson",
      rating: 5,
      text: "Loved the attention to customer satisfaction!",
      size: "large",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590086782794-94e5c392aee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Ava Miller",
      rating: 5,
      text: "Truly a top-notch experience!",
      size: "small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603415526960-f364a08b0dbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Mason Clark",
      rating: 3,
      text: "Good, but not exceptional.",
      size: "medium",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590086782794-94e5c392aee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Ava Miller",
      rating: 5,
      text: "Truly a top-notch experience!",
      size: "small",
    },
  ],
  data3: [
    {
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "James Lee",
      rating: 4,
      text: "Highly recommended!",
      size: "small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586486655773-5d8c5c9ad6f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Harper Evans",
      rating: 5,
      text: "Wonderful experience with the team!",
      size: "large",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516728778615-2d590ea1856c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Liam Anderson",
      rating: 4,
      text: "I'm very satisfied with the results!",
      size: "medium",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Emily Davis",
      rating: 4,
      text: "Efficient and reliable!",
      size: "small",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548142543-86e7a1edb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Logan Thompson",
      rating: 3,
      text: "Good service but a bit slow.",
      size: "medium",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548142543-86e7a1edb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Logan Thompson",
      rating: 3,
      text: "Good service but a bit slow.",
      size: "medium",
    },
  ],
};

const Testimonials = () => {
  const [currentData, setCurrentData] = useState<"data1" | "data2" | "data3">(
    "data1"
  );

  useEffect(() => {
    const keys = Object.keys(testimonialData) as Array<
      keyof typeof testimonialData
    >;
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % keys.length;
      setCurrentData(keys[index]);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-fit flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentData}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
            {testimonialData[currentData].map((item, index) => (
              <motion.div
                key={index}
                className={`rounded-lg bg-white p-4 shadow-md hover:shadow-lg transition ${
                  item.size === "small"
                    ? "row-span-1"
                    : item.size === "medium"
                    ? "row-span-2"
                    : "row-span-3"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      alt={item.name}
                      src={item.image}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <div className="flex gap-0.5 text-yellow-400">
                        {Array.from({ length: item.rating }, (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 flex-grow">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
