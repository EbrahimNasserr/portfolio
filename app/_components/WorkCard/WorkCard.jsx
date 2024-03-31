"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Button from "@/app/_elements/Button/Button";

const WorkCard = ({
  i,
  title,
  description,
  src,
  link,
  color,
  targetScale,
  progress,
  range,
  tools,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const buttonText = "watch live";

  return (
    <>
      <div ref={container} className={styles.cardContainer}>
        <motion.div
          style={{
            backgroundColor: color,
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={styles.card}
        >
          <h2>{title}</h2>
          <div className={styles.body}>
            <div className={styles.description}>
              <p>{description}</p>
              <div className=" gap-3 mt-3 flex text-base flex-row">
                {tools.map((tol) => (
                  <p className=" line-clamp-1 text-base" key={tol}>
                    {tol}
                  </p>
                ))}
              </div>
              <a href={link} target="_blank">
                <Button buttonText={buttonText} />
              </a>
            </div>

            <div className={styles.imageContainer}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                <Image fill loading="lazy" sizes="500" src={src} alt="image" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WorkCard;
