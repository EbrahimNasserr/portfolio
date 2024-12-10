"use client";
import { useEffect, useState } from "react";
import Project from "./components/Project/Project";
import Modal from "./components/Modal/Modal";
import { WorkPageprojects } from "../_Data/data";
import Image from "next/image";

export default function Work() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    // Add event listener to update window width state
    window.addEventListener("resize", updateWindowWidth);
    // Initial call to set window width state
    updateWindowWidth();
    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []); // Empty dependency array ensures effect runs only once on mount
  return (
    <main className=" mt-12">
      {windowWidth >= 1024 ? (
        <section className=" w-full h-full py-24 flex flex-col items-center justify-center">
          {WorkPageprojects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                href={project.link}
                setModal={setModal}
                key={index}
              />
            );
          })}
          <Modal modal={modal} projects={WorkPageprojects} />
        </section>
      ) : (
        <section className=" w-full h-full py-24">
          <div className=" grid grid-cols-2 maxmd:grid-cols-1 gap-5 px-12">
            {WorkPageprojects.map((project, index) => {
              return (
                <a
                  className=" w-full mb-5"
                  href={project.link}
                  target="_blank"
                  key={index}
                >
                  <div>
                    <div
                      className=" w-full p-5 h-[400px] flex justify-center items-center mb-3"
                      style={{ backgroundColor: project.color }}
                    >
                      <img
                        src={project.src}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        layout="responsive"
                        width={1000}
                        height={500}
                        alt="image"
                        className=" bg-center bg-cover object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className=" flex gap-3 flex-col">
                      <h4 className=" text-2xl">{project.title}</h4>
                      <div className="w-full h-[1px] opacity-20 bg-slate-100"></div>
                      <p className="text-lg opacity-80">Design & Development</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
