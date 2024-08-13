import React from "react";
import styles from "./Services.module.css";
import { poppins } from "@/Fonts/fonts";
import desarrolloWeb_img from "./../../../public/desarrolloWeb_3.svg";
import Image from "next/image";

const Services = () => {
  const desarrolloWeb = [
    {
      name: "Desarrollo de sitios web personalizados.",
      description:
        "Desarrollamos sitios web a medida para tus necesidades específicas.",
    },
    {
      name: "Programación y codificación eficientes.",
      description:
        "Desarrollamos sitios web a medida para tus necesidades específicas.",
    },
    {
      name: "Diseño responsive mobile.",
      description:
        "Desarrollamos sitios web a medida para tus necesidades específicas.",
    },
  ];
  return (
    <div className={styles.service}>
      <div className={styles.containerServices}>
        <section className={styles.sectionOne}>
          <h2 className={poppins.className}>Servicio de Desarrollo Web</h2>
          <div className={styles.containerCards}>
            {desarrolloWeb.map((element, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={desarrolloWeb_img.src}
                  alt="imagen proyecto"
                  width={350}
                  height={350}
                />
                <div className={styles.title}>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sectionOne}>
          <h2 className={poppins.className}>
            Servicio de Aplicaciones Móviles
          </h2>
          <div className={styles.containerCards}>
            {desarrolloWeb.map((element, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={desarrolloWeb_img.src}
                  alt="imagen proyecto"
                  width={350}
                  height={350}
                />
                <div className={styles.title}>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sectionOne}>
          <h2 className={poppins.className}>Servidores y Soluciones Cloud</h2>
          <div className={styles.containerCards}>
            {desarrolloWeb.map((element, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={desarrolloWeb_img.src}
                  alt="imagen proyecto"
                  width={350}
                  height={350}
                />
                <div className={styles.title}>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sectionOne}>
          <h2 className={poppins.className}>Consultoria IT</h2>
          <div className={styles.containerCards}>
            {desarrolloWeb.map((element, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={desarrolloWeb_img.src}
                  alt="imagen proyecto"
                  width={350}
                  height={350}
                />
                <div className={styles.title}>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
