import { GitHub, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material'
import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a target="blank" href="mailto:devalchamist@gmail.com" className="text-[#007bff] text-sm ml-3">
                  <small className="block">Mail</small>
                  <strong>https://devalchamist@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <Box className="flex items-center justify-start gap-5 mt-3 -mx-2">
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
            </Box>
          </div>
        </div>
        <form className="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
            defaultValue={""}
          />
          <button
            type="button"
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default page