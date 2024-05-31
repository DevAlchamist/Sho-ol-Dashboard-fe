"use client ";
import Image from "next/image";
import img1 from "../../../../public/Saly-10.svg";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <div className="w-full h-screen flex justify-between items-center">
        <div className=" w-[50%] h-[701px] w- flex items-center justify-center rounded-xl">
          <div className=" w-[505px] flex flex-col gap-10 p-10">
            <div className="text-[25px]">Welcome !</div>
            <div>
              <div className="text-[31px] font-medium">Sign Up</div>
              <div className="text-[16px]">
                Join Sho-ol Today - Manage Records, Track Progress, and Connect
                with Ease!
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[38px]">
                <div className="w-full ">
                  <input
                    type="email"
                    className="w-full outline-none text-[14px]  pl-6 py-5 border-black border-b "
                    id="email"
                    placeholder="Enter Your E-Mail"
                  />
                </div>
                <div className="w-full ">
                  <input
                    className="w-full outline-none text-[14px]  pl-6 py-5 border-black border-b "
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>

              <div className="w-full text-[12px] text-[#4D4D4D] flex justify-between items-center">
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <div>Remember Me</div>
                </div>
                <div>Forgot Password?</div>
              </div>
              <div className="bg-[#4D44B5] rounded-md text-white text-center py-4 text-[16px]">
                Login
              </div>
            </div>
            <div className="text-[16px] text-center text-[#4D4D4D]">
              {" "}
              Already have an Account ?{" "}
              <strong className="text-black">
                <Link href="/auth/login">Login</Link>
              </strong>
            </div>
          </div>
        </div>
        <div className="flex w-[50%] h-screen bg-[#4D44B5] items-center justify-center">
          <Image
            alt="Login"
            className="xl:flex lg:flex hidden w-fit h-fit"
            src={img1}
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
