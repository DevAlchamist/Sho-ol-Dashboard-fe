"use client ";
import Image from "next/image";
import img1 from "../../../../public/Saly-10.svg";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <div className="w-full h-full flex justify-between items-center">
        <div className=" w-full h-full w- flex items-center justify-center rounded-xl">
          <div className=" w-[505px] flex flex-col gap-10 p-10">
            <div className="text-[25px]">Welcome Back !</div>
            <div>
              <div className="text-[31px] font-medium">Sign in</div>
              <div className="text-[16px]">
                Access Your Personalized School DashBoard and Stay
                Connected
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[38px]">
                <div className="w-full ">
                  <input
                    type="email"
                    className="w-full outline-none text-[14px] pl-6 py-5 border-black border-b"
                    id="email"
                    placeholder="Enter Your E-Mail"
                  />
                </div>
                <div className="w-full ">
                  <input
                    className="w-full outline-none text-[14px] pl-6 py-5 border-black border-b"
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
              Don’t have an Account ?{" "}
              <strong className="text-black">
                <Link href="/auth/signup">
                Create One
                </Link>
                </strong>
            </div>
          </div>
        </div>
        <div className="xl:flex lg:flex hidden w-full h-screen bg-[#4D44B5] items-center justify-center">
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
