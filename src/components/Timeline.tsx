import { Box } from "@mui/material";
import Image from "next/image";
import img1 from "../../public/11121444_4676207.svg";
import img2 from "../../public/11785876_4815540.svg";
import img3 from "../../public/4443347_2359860.svg";
import img4 from "../../public/5538724_2827335.svg";
import React from "react";

const timelineData = [
  {
    title: "Getting Started",
    description:
      "Begin your journey with Sho-ol by signing up and setting up your account. Our user-friendly interface will guide you through the initial setup process, including adding your school's basic information. You'll be ready to explore Sho-ol's features in no time!",
    image: img3,
  },
  {
    title: "Customizing Your Dashboard",
    description:
      "Personalize your Sho-ol dashboard to meet your specific needs. Use widgets, shortcuts, and layout options to create a dashboard that works best for you. Tailor the view to track key metrics, manage tasks, and access important information quickly and efficiently.",
    image: img1,
  },
  {
    title: "Invite People and Assign Roles",
    description:
      "Bring your team on board by inviting teachers, students, and administrators to Sho-ol. Assign roles and permissions to control access levels, ensuring everyone has the tools they need to succeed. Collaborate and communicate effortlessly within your school community.",
    image: img4,
  },
  {
    title: "Sit Back, Relax, and Monitor Your School/Organization Analytics",
    description:
      "Once everything is set up, enjoy the ease of monitoring your school's performance through Sho-ol's comprehensive analytics. Track student progress, attendance, and payments in a user-friendly manner. Focus on what matters most while Sho-ol handles the details.",
    image: img2,
  },
];

const TimelineComp = () => {
  return (
    <Box className="text-center w-full h-full flex-col flex items-center justify-center p-20">
      <Box className="font-bold text-[28px] border-b-2 border-[#4D44B5] mb-10">
        How Do We Work?
      </Box>
      <Box className="w-[90%] flex flex-col">
        {timelineData.map((item, index) => (
          <Box
            className={`justify-between w-full flex items-center ${
              index % 2 === 0 ? " text-start" : "flex-row-reverse text-end"
            }`}
            key={index}
          >
            <Box className={`w-[600px] p-5  mb-10 text-start`}>
              <Box className="font-semibold text-xl mb-2">{item.title}</Box>
              <Box className="text-lg">{item.description}</Box>
            </Box>
            <Box>
              <Image className="h-[400px] w-[400px]" src={item.image} alt="img1" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TimelineComp;