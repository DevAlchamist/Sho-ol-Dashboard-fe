import { Box, Button, Divider, Drawer, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/logo.svg";
import { PentagonOutlined, Menu } from "@mui/icons-material";
import Link from "next/link";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const NavData = [
    { title: "Home", Link: "/" },
    { title: "Features", Link: "/" },
    { title: "Dashboards", Link: "/" },
    { title: "Pricing", Link: "/" },
    { title: "Testimonial", Link: "/" },
    { title: "Support", Link: "/" },
    { title: "Contact", Link: "/" },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {NavData.map((item, index) => (
        <>
          <Link
            key={index}
            href={item.Link}
            className="block p-2 text-black/90 hover:text-[#4D44B5] font-semibold border-b-2 border-transparent transition transform duration-300 ease-in-out"
          >
            {item.title}
          </Link>
          <Divider />
        </>

      ))}
    </Box>
  );

  return (
    <Box className="w-full">
      <Box className="text-black/90 border bg-transparent w-full p-5 flex items-center justify-between text-center gap-5">
        <Box className="text-black/90 flex items-center justify-center w-full text-center ">
          <PentagonOutlined className="h-10 w-10 fill-black" />
          <Image className="w-fit h-[50px]" src={Logo} alt="logo" />
        </Box>

        <Box className="hidden md:flex w-full items-center justify-center text-center gap-5">
          {NavData.map((item, index) => (
            <Link
              key={index}
              href={item.Link}
              className="cursor-pointer text-black/90 hover:text-[#4D44B5] font-semibold border-b-2 border-transparent truncate transition transform duration-300 ease-in-out p-2 hover:border-[#4D44B5]"
            >
              {item.title}
            </Link>
          ))}
        </Box>

        <Box className="text-black/90 w-full flex items-center justify-end text-center gap-5">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            className="md:hidden"
          >
            <Menu />
          </IconButton>

          <button className="px-4 py-3 border border-[#4D44B5] transition transform duration-300 ease-in-out rounded-lg hover:text-white hover:bg-[#4D44B5]">
            Get Started
          </button>
        </Box>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default NavBar;
