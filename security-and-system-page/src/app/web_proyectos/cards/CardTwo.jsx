"use client";
import { poppins } from "@/Fonts/fonts";
import styles from "./CardTwo.module.css";
import web1 from "./../../../../public/proyectos/que_dj_optimizada.jpg";
import web4 from "./../../../../public/proyectos/net_expertos_optimizada.jpg";
import web3 from "./../../../../public/proyectos/tu_voz_suma_optimizada.jpg";
import web2 from "./../../../../public/proyectos/dni_optimizado.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const CardTwo = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const containerCard = useRef(null);
  const card_one = useRef(null);
  const card_two = useRef(null);
  const card_three = useRef(null);
  const card_four = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerCard.current,
        start: "top-=300 90%",
        end: "bottom 20%",
      },
    });

    // Animación inicial de entrada
    if (window.innerWidth > 750) {
      tl.fromTo(
        [
          subtitleRef.current,
          titleRef.current,
          card_one.current,
          card_two.current,
          card_three.current,
          card_four.current,
        ],
        { opacity: 0, y: 100, visibility: "hidden" },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      tl.fromTo(
        [subtitleRef.current, titleRef.current, containerCard.current],
        { opacity: 0, y: 100, visibility: "hidden" },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // Animación de apertura como un mazo de cartas
    if (window.innerWidth > 750) {
      tl.to(card_one.current, {
        rotation: -15,
        x: -80,
        y: -10,
        boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
        pointerEvents: "none",
        duration: 0.5,
        ease: "power3.out",
      })
        .to(
          card_two.current,
          {
            rotation: -5,
            x: -25,
            y: -15,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            pointerEvents: "none",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_three.current,
          {
            rotation: 10,
            x: 25,
            y: -5,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            pointerEvents: "none",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_four.current,
          {
            rotation: 25,
            x: 72,
            y: 15,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            pointerEvents: "none",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        );
    } else {
      tl.to(card_one.current, {
        y: 0,
        pointerEvents: "none",
        boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.5)",
        duration: 0.5,
        ease: "power3.out",
      })
        .to(
          card_two.current,
          {
            y: 50,
            pointerEvents: "none",
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.5)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_three.current,
          {
            y: 100,
            pointerEvents: "none",
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.5)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_four.current,
          {
            y: 150,
            pointerEvents: "none",
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.5)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        );
    }
  }, []);

  const resetCards = () => {
    if (window.innerWidth > 750) {
      gsap.to(
        [
          card_one.current,
          card_two.current,
          card_three.current,
          card_four.current,
        ],
        {
          rotation: 0,
          x: 0,
          y: 0,
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          duration: 0.5,
          ease: "power3.out",
        }
      );

      gsap.to([containerCard.current], {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginTop: "30px",
        flexWrap: "wrap",
        duration: 0.3,
        ease: "power1",
        delay: 0.5,
      });
    } else {
      gsap.to([containerCard.current], {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
        paddingBottom: "50px",
        duration: 0.3,
        ease: "power1",
        delay: 0.5,
      });
      gsap.to(
        [
          card_one.current,
          card_two.current,
          card_three.current,
          card_four.current,
        ],
        {
          y: 0,
          display: "flex",
          alignItems: "center",
          pointerEvents: "auto",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  };

  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <div className={styles.containerTitle}>
        <span className={poppins.className} ref={subtitleRef}>
          Trabajos Destacados
        </span>
        <h1 className={poppins.className} ref={titleRef}>
          Proyectos Mobile
        </h1>
      </div>
      <div
        className={styles.containerCards}
        ref={containerCard}
        onClick={resetCards}
      >
        <div className={styles.card} ref={card_one}>
          <img src={web1.src} alt="" />
          <div className={styles.title}>
            <h5 className={poppins.className}>Que DJ</h5>
            <button>Detalles</button>
          </div>
        </div>
        <div className={styles.card} ref={card_two}>
          <img src={web2.src} alt="" />
          <div className={styles.title}>
            <h5 className={poppins.className}>DNI Logistica</h5>
            <button>Detalles</button>
          </div>
        </div>
        <div className={styles.card} ref={card_three}>
          <img src={web3.src} alt="" />
          <div className={styles.title}>
            <h5 className={poppins.className}>Tu Voz Suma</h5>
            <button>Detalles</button>
          </div>
        </div>
        <div className={styles.card} ref={card_four}>
          <img src={web4.src} alt="" />
          <div className={styles.title}>
            <h5 className={poppins.className}>Net Expertos</h5>
            <button>Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
