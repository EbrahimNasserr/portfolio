"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Character from "./_components/Character";
import Image from "next/image";
import { services } from "../_Data/data";

const AboutPage = () => {
  const myTextRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const myText = new SplitType(myTextRef.current);
    gsap.to(myText.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <main>
      <section className=" relative flex justify-center flex-col items-center w-full h-screen">
        <div className="  w-full flex justify-center">
          <h1
            id="my-text"
            ref={myTextRef}
            className="clip-path chars uppercase text-[7rem] maxmd:text-[15vw] font-black leading-[5.9rem]"
          >
            about me
          </h1>
        </div>
        <div className=" absolute bottom-[20%] h-[1px] opacity-25 w-2/3 bg-slate-100"></div>
      </section>
      <section className="p-0">
        <div className=" w-full h-full flex justify-between items-center px-24 maxmd:px-6 maxlg:flex-col gap-5">
          <Character />
          <div>
            <Image
              src="/intro.png"
              className=" bg-center"
              alt="about/img"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className=" px-16 py-12 maxmd:px-3 bg-[#1C1D20]">
        <h2 className=" text-5xl mb-9 maxmd:text-4xl">i can help you with</h2>
        <div className=" grid grid-cols-3 maxmd:grid-cols-1 gap-7">
          {services.map((service) => (
            <div key={service.id}>
              <h5 className=" text-xl mb-4 opacity-75">0{service.id}</h5>
              <div className=" w-full h-[1px] opacity-20 bg-slate-100 mb-4"></div>
              <h4 className=" text-3xl maxlg:text-2xl mb-4">{service.title}</h4>
              <p className=" text-lg opacity-80 tracking-widest normal-case leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
