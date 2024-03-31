import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import { slider1, slider2 } from "@/app/_Data/data";
import Image from "next/image";

const Services = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section className=" overflow-hidden">
      <div ref={container} className={styles.slidingImages}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => {
            return (
              <div
                className={styles.project}
                style={{ backgroundColor: project.color }}
                key={index}
              >
                <div key={index} className={styles.imageContainer}>
                  <Image
                    fill={true}
                    sizes="500"
                    alt={"image"}
                    src={project.src}
                    loading="eager"
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => {
            return (
              <div
                className={styles.project}
                style={{ backgroundColor: project.color }}
                key={index}
              >
                <div key={index} className={styles.imageContainer}>
                  <Image
                    fill={true}
                    sizes="500"
                    alt={"image"}
                    src={project.src}
                    loading="eager"
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
