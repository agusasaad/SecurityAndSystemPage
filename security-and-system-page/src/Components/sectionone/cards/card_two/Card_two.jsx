import { poppins } from "@/Fonts/fonts";
import styles from "./Card_two.module.css";
import Checked from "@/svg/Checked";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import foto_1 from "./../../../../../public/00_0000_Capa-2.png";
import foto_2 from "./../../../../../public/00_0001_Capa-3.png";
import foto_3 from "./../../../../../public/00_0002_Capa-4.png";
import Link from "next/link";

const Card_two = () => {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const tip_oneRef = useRef(null);
  const tip_twoRef = useRef(null);
  const tip_threeRef = useRef(null);
  const button_container = useRef(null);
  const img_oneRef = useRef(null);
  const img_twoRef = useRef(null);
  const img_threeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = [
      subtitleRef.current,
      titleRef.current,
      descriptionRef.current,
      tip_oneRef.current,
      tip_twoRef.current,
      tip_threeRef.current,
      img_oneRef.current,
      img_twoRef.current,
      img_threeRef.current,
    ];

    gsap.fromTo(
      elements,
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
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=200 80%",
          end: "bottom 20%",
        },
      }
    );

    gsap.fromTo(
      [img_oneRef.current, img_twoRef.current, img_threeRef.current],
      {
        translateY: -15,
      },
      {
        translateY: 0,
        duration: 1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );

    gsap.fromTo(
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
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=200 80%",
          end: "bottom 20%",
        },
        delay: 1.5,
      }
    );
  }, []);

  return (
    <div className={styles.card} ref={containerRef}>
      <div className={`${poppins.className} ${styles.containerText}`}>
        <h5 ref={subtitleRef}>Servicio</h5>
        <h3 className={poppins.className} ref={titleRef}>
          Aplicaciones Móviles
        </h3>
        <p className={poppins.className} ref={descriptionRef}>
          Diseñamos y desarrollamos aplicaciones móviles personalizadas que
          permiten a tu empresa conectarse con una audiencia móvil en
          crecimiento.
        </p>
        <div className={styles.tips}>
          <p className={poppins.className} ref={tip_oneRef}>
            <Checked />
            Apps personalizadas para tu negocio.
          </p>
          <p className={poppins.className} ref={tip_twoRef}>
            <Checked />
            Diseños que capturan usuarios en movimiento.
          </p>
          <p className={poppins.className} ref={tip_threeRef}>
            <Checked />
            Expande tu alcance con soluciones móviles efectivas.
          </p>
        </div>
        <div className={styles.containerButton}>
          <Link href="/desarrollo_web">
            <button
              className={`${poppins.className} ${styles.button_black}`}
              ref={button_container}
            >
              +Informacion
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.containerImg}>
        <img src={foto_1.src} alt={"Aplicaciones Móviles"} ref={img_oneRef} />
        <img src={foto_2.src} alt={"Aplicaciones Móviles"} ref={img_twoRef} />
        <img src={foto_3.src} alt={"Aplicaciones Móviles"} ref={img_threeRef} />
      </div>
    </div>
  );
};

export default Card_two;
