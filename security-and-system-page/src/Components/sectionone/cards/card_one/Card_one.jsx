"use client";
import { poppins } from "@/Fonts/fonts";
import styles from "./Card_one.module.css";
import Checked from "@/svg/Checked";
import DesarrolloWebImg from "./../../../../../public/desarrolloWeb_1.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Card_one = () => {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const tip_oneRef = useRef(null);
  const tip_twoRef = useRef(null);
  const tip_threeRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      [
        subtitleRef.current,
        titleRef.current,
        descriptionRef.current,
        tip_oneRef.current,
        tip_twoRef.current,
        tip_threeRef.current,
        imgRef.current,
      ],
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=200 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <div className={styles.card} ref={containerRef}>
      <div className={`${poppins.className} ${styles.containerText}`}>
        <span className={poppins.className} ref={subtitleRef}>
          Servicio
        </span>
        <h3 className={poppins.className} ref={titleRef}>
          Desarrollo de aplicaciones Web
        </h3>
        <p className={poppins.className} ref={descriptionRef}>
          Nuestros diseños web están desarrollados para representar la identidad
          de tu marca y mejorar la interacción con tus clientes en línea.
        </p>
        <div className={styles.tips}>
          <p className={poppins.className} ref={tip_oneRef}>
            <Checked />
            Optimiza tu presencia y conversión online.
          </p>
          <p className={poppins.className} ref={tip_twoRef}>
            <Checked />
            Interfaces intuitivas y atractivas.
          </p>
          <p className={poppins.className} ref={tip_threeRef}>
            <Checked />
            Aumenta la interacción con tus clientes.
          </p>
        </div>
      </div>
      <div className={styles.containerImg} ref={imgRef}>
        <img
          src={DesarrolloWebImg.src}
          alt={"Desarrollo de aplicaciones Web"}
        />
      </div>
    </div>
  );
};

export default Card_one;
