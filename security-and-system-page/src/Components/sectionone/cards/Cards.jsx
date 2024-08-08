"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Cards.module.css";
import { poppins } from "@/Fonts/fonts";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import DesarrolloWebImg from "./../../../../public/desarrolloWeb.svg";
import AplicacionesMobiles from "./../../../../public/AplicacionesMobiles.svg";
import solucionesCloud from "./../../../../public/cloudGif.gif";

const Cards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach(({ card, elements, image }, index) => {
      if (window.innerWidth >= 1100) {
        gsap.fromTo(
          card,
          {
            scale: 1,
          },
          {
            scale: 1.1,
            ease: "power1.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
              // markers: true,
            },
          }
        );
      }
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power1.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        image,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power1.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {[
          {
            img: DesarrolloWebImg,
            subtitle: "SERVICIO",
            title: "Desarrollo de aplicaciones Web",
            text: "Nuestros diseños web están desarrollados para representar la identidad de tu marca y mejorar la interacción con tus clientes en línea.",
            tips: [
              "Optimiza tu presencia y conversión online.",
              "Interfaces intuitivas y atractivas.",
              "Aumenta la interacción con tus clientes.",
            ],
            width: "550",
            height: "auto",
          },
          {
            img: AplicacionesMobiles,
            subtitle: "SERVICIO",
            title: "Aplicaciones Móviles",
            text: "Diseñamos y desarrollamos aplicaciones móviles personalizadas que permiten a tu empresa conectarse con una audiencia móvil en crecimiento.",
            tips: [
              "Apps personalizadas para tu negocio.",
              "Diseños que capturan usuarios en movimiento.",
              "Expande tu alcance con soluciones móviles efectivas.",
            ],
            width: "300",
            height: "auto",
          },
          {
            img: solucionesCloud,
            subtitle: "SERVICIO",
            title: "Servidores y Soluciones Cloud",
            text: "Implementamos infraestructuras robustas en AWS, Azure y Google Cloud, garantizando escalabilidad, seguridad y disponibilidad con configuraciones personalizadas para cada proyecto.",
            tips: [
              "Configuraciones personalizadas.",
              "Escalabilidad y seguridad garantizadas.",
              "Gestión experta para alta disponibilidad",
            ],
            width: "800",
            height: "auto",
          },
          {
            img: DesarrolloWebImg,
            subtitle: "SERVICIO",
            title: "Consultoria IT",
            text: "Ofrecemos asesoramiento en mejores prácticas tecnológicas y transformación digital, colaborando con nuestros clientes para optimizar sus procesos mediante soluciones innovadoras.",
            tips: [
              "Mejores prácticas y transformación digital.",
              "Optimización de procesos.",
              "Soluciones en colaboración con clientes.",
            ],
          },
        ].map((card, index) => (
          <div
            className={styles.card}
            ref={(el) =>
              (cardsRef.current[index] = {
                card: el,
                elements: el?.querySelectorAll("h5, h3, p"),
                image: el?.querySelector("img"),
              })
            }
            key={index}
          >
            <div className={`${poppins.className} ${styles.containerText}`}>
              <h5>{card.subtitle}</h5>
              <h3 className={poppins.className}>{card.title}</h3>
              <p className={poppins.className}>{card.text}</p>
              <div className={styles.tips}>
                {card.tips?.map((tip, index) => (
                  <p className={poppins.className} key={index}>
                    <IoIosCheckmarkCircleOutline className={styles.icon} />
                    {tip}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.containerImg}>
              <Image
                src={card.img}
                alt={card.title}
                width={card.width}
                height={card.height}
              />
              <div className={styles.gradient}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
