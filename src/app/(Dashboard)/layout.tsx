"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Resuable/NavBar";
import React from "react";

const Homelayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full">
      <NavBar />
      {children}
      <Footer />
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Homelayout;
