"use client";
import React, { useEffect, useRef } from "react";
import styles from "./HomePage.module.css";
import { poppins } from "@/Fonts/fonts";
import gsap from "gsap";

const HomePage = () => {
  const title = useRef(null);
  const titleTwo = useRef(null);

  useEffect(() => {
    gsap.set([title.current, titleTwo.current], {
      y: 100,
      visibility: "hidden",
    });
    gsap.to([title.current, titleTwo.current], {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3",
      duration: 1,
      stagger: 0.1,
    });
  }, []);
  return (
    <div className={styles.homePage}>
      <div className={styles.containerTitle}>
        <span className={`${poppins.className} ${styles.subtitle}`}>
          Security and System
        </span>
        <div className={styles.containerH1}>
          <h1 ref={title}>Construyendo</h1>
        </div>
        <div className={styles.containerH1}>
          <h1 ref={titleTwo}>
            un futuro <span className={styles.span}>digital.</span>
          </h1>
        </div>
      </div>
      <div className={styles.containerText}>
        <p className={poppins.className}>
          Creamos páginas web personalizadas que conectan con tu audiencia y
          generan resultados impactantes.
        </p>
      </div>
      <div className={styles.containerButton}>
        <button className={`${poppins.className} ${styles.button}`}>
          <span>Contratar Servicios</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
