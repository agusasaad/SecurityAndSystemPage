"use client";
import React, { useEffect, useRef } from "react";
import styles from "./HomePage.module.css";
import { poppins } from "@/Fonts/fonts";
import gsap from "gsap";

const HomePage = () => {
  const title = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set([title.current, subtitleRef.current, buttonRef.current], {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    });
    gsap.to([title.current, subtitleRef.current, buttonRef.current], {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1.5,
      stagger: 0.3,
      delay: 0.5,
    });
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.containerTitle}>
        <h1 ref={title}>
          Construyendo un futuro <span className={styles.span}>digital.</span>
        </h1>
        <div className={styles.containerText}>
          <p className={poppins.className} ref={subtitleRef}>
            Creamos páginas web personalizadas que conectan con tu audiencia y
            generan resultados impactantes.
          </p>
        </div>
      </div>
      <div className={styles.containerButton} ref={buttonRef}>
        <button className={`${poppins.className} ${styles.button}`}>
          <span>Contratar Servicios</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
