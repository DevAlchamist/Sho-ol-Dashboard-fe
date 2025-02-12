import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-PURPLE">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Join forces with me for exciting and impactful collaborative
              projects!.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-lg rounded-r-none dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto focus:outline-none bg-PURPLE rounded-lg rounded-l-none hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Finance & Insurance
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-green-200 md:my-8 dark:border-green-700 border" />

        <div className="flex items-center justify-between">
          <a className="text-white font-bold text-[24px]" href="#">
            Sho-ol
          </a>

          <div className="flex items-center justify-center gap-5 -mx-2">
            <Link
              href="https://wa.me/8287762253"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
            >
              <WhatsApp className="fill-PURPLE/90" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shubhanshu-nayak-9332562a4/"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
            >
              <LinkedIn className="fill-PURPLE/90" />
            </Link>
            <Link
              href="https://www.instagram.com/irl_introvert/"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
            >
              <Instagram className="fill-PURPLE/90" />
            </Link>
            <Link
              href="https://x.com/irl_introvert06"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
            >
              <Twitter className="fill-PURPLE/90" />
            </Link>
            <Link
              href="https://github.com/DevAlchamist/"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-green-200 p-2 shadow-md hover:shadow-xl transition hover:-translate-y-1 transform duration-300 ease-in-out "
            >
              <GitHub className="fill-PURPLE/90" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
