"use client";
import { poppins } from "@/Fonts/fonts";
import styles from "./Card_four.module.css";
import Checked from "@/svg/Checked";
import foto_IT_1 from "./../../../../../public/ConsultoriaIT/ELEMENTO_1.png";
import foto_IT_2 from "./../../../../../public/ConsultoriaIT/ELEMENTO_2.png";
import foto_IT_3 from "./../../../../../public/ConsultoriaIT/ELEMENTO_3.png";
import foto_IT_4 from "./../../../../../public/ConsultoriaIT/ELEMENTO_4.png";
import foto_IT_5 from "./../../../../../public/ConsultoriaIT/ELEMENTO_5.png";
import foto_IT_6 from "./../../../../../public/ConsultoriaIT/ELEMENTO_6.png";
import foto_IT_7 from "./../../../../../public/ConsultoriaIT/ELEMENTO_7.png";
import foto_IT_8 from "./../../../../../public/ConsultoriaIT/ELEMENTO_8.png";
import foto_IT_9 from "./../../../../../public/ConsultoriaIT/ELEMENTO_9.png";
import foto_IT_10 from "./../../../../../public/ConsultoriaIT/ELEMENTO_10.png";
import foto_IT_11 from "./../../../../../public/ConsultoriaIT/ELEMENTO_11.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Card_four = () => {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const tip_oneRef = useRef(null);
  const tip_twoRef = useRef(null);
  const tip_threeRef = useRef(null);
  const img_oneRef = useRef(null);
  const img_twoRef = useRef(null);
  const img_threeRef = useRef(null);
  const img_fourRef = useRef(null);
  const img_fiveRef = useRef(null);
  const img_sixRef = useRef(null);
  const img_sevenRef = useRef(null);
  const img_eightRef = useRef(null);
  const img_nineRef = useRef(null);
  const img_tenRef = useRef(null);
  const img_elevenRef = useRef(null);

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
        img_oneRef.current,
        img_twoRef.current,
        img_threeRef.current,
        img_fourRef.current,
        img_fiveRef.current,
        img_sixRef.current,
        img_sevenRef.current,
        img_eightRef.current,
        img_nineRef.current,
        img_tenRef.current,
        img_elevenRef.current,
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

    gsap.fromTo(
      img_fiveRef.current,
      {
        translateY: -7,
      },
      {
        translateY: 0,
        duration: 1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      }
    );
  }, []);
  return (
    <div className={styles.card} ref={containerRef}>
      <div className={`${poppins.className} ${styles.containerText}`}>
        <h5 ref={subtitleRef}>Servicio</h5>
        <h3 className={poppins.className} ref={titleRef}>
          Consultoria IT
        </h3>
        <p className={poppins.className} ref={descriptionRef}>
          Ofrecemos asesoramiento en mejores prácticas tecnológicas y
          transformación digital, colaborando con nuestros clientes para
          optimizar sus procesos mediante soluciones innovadoras.
        </p>
        <div className={styles.tips}>
          <p className={poppins.className} ref={tip_oneRef}>
            <Checked />
            Mejores prácticas y transformación digital.
          </p>
          <p className={poppins.className} ref={tip_twoRef}>
            <Checked />
            Optimización de procesos.
          </p>
          <p className={poppins.className} ref={tip_threeRef}>
            <Checked />
            Soluciones en colaboración con clientes.
          </p>
        </div>
      </div>
      <div className={styles.containerImg}>
        <img src={foto_IT_10.src} alt={"Consultoria IT"} ref={img_oneRef} />
        <img src={foto_IT_11.src} alt={"Consultoria IT"} ref={img_twoRef} />
        <img src={foto_IT_7.src} alt={"Consultoria IT"} ref={img_threeRef} />
        <img src={foto_IT_4.src} alt={"Consultoria IT"} ref={img_fourRef} />
        <img src={foto_IT_1.src} alt={"Consultoria IT"} ref={img_fiveRef} />
        <img src={foto_IT_6.src} alt={"Consultoria IT"} ref={img_sixRef} />
        <img src={foto_IT_5.src} alt={"Consultoria IT"} ref={img_nineRef} />
        <img src={foto_IT_3.src} alt={"Consultoria IT"} ref={img_tenRef} />
        <img src={foto_IT_2.src} alt={"Consultoria IT"} ref={img_elevenRef} />
        <img src={foto_IT_8.src} alt={"Consultoria IT"} ref={img_sevenRef} />
        <img src={foto_IT_9.src} alt={"Consultoria IT"} ref={img_eightRef} />
      </div>
    </div>
  );
};

export default Card_four;
