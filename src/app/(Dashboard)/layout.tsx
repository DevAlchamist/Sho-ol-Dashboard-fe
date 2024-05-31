"use client";
import React from "react";

const Homelayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      {children}
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Homelayout;
