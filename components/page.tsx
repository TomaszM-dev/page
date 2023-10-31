"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "./navbar/navbar";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Page;
