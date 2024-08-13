"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Cards.module.css";
import { poppins } from "@/Fonts/fonts";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import DesarrolloWebImg from "./../../../../public/desarrolloWeb_1.svg";
import foto_SYC_01 from "./../../../../public/servidoresCloud/ELEMENTO_01.png";
import foto_SYC_02 from "./../../../../public/servidoresCloud/ELEMENTO_02.png";
import foto_SYC_03 from "./../../../../public/servidoresCloud/ELEMENTO_03.png";
import foto_SYC_04 from "./../../../../public/servidoresCloud/ELEMENTO_04.png";
import foto_SYC_05 from "./../../../../public/servidoresCloud/ELEMENTO_05.png";
import foto_SYC_06 from "./../../../../public/servidoresCloud/ELEMENTO_06.png";

import foto_1 from "./../../../../public/00_0000_Capa-2.png";
import foto_2 from "./../../../../public/00_0001_Capa-3.png";
import foto_3 from "./../../../../public/00_0002_Capa-4.png";

import foto_IT_1 from "./../../../../public/ConsultoriaIT/ELEMENTO_1.png";
import foto_IT_3 from "./../../../../public/ConsultoriaIT/ELEMENTO_3.png";
import foto_IT_4 from "./../../../../public/ConsultoriaIT/ELEMENTO_4.png";
import foto_IT_5 from "./../../../../public/ConsultoriaIT/ELEMENTO_5.png";
import foto_IT_6 from "./../../../../public/ConsultoriaIT/ELEMENTO_6.png";
import foto_IT_7 from "./../../../../public/ConsultoriaIT/ELEMENTO_7.png";
import foto_IT_8 from "./../../../../public/ConsultoriaIT/ELEMENTO_8.png";
import foto_IT_2 from "./../../../../public/ConsultoriaIT/ELEMENTO_2.png";
import foto_IT_10 from "./../../../../public/ConsultoriaIT/ELEMENTO_10.png";
import foto_IT_9 from "./../../../../public/ConsultoriaIT/ELEMENTO_9.png";
import foto_IT_11 from "./../../../../public/ConsultoriaIT/ELEMENTO_11.png";

const Cards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach(({ card, elements, images }, index) => {
      // if (window.innerWidth >= 1100) {
      //   gsap.fromTo(
      //     card,
      //     {
      //       scale: 1,
      //     },
      //     {
      //       scale: 1.1,
      //       ease: "power1.out",
      //       stagger: 0.2,
      //       scrollTrigger: {
      //         trigger: card,
      //         start: "top 80%",
      //         end: "top 20%",
      //         scrub: true,
      //       },
      //     }
      //   );
      // }

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
          scrollTrigger: {
            trigger: card,
            start: "top+=200 80%",
            end: "top 20%",
          },
        }
      );

      // Animación de todas las imágenes con stagger si es un array
      if (images.length > 1) {
        gsap.fromTo(
          images,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power1.out",
            delay: 0.1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top+=200 80%",
              end: "top 20%",
            },
          }
        );
      } else {
        gsap.fromTo(
          images[0],
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top+=200 80%",
              end: "top 20%",
            },
          }
        );
      }
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
          },
          {
            img: [foto_1, foto_2, foto_3],
            subtitle: "SERVICIO",
            title: "Aplicaciones Móviles",
            text: "Diseñamos y desarrollamos aplicaciones móviles personalizadas que permiten a tu empresa conectarse con una audiencia móvil en crecimiento.",
            tips: [
              "Apps personalizadas para tu negocio.",
              "Diseños que capturan usuarios en movimiento.",
              "Expande tu alcance con soluciones móviles efectivas.",
            ],
          },
          {
            img: [
              foto_SYC_01,
              foto_SYC_02,
              foto_SYC_03,
              foto_SYC_04,
              foto_SYC_05,
              foto_SYC_06,
            ],
            subtitle: "SERVICIO",
            title: "Servidores y Soluciones Cloud",
            text: "Implementamos infraestructuras robustas en AWS, Azure y Google Cloud, garantizando escalabilidad, seguridad y disponibilidad con configuraciones personalizadas para cada proyecto.",
            tips: [
              "Configuraciones personalizadas.",
              "Escalabilidad y seguridad garantizadas.",
              "Gestión experta para alta disponibilidad",
            ],
          },
          {
            img: [
              foto_IT_10,
              foto_IT_1,
              foto_IT_4,
              foto_IT_7,
              foto_IT_11,
              foto_IT_6,
              foto_IT_3,
              foto_IT_5,
              foto_IT_8,
              foto_IT_9,
              foto_IT_2,
            ],
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
                images: Array.isArray(card?.img)
                  ? el?.querySelectorAll("img")
                  : [el?.querySelector("img")],
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
              {Array.isArray(card.img) && card.img.length > 0 ? (
                card.img.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={card.title}
                    width={"100%"}
                    height={"auto"}
                  />
                ))
              ) : (
                <Image
                  src={card.img}
                  alt={card.title}
                  width={"100%"}
                  height={"auto"}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
