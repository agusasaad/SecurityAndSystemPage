"use client";
import { poppins } from "@/Fonts/fonts";
import styles from "./page.module.css";
import web1 from "./../../../public/proyectos/cinq_capital_optimizada.jpg";
import web2 from "./../../../public/proyectos/fest_club_optimizada.jpg";
import web3 from "./../../../public/proyectos/fiestas_optimizada.jpg";
import web4 from "./../../../public/proyectos/sdp_optimizada.jpg";
import web5 from "./../../../public/proyectos/que_dj_optimizada.jpg";
import web6 from "./../../../public/proyectos/net_expertos_optimizada.jpg";
import web7 from "./../../../public/proyectos/tu_voz_suma_optimizada.jpg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";

const page = () => {
  const imageCarrucel = [
    {
      src: web1,
      name: "Cinq Capital",
      link: "https://cinqcapital.vercel.app/",
    },
    { src: web2, name: "Fest Club", link: "https://www.fest-club.com/" },
    { src: web3, name: "Salon Plaza", link: "https://salonplaza.com.ar/" },
    {
      src: web4,
      name: "Revestimiento SDP",
      link: "https://revestimientosdp.com.ar/",
    },
    { src: web5, name: "Que DJ", link: "https://quedj.online/" },
    {
      src: web6,
      name: "Net Expertos",
      link: "https://netexpertos.vercel.app/",
    },
    {
      src: web7,
      name: "Tu Voz Suma",
      link: "https://tuvozsuma.online/welcome",
    },
  ];

  const copy = [...imageCarrucel, ...imageCarrucel];

  const titleRef = useRef(null);
  const cardOne = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [titleRef.current, cardOne.current],
      { opacity: 0, y: 100, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.8,
        stagger: 0.1,
        animation: "power3",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <div className={styles.containerTitle} ref={titleRef}>
        <span className={poppins.className}>Proyectos Realizados</span>
        <h1 className={poppins.className}>
          Explora Nuestra variedad de Proyectos.
        </h1>
      </div>
      <div className={styles.containerCards} ref={cardOne}>
        <div className={styles.containerCarrucel}>
          {copy.map((element, index) => (
            <div key={index} className={styles.card_web}>
              <img
                src={element.src.src}
                width={"600px"}
                height={"auto"}
                alt={`Imagen del proyecto ${element.name}`}
              />

              <div className={styles.buttons}>
                <div className={styles.titleCard}>
                  <h3 className={poppins.className}>{element.name}</h3>
                </div>
                <div className={styles.buttonControl}>
                  <button
                    className={`${poppins.className} ${styles.button_blue}`}
                  >
                    Detalles
                  </button>
                  <Link href={element.link} target="_blank">
                    <button
                      className={`${poppins.className} ${styles.button_black}`}
                    >
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.containerCarrucel_mobile}>
          {imageCarrucel.map((element, index) => (
            <div key={index} className={styles.card_mobile}>
              <img
                src={element.src.src}
                width={"100%"}
                height={"auto"}
                alt={`Imagen del proyecto ${element.name}`}
              />

              <div className={styles.buttons_mobile}>
                <div className={styles.titleCard}>
                  <h3 className={poppins.className}>{element.name}</h3>
                </div>
                <div className={styles.buttonControl}>
                  <button
                    className={`${poppins.className} ${styles.button_blue}`}
                  >
                    Detalles
                  </button>
                  <Link href={element.link} target="_blank">
                    <button
                      className={`${poppins.className} ${styles.button_black}`}
                    >
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
