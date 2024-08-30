"use client";
import styles from "./page.module.css";
import { poppins } from "@/Fonts/fonts";
import { PiCodeBold } from "react-icons/pi";
import { TbSettingsCode } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";
import { BsDatabaseCheck } from "react-icons/bs";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Modal from "./modal_desarrollo_web/Modal";
import cinq_capital from "./../../../public/project_1.jpg";
import fest_club from "./../../../public/project_4.jpg";

const DesarrolloWeb = () => {
  const titleRef = useRef(null);
  const cardOne = useRef(null);
  const cardTwo = useRef(null);
  const cardThree = useRef(null);
  const cardFour = useRef(null);
  const gradientRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [showComponent, setShowComponent] = useState("");

  const handleModal = (component) => {
    setShowComponent(component);
    setShowModal(true);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [
        titleRef.current,
        cardOne.current,
        cardTwo.current,
        cardThree.current,
        cardFour.current,
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
            <h2 className={poppins.className}>Servicios de Desarrollo Web</h2>
            <p className={poppins.className}>
              Todos nuestros servicios de Desarrollo Web incluyen
            </p>
          </div>
          <div className={styles.personalizado} ref={cardOne}>
            <span
              style={{
                background: "rgba(0, 189, 87, 0.1)",
                color: "rgb(0, 189, 87)",
              }}
            >
              <PiCodeBold style={{ fontSize: "15px" }} />
              Personalización
            </span>
            <h2 className={poppins.className}>
              Desarrollo de sitios web personalizados.
            </h2>
            <p className={poppins.className}>
              Creamos sitios web personalizados que reflejan tu marca, enfocados
              en un diseño intuitivo y un rendimiento optimizado para ofrecer
              una experiencia excepcional y cumplir tus objetivos.
            </p>
            <div className={styles.containerButton}>
              <button
                className={poppins.className}
                onClick={() => handleModal("Personalizado")}
              >
                Ver Más
              </button>
            </div>
          </div>

          <div className={styles.personalizado} ref={cardTwo}>
            <span
              style={{
                background: "#9162c025",
                color: "#c084fd",
              }}
            >
              <TbSettingsCode style={{ fontSize: "15px" }} />
              Eficiencia
            </span>
            <h2 className={poppins.className}>
              Programación y codificación eficientes.
            </h2>
            <p className={poppins.className}>
              Implementamos soluciones de programación optimizadas que priorizan
              la eficiencia y el rendimiento. Nuestro enfoque garantiza código
              limpio, mantenible y escalable para proyectos.
            </p>
            <div className={styles.containerButton}>
              <button
                className={poppins.className}
                onClick={() => handleModal("ProgramacionCodificacion")}
              >
                Ver Más
              </button>
            </div>
          </div>

          <div className={styles.personalizado} ref={cardThree}>
            <span
              style={{
                background: "#3b88e925",
                color: "#4e9eff",
              }}
            >
              <TbDeviceMobileCode style={{ fontSize: "15px" }} />
              Adaptabilidad
            </span>
            <h2 className={poppins.className}>Diseño responsive mobile.</h2>
            <p className={poppins.className}>
              Creamos interfaces que se adaptan perfectamente a cualquier
              dispositivo, garantizando una experiencia de usuario fluida y
              accesible desde smartphones, tablets y más.
            </p>
            <div className={styles.containerButton}>
              <button
                className={poppins.className}
                onClick={() => handleModal("DiseñoResponsiveMovile")}
              >
                Ver Más
              </button>
            </div>
          </div>

          <div className={styles.personalizado} ref={cardFour}>
            <span
              style={{
                background: "#d1772425",
                color: "#ff9a3c",
              }}
            >
              <BsDatabaseCheck style={{ fontSize: "15px" }} />
              Gestión
            </span>
            <h2 className={poppins.className}>
              Integración de base de datos y gestión.
            </h2>
            <p className={poppins.className}>
              Implementamos y gestionamos bases de datos seguras y optimizadas
              para garantizar el acceso eficiente a la información crítica de tu
              negocio.
            </p>
            <div className={styles.containerButton}>
              <button
                className={poppins.className}
                onClick={() => handleModal("BaseDeDatos")}
              >
                Ver Más
              </button>
            </div>
          </div>
        </section>

        <section className={styles.sectionTwo}>
          <div className={styles.cardProyect}>
            <img
              src={cinq_capital.src}
              alt=""
              width={"600px"}
              height={"auto"}
            />
            <div className={styles.containerInfo}>
              <h4 className={poppins.className}>Cinq Capital</h4>
              <p className={poppins.className}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita quas, rerum officiis optio, vero accusantium sequi
                itaque atque similique dignissimos harum corrupti ad doloribus
                labore voluptas. Architecto eveniet animi aspernatur.
              </p>
              <div className={styles.containerService}>
                <span
                  style={{
                    background: "rgba(0, 189, 87, 0.1)",
                    color: "rgb(0, 189, 87)",
                  }}
                >
                  <PiCodeBold style={{ fontSize: "15px" }} />
                  Personalización
                </span>
                <span
                  style={{
                    background: "#9162c025",
                    color: "#c084fd",
                  }}
                >
                  <TbSettingsCode style={{ fontSize: "15px" }} />
                  Eficiencia
                </span>
                <span
                  style={{
                    background: "#3b88e925",
                    color: "#4e9eff",
                  }}
                >
                  <TbDeviceMobileCode style={{ fontSize: "15px" }} />
                  Adaptabilidad
                </span>
              </div>
            </div>
          </div>
          <div className={styles.cardProyect}>
            <img src={fest_club.src} alt="" width={"600px"} height={"auto"} />
            <div className={styles.containerInfo}>
              <h4 className={poppins.className}>Fest Club</h4>
              <p className={poppins.className}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita quas, rerum officiis optio, vero accusantium sequi
                itaque atque similique dignissimos harum corrupti ad doloribus
                labore voluptas. Architecto eveniet animi aspernatur.
              </p>
              <div className={styles.containerService}>
                <span
                  style={{
                    background: "rgba(0, 189, 87, 0.1)",
                    color: "rgb(0, 189, 87)",
                  }}
                >
                  <PiCodeBold style={{ fontSize: "15px" }} />
                  Personalización
                </span>
                <span
                  style={{
                    background: "#9162c025",
                    color: "#c084fd",
                  }}
                >
                  <TbSettingsCode style={{ fontSize: "15px" }} />
                  Eficiencia
                </span>
                <span
                  style={{
                    background: "#3b88e925",
                    color: "#4e9eff",
                  }}
                >
                  <TbDeviceMobileCode style={{ fontSize: "15px" }} />
                  Adaptabilidad
                </span>
                <span
                  style={{
                    background: "#d1772425",
                    color: "#ff9a3c",
                  }}
                >
                  <BsDatabaseCheck style={{ fontSize: "15px" }} />
                  Gestión
                </span>
              </div>
            </div>
          </div>

          <div className={styles.containerButtonSectionTwo}>
            <button className={poppins.className}>
              Ver Todos los Proyectos
            </button>
          </div>
        </section>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        showComponent={showComponent}
      />
    </div>
  );
};

export default DesarrolloWeb;
