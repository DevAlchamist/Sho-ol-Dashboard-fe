"use client";
import Image from "next/image";
import img1 from "../../../../public/Saly-10.svg";
import React, { useState } from "react";
import Link from "next/link";
import useAppStore from "@/store/useAppStore";
import { useRouter } from "next/navigation";

const Page = () => {
  const { register, user } = useAppStore();
  const router = useRouter();
  // Local state for email and password
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Uncomment and implement the actual signIn logic if required
    const result: any = await register(
      username,
      email, // Prevent automatic redirect
      password
    );
    if (result.error) {
      console.error("Login failed:", result.error);
    } else {
      if (user) {
        console.log(result);
        console.log("Login successful!");
        router.push("/user");
      }

      // Optionally, handle successful login (e.g., redirect to dashboard)
    }
  };

  return (
    <div className="">
      <div className="w-full h-screen flex justify-between items-center">
        <div className="w-full h-full flex items-center justify-center rounded-xl">
          <div className="w-[505px] flex flex-col gap-10 p-10">
            <div className="text-[25px]">Welcome!</div>
            <div>
              <div className="text-[31px] font-medium">Sign Up</div>
              <div className="text-[16px]">
                Join Sho-ol Today - Manage Records, Track Progress, and Connect
                with Ease!
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[38px]">
                <div className="w-full">
                  <input
                    type="name"
                    className="w-full outline-none text-[14px] pl-6 py-5 border-black border-b"
                    id="username"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    className="w-full outline-none text-[14px] pl-6 py-5 border-black border-b"
                    id="email"
                    placeholder="Enter Your E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    className="w-full outline-none text-[14px] pl-6 py-5 border-black border-b"
                    id="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full text-[12px] text-[#4D4D4D] flex justify-end items-center">
                <div>Forgot Password?</div>
              </div>
              <button
                className="bg-[#4D44B5] rounded-md text-white text-center py-4 text-[16px]"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="text-[16px] text-center text-[#4D4D4D]">
              Already have an Account?
              <strong className="text-black">
                <Link href="/auth/login">Login</Link>
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

export default Page;
