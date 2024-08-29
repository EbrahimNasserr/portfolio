"use client";
import styles from "../_components/Contact/style.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../_common/Magnetic/Magnetic";
import toast from "react-hot-toast";
import styless from "./style.module.css";
function isInputNamedElement(e) {
  return "value" in e && "name" in e;
}

const ContactPage = () => {
  const [state, setState] = useState();
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState("loading");

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        message: formData.message,
      }),
    });

    setState("ready");
    toast.success(`Hi ${formData.firstName}, your message has been sent!`);
  }
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <main>
      <section>
        <motion.div style={{ y }} ref={container} className={styles.contact}>
          <div className={styles.body}>
            <div className={styles.title}>
              <span>
                <div className={styles.imageContainer}>
                  <Image
                    width={300}
                    height={300}
                    alt={"image"}
                    src={`/profile.webp`}
                    loading="eager"
                  />
                </div>
                <h2>Let&apos;s work together</h2>
              </span>
              <motion.div style={{ x }} className={styles.buttonContainer}>
                <Magnetic>
                  <div className={styles.button}>
                    <p>Get in touch</p>
                  </div>
                </Magnetic>
              </motion.div>
              <motion.svg
                style={{ rotate, scale: 2 }}
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                  fill="white"
                />
              </motion.svg>
            </div>
            <form
              className={` ${styless.form} w-full relative px-28 pt-7 mt-10 maxmd:px-10 flex justify-center flex-col`}
              onSubmit={handleOnSubmit}
            >
              <div className={styless.form__div}>
                <input
                  type="text"
                  placeholder=""
                  required
                  name="firstName"
                  className={styless.form__input}
                />
                <label htmlFor="" className={styless.form__label}>
                  name
                </label>
              </div>
              <div className={styless.form__div}>
                <input
                  type="email"
                  className={` ${styless.form__input} normal-case`}
                  placeholder=" "
                  required
                  name="email"
                />
                <label htmlFor="" className={styless.form__label}>
                  email
                </label>
              </div>
              <textarea
                name="message"
                rows="7"
                required
                placeholder="Your Message"
                className=" bg-transparent pl-5 pt-5 rounded border-b border-solid border-[#80868b] outline-none normal-case placeholder:text-xs mb-2"
              />
              <button>
                Send
                <div className={styless.arrow_wrapper}>
                  <div className={styless.arrow}></div>
                </div>
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactPage;
