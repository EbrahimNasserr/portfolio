"use client";
import styles from "./style.module.scss";
import Magnetic from "@/app/_common/Magnetic/Magnetic";
import { useState, useEffect } from "react";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Calculate current year
    const year = new Date().getFullYear();
    setCurrentYear(`${year} © EbrahimNasser`);

    // Update time every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    // Cleanup interval
    return () => clearInterval(intervalId);
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.spanContainer}>
          <span>
            <h3>designed & Built by</h3>
            <p>{currentYear}</p>
          </span>
          <span>
            <h3>Version</h3>
            <p>{currentTime}</p>
          </span>
        </div>
        <div>
          <span>
            <h3>socials</h3>
            <Magnetic>
              <a
                href="https://www.facebook.com/profile.php?id=100027680303933"
                target="_blank"
              >
                facebook
              </a>
            </Magnetic>
          </span>
          <Magnetic>
            <a
              href="https://www.instagram.com/ebrahim_nasserr/"
              target="_blank"
            >
              Instagram
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://github.com/EbrahimNasserr" target="_blank">
              githup
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/ebrahim-nasser/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://wa.me/+201152153667"
              target="_blank"
              rel="noopener noreferrer"
            >
              whatsApp
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
