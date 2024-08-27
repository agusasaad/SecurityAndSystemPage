"use client";
import styles from "./ContactUs.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { poppins } from "@/Fonts/fonts";
import { useEffect, useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import map from "./../../../public/map.png";
import location from "./../../../public/location.gif";

const ContactUs = () => {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const spanRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      [
        subtitleRef.current,
        titleRef.current,
        descriptionRef.current,
        spanRef.current,
      ],
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=200 80%",
          end: "top 20%",
        },
      }
    );

    gsap.fromTo(
      locationRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power1.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=200 50%",
          end: "top 20%",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ContactUs} ref={containerRef}>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={poppins.className} ref={subtitleRef}>
              Contacto
            </span>
            <h2 className={poppins.className} ref={titleRef}>
              Conversemos
            </h2>
            <p className={poppins.className} ref={descriptionRef}>
              ¿Listo para llevar tu presencia en línea al siguiente nivel?
              ¡Hablemos de tu proyecto! Contáctanos para una consulta gratuita.
            </p>
          </div>
          <div className={styles.infoContainer} ref={spanRef}>
            <span className={poppins.className}>
              <FaLocationDot className={styles.icon} />
              Juan José paso 1353, Morón
            </span>
            <span className={poppins.className}>
              <MdOutlinePhone className={styles.icon} />
              11 7726-4032
            </span>
            <span className={poppins.className}>
              <MdOutlineEmail className={styles.icon} />
              contact@securityandsystem.com
            </span>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <a
            className={styles.gradient}
            href="https://maps.app.goo.gl/GMFqPPhv4dxQHZzv7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span ref={locationRef}>
              <img src={location.src} alt="map" width={50} height={50} />
            </span>
          </a>
          <img src={map.src} alt="map" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
