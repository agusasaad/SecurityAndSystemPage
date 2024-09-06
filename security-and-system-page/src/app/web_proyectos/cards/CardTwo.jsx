"use client";
import { poppins } from "@/Fonts/fonts";
import styles from "./CardTwo.module.css";
import web1 from "./../../../../public/proyectos/net_expertos_optimizada.jpg";
import web2 from "./../../../../public/proyectos/tu_voz_suma_optimizada.jpg";
import web3 from "./../../../../public/proyectos/dni_optimizado.jpg";
import web4 from "./../../../../public/proyectos/que_dj_optimizada.jpg";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const CardTwo = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const containerCard = useRef(null);
  const card_one = useRef(null);
  const card_two = useRef(null);
  const card_three = useRef(null);
  const card_four = useRef(null);

  const initialCards = [
    { id: 1, title: "Net Expertos", imageSrc: web1.src, ref: card_one },
    { id: 2, title: "Tu voz Suma", imageSrc: web2.src, ref: card_two },
    { id: 3, title: "DNI Logistica", imageSrc: web3.src, ref: card_three },
    { id: 4, title: "Que DJ", imageSrc: web4.src, ref: card_four },
  ];

  const [cards, setCards] = useState(initialCards);
  const [isMobile, setIsMobile] = useState(false); // Nuevo estado para móvil

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detecta si la pantalla es móvil
    };

    // Llama a la función para inicializar al montar
    handleResize();

    // Listener para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Cleanup del listener cuando se desmonta el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    if (window.innerWidth > 768) {
      tl.fromTo(
        [
          subtitleRef.current,
          titleRef.current,
          containerCard.current,
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
          delay: 0.5,
        }
      );
      tl.to(card_one.current, {
        rotation: -45,
        x: -170,
        y: 50,
        boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
        duration: 0.5,
        ease: "power3.out",
      })
        .to(
          card_two.current,
          {
            rotation: -30,
            x: -120,
            y: 23,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_three.current,
          {
            rotation: -15,
            x: -60,
            y: 5,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_four.current,
          {
            rotation: 0,
            x: 0,
            y: 0,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
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
      tl.to(card_one.current, {
        rotation: 0,
        x: 0,
        y: 0,
        boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
        duration: 0.5,
        ease: "power3.out",
      })
        .to(
          card_two.current,
          {
            rotation: 0,
            x: 0,
            y: 50,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_three.current,
          {
            rotation: 0,
            x: 0,
            y: 100,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          card_four.current,
          {
            rotation: 0,
            x: 0,
            y: 150,
            boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.808)",
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        );
    }
  }, []);

  const moveCardToBack = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId);
    const reorderedCards = [
      ...cards.filter((card) => card.id !== cardId),
      selectedCard,
    ];
    setCards(reorderedCards);

    reorderedCards.forEach((card, index) => {
      const { x, y, rotation } = getCardTransform(index, isMobile); // Pasar isMobile
      gsap.to(card.ref.current, {
        rotation,
        x,
        y,
        duration: 0.7,
        ease: "power1",
      });

      card.ref.current.style.zIndex = index + 1; // Mantiene el z-index correcto
    });
  };

  const getCardTransform = (index, isMobile) => {
    // Transformaciones para escritorio
    const desktopTransformations = [
      { rotation: -45, x: -170, y: 50 }, // Card 1
      { rotation: -30, x: -120, y: 23 }, // Card 2
      { rotation: -15, x: -60, y: 5 }, // Card 3
      { rotation: 0, x: 0, y: 0 }, // Card 4
    ];

    // Transformaciones para móvil
    const mobileTransformations = [
      { rotation: 0, x: 0, y: 0 }, // Card 1
      { rotation: 0, x: 0, y: 50 }, // Card 2
      { rotation: 0, x: 0, y: 100 }, // Card 3
      { rotation: 0, x: 0, y: 150 }, // Card 4
    ];

    // Retorna las transformaciones dependiendo si es móvil o no
    return isMobile
      ? mobileTransformations[index]
      : desktopTransformations[index];
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
      <div className={styles.containerCards} ref={containerCard}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={styles.card}
            ref={card.ref}
            onClick={() => moveCardToBack(card.id)}
          >
            <img src={card.imageSrc} alt={card.title} />
            <div className={styles.title}>
              <h5 className={poppins.className}>{card.title}</h5>
              <button
                onClick={() => {
                  console.log(card.id);
                }}
              >
                Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTwo;
