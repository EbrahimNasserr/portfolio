import Path from "@/app/_common/Path/Path";
import Button from "@/app/_elements/Button/Button";
import Image from "next/image";
import Link from "next/link";
import svg from "/public/svgexport-11.svg";

const About = () => {
  const buttonText = "about me";
  return (
    <section className=" px-14 maxmd:px-12 pb-24">
      <div className="flex flex-col gap-6">
        <Path />
        <h2 className=" justify-start text-left maxmd:text-5xl flex text-7xl font-medium">
          i am <br />
          ebrahim nasser
        </h2>
        <div className=" flex items-center maxmd:flex-col justify-between gap-5">
          <div className=" w-full flex justify-end maxmd:justify-center">
            <Image
              alt="svg"
              width={300}
              height={300}
              className=" relative bottom-16 maxmd:bottom-0 maxmd:w-52 h-auto w-auto"
              src={svg}
              loading="eager"
            />
          </div>
          <div className=" flex flex-col flex-balance relative top-[5rem] maxmd:top-0 items-start justify-between gap-5">
            <p className=" tracking-wide normal-case text-xl maxmd:text-lg font-normal leading-8">
              Front-end developer with a focus on building visually stunning and
              user-friendly websites. Driven to deliver engaging user
              experiences and a strong attention to detail in all projects.
            </p>
            <p className=" text-base tracking-wider text-[rgba(299,299,299,0.6)]">
              i never make a boring site.
            </p>
            <Link href="/about">
              <Button buttonText={buttonText} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
