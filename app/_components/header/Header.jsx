"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../../_common/Magnetic/Magnetic";
import Rounded from "@/app/_common/RoundedButton/Rounded";
import Image from "next/image";
import logo from "/public/logo.webp";
import Link from "next/link";
import TransitionLink from "../TransitionLink/TransitionLink";

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 550) {
        gsap.to(button.current, {
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: 100,
            onLeave: () => {
              gsap.to(button.current, {
                scale: 1,
                duration: 0.25,
                ease: "power1.out",
              });
            },
            onEnterBack: () => {
              gsap.to(button.current, {
                scale: 0,
                duration: 0.25,
                ease: "power1.out",
              });
            },
          },
        });
      } else {
        // If the screen width is smaller or equal to 768 pixels, don't apply scroll animation
        gsap.to(button.current, {
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
        });
      }
    };

    const handleScroll = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 550) {
        gsap.to(button.current, {
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
        });
      }
    };

    handleResize(); // Call once initially

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={header} className={styles.header}>
      <Link href="/">
        <Image
          width={50}
          height={50}
          src={logo}
          alt="logo-img"
          loading="eager"
        />
      </Link>
      <nav className={styles.nav}>
        <Magnetic>
          <div className={styles.el}>
            <TransitionLink href="/work" label="work" />
            <div className={styles.indicator}></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={styles.el}>
            <TransitionLink href="/about" label="about" />
            <div className={styles.indicator}></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={styles.el}>
            <TransitionLink href="/contact" label="contact" />
            <div className={styles.indicator}></div>
          </div>
        </Magnetic>
      </nav>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </header>
  );
}
