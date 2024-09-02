"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { poppins } from "@/Fonts/fonts";
import styles from "./Card_one.module.css";
import Checked from "@/svg/Checked";
import DesarrolloWebImg_1 from "./../../../../../public/desarrolloWeb/desarrolloWeb_1.png";
import DesarrolloWebImg_2 from "./../../../../../public/desarrolloWeb/desarrolloWeb_2.png";
import DesarrolloWebImg_3 from "./../../../../../public/desarrolloWeb/desarrolloWeb_3.png";
import DesarrolloWebImg_4 from "./../../../../../public/desarrolloWeb/desarrolloWeb_4.png";
import Link from "next/link";

const images = [
  DesarrolloWebImg_1.src,
  DesarrolloWebImg_2.src,
  DesarrolloWebImg_3.src,
  DesarrolloWebImg_4.src,
];

const Card_one = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const tip_oneRef = useRef(null);
  const tip_twoRef = useRef(null);
  const tip_threeRef = useRef(null);
  const button_container = useRef(null);
  const img_oneRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=200 80%",
        end: "bottom 20%",
      },
    });

    timeline
      .fromTo(
        [
          titleRef.current,
          descriptionRef.current,
          tip_oneRef.current,
          tip_twoRef.current,
          tip_threeRef.current,
          img_oneRef.current,
        ],
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power1",
          stagger: 0.1,
        }
      )
      .fromTo(
        button_container.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power1",
          delay: 0.6,
        }
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.card} ref={containerRef}>
      <div className={`${poppins.className} ${styles.containerText}`}>
        <h3 className={poppins.className} ref={titleRef}>
          Desarrollo Web
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
        <div className={styles.containerButton}>
          <Link href="/desarrollo_web">
            <button
              className={`${poppins.className} ${styles.button_black}`}
              ref={button_container}
            >
              Detalles
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.containerImg} ref={img_oneRef}>
        <div className={styles.carousel}>
          <div
            className={styles.carouselImages}
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Desarrollo de aplicaciones Web ${index + 1}`}
                className={styles.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_one;
