"use client";
import styles from "./SectionOne.module.css";
import Cards from "./cards/Cards";
import { poppins } from "@/Fonts/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const SectionOne = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
        visibility: "hidden",
      },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        ease: "power3.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "top 20%",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.containerTitle} ref={titleRef}>
        <h2 className={poppins.className}>
          Conocé los servicios que tenemos para ofrecerte.
        </h2>
        <p className={poppins.className}>
          Encuentra la solución perfecta con nuestra variedad de servicios.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default SectionOne;
