"use client";
import React from "react";
import styles from "./style.module.css";

export default function Project({ index, title, href, setModal }) {
  return (
    <a
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
      href={href}
      target="_blank"
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </a>
  );
}
