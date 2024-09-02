"use client";
import styles from "./page.module.css";
import { poppins } from "@/Fonts/fonts";
import { PiFileMagnifyingGlassDuotone } from "react-icons/pi";
import { LuCompass } from "react-icons/lu";
import { BsShieldLock } from "react-icons/bs";
import { TbCloudCog } from "react-icons/tb";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ConsultoriaIt = () => {
  const titleRef = useRef(null);
  const cardOne = useRef(null);
  const cardTwo = useRef(null);
  const cardThree = useRef(null);
  const cardFour = useRef(null);
  const buttonControl = useRef(null);
  const gradientRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [
        titleRef.current,
        cardOne.current,
        cardTwo.current,
        cardThree.current,
        cardFour.current,
        buttonControl.current,
      ],
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
    ).fromTo(
      gradientRef.current,
      { scale: 0, opacity: 0, visibility: "hidden" },
      {
        scale: 1,
        opacity: 0.9,
        visibility: "visible",
        duration: 1,
        ease: "power3",
      }
    );
  }, []);

  return (
    <div className={styles.service}>
      <div className={styles.gradient} ref={gradientRef}></div>
      <div className={styles.containerServices}>
        <section className={styles.sectionOne}>
          <div className={styles.title} ref={titleRef}>
            <h2 className={poppins.className}>Consultoria IT</h2>
            <p className={poppins.className}>
              Todos nuestros servicios de Consultoria IT incluyen
            </p>
          </div>
          <div className={styles.personalizado} ref={cardOne}>
            <span
              style={{
                background: "rgba(0, 189, 87, 0.1)",
                color: "rgb(0, 189, 87)",
              }}
            >
              <PiFileMagnifyingGlassDuotone style={{ fontSize: "15px" }} />
              Análisis
            </span>
            <h2 className={poppins.className}>
              Evaluación de Infraestructura Tecnológica
            </h2>
            <p className={poppins.className}>
              Análisis y evaluación de la infraestructura tecnológica existente
              para identificar áreas de mejora y optimización.
            </p>
          </div>

          <div className={styles.personalizado} ref={cardTwo}>
            <span
              style={{
                background: "#9162c025",
                color: "#c084fd",
              }}
            >
              <LuCompass style={{ fontSize: "15px" }} />
              Estrategia
            </span>
            <h2 className={poppins.className}>
              Planificación Estratégica de TI
            </h2>
            <p className={poppins.className}>
              Desarrollo de estrategias a largo plazo para alinear la tecnología
              con los objetivos de negocio y mejorar la eficiencia operativa.
            </p>
          </div>

          <div className={styles.personalizado} ref={cardThree}>
            <span
              style={{
                background: "#3b88e925",
                color: "#4e9eff",
              }}
            >
              <BsShieldLock style={{ fontSize: "15px" }} />
              Seguridad
            </span>
            <h2 className={poppins.className}>
              Auditoría de Seguridad Informática
            </h2>
            <p className={poppins.className}>
              Revisión exhaustiva de las prácticas de seguridad y sistemas de la
              empresa para identificar vulnerabilidades y recomendaciones para
              proteger los datos.
            </p>
          </div>

          <div className={styles.personalizado} ref={cardFour}>
            <span
              style={{
                background: "#d1772425",
                color: "#ff9a3c",
              }}
            >
              <TbCloudCog style={{ fontSize: "15px" }} />
              Innovación
            </span>
            <h2 className={poppins.className}>
              Asesoramiento en Transformación Digital
            </h2>
            <p className={poppins.className}>
              Consultoría para la integración de nuevas tecnologías y procesos
              digitales que mejoren la productividad y competitividad de la
              empresa.
            </p>
          </div>
          <div className={styles.controlButtons} ref={buttonControl}>
            <Link href={"/servidores_soluciones_cloud"}>
              <button className={poppins.className}>
                <IoArrowBack /> Atras
              </button>
            </Link>
            <button
              className={poppins.className}
              disabled
              style={{ opacity: 0.5, pointerEvents: "none" }}
            >
              Siguiente <IoArrowForward />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultoriaIt;
