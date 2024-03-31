"use client";
import BlurryCursor from "@/app/_common/Cursor/Cursor";
import { useState } from "react";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className=" w-full h-full flex items-center justify-center p-0">
      <h1
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className=" text-[10vw] font-black"
      >
        make it creativity
      </h1>
      <BlurryCursor isActive={isActive} />
    </section>
  );
};

export default Hero;
