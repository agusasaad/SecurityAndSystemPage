"use client";
import { useEffect, useRef } from "react";
import styles from "./HomePage.module.css";
import { poppins } from "@/Fonts/fonts";
import { FiExternalLink } from "react-icons/fi";
import gsap from "gsap";

const HomePage = () => {
  const background = useRef(null);
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
      duration: 0.8,
      stagger: 0.3,
      delay: 0.5,
    });
  }, []);

  return (
    <div className={styles.homePage} ref={background}>
      <div className={styles.containerTitle}>
        <h1 ref={title} className={poppins.className}>
          Construyendo un Futuro Digital.
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
          <FiExternalLink className={styles.icon} />
        </button>
        <button className={`${poppins.className} ${styles.buttonFolow}`}>
          Seguinos Nuestras Redes
        </button>
      </div>
    </div>
  );
};

export default HomePage;
