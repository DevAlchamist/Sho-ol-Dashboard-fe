import NavBar from "@/components/Resuable/NavBar";
import Services from "@/components/Services";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import Timeline from "../Timeline";

const HomePage = () => {
  return (
    <Box className="w-full ">
      <NavBar />
      {/* Broacher */}
      <Box className="w-full h-full flex flex-col gap-10 p-28 items-center justify-center">
        <Box className="text-center">
          <Box className="font-bold text-[30px]">
            Join The <span className="text-[#4D44B5]"> SHO-OL </span> Symphony!
          </Box>
          <Box className="font-bold text-[30px]">
            Where Education Finds Its Rhythm
          </Box>
          <Box className="font-bold text-[30px]">
            Harmonize
            <span className="text-[#4D44B5]"> Management, Communication</span>
          </Box>
          <Box className="font-bold text-[30px]">
            and
            <span className="text-[#4D44B5]"> Achievement </span>
            Effortlessly
          </Box>
        </Box>
        <a className="fancy" href="">
          <span className="top-key"></span>
          <span className="text">Create Your First Dashboard</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
        <Box className="flex items-center justify-center gap-5">
          <Link
            href=""
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <WhatsApp className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href=""
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <LinkedIn className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href=""
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <Instagram className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href=""
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <Twitter className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href=""
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <GitHub className="fill-[#4D44B5]/90" />
          </Link>
        </Box>
        <Box>TimeLine</Box>
      </Box>
      <Services />
      <Timeline />
    </Box>
  );
};

export default HomePage;
