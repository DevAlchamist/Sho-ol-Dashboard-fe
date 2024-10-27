import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img from "../../../../public/Dashboard.png";
import Image from "next/image";

const majorFeatures = [
  {
    title: "Student Records Management",
    description:
      "Maintain comprehensive and organized records for all students, including personal details, academic history, attendance, and behavioral records.",
  },
  {
    title: "Class Scheduling",
    description:
      "Organize and manage class schedules effortlessly, allowing administrators to plan and coordinate ongoing, upcoming, and past classes.",
  },
  {
    title: "Event Management",
    description:
      "Plan, schedule, and track school events and activities with ease. Users can RSVP, receive updates, and stay engaged with school events.",
  },
  {
    title: "Attendance Tracking",
    description:
      "Sho-ol provides a seamless way for teachers to track attendance and monitor student participation.",
  },
  {
    title: "Fee Management",
    description:
      "Simplify the fee collection process with Sho-ol’s fee management module. Parents can view fee structures and pay fees online.",
  },
];

const Page = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col items-start">
      {/* Left side: Features Grid */}
      <div>
        <span className="text-gray-600 text-lg font-semibold">
          Main features
        </span>
        <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
          A technology-first approach to payments <br className="lg:block" />{" "}
          and finance
        </h2>
      </div>
      <div className=" overflow-hidden w-full flex items-center justify-between">
        <div className="  p-4">
          <div className=" grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-1 lg:divide-y-0 lg:grid-cols-2 xl:grid-cols-2">
            {majorFeatures.map((features,index) => (
              <div key={index} className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#4d44b5]">
                      {features.title}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {features.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex justify-between items-center group-hover:text-[#4d44b5]"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
              <div className="relative p-6 space-y-6 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    More features
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full relative items-center  p-4 flex justify-center">
          <Image
            width={2400}
            height={2400}
            src={img} // Replace with the actual image path
            alt="School Management Dashboard"
            className="w-full absolute   rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
