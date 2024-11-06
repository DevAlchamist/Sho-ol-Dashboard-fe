import Services from "@/components/Services";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import Timeline from "../Timeline";
import Pricing from "../Pricing";
import Features from "../Resuable/Features";

const HomePage = () => {
  return (
    <>
      {/* Broacher */}
      <div className="w-full h-full flex flex-col gap-10 p-28 items-center justify-center">
        <div className="text-center">
          <div className="font-bold text-[30px]">
            Join The <span className="text-[#4D44B5]"> SHO-OL </span> Symphony!
          </div>
          <div className="font-bold text-[30px]">
            Where Education Finds Its Rhythm
          </div>
          <div className="font-bold text-[30px]">
            Harmonize
            <span className="text-[#4D44B5]"> Management, Communication</span>
          </div>
          <div className="font-bold text-[30px]">
            and
            <span className="text-[#4D44B5]"> Achievement </span>
            Effortlessly
          </div>
        </div>
        <a className="fancy" href="/auth/login">
          <span className="top-key"></span>
          <span className="text">Create Your First Dashboard</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
        <div className="flex items-center justify-center gap-5 -mx-2">
          <Link
            href="https://wa.me/8287762253"
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <WhatsApp className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shubhanshu-nayak-9332562a4/"
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <LinkedIn className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href="https://www.instagram.com/irl_introvert/"
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <Instagram className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href="https://x.com/irl_introvert06"
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <Twitter className="fill-[#4D44B5]/90" />
          </Link>
          <Link
            href="https://github.com/DevAlchamist/"
            target="_blank"
            className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
          >
            <GitHub className="fill-[#4D44B5]/90" />
          </Link>
        </div>
        <div>TimeLine</div>
      </div>
      <Services />
      <Timeline />
      <Features />
      <Pricing />
    </>
  );
};

export default HomePage;
