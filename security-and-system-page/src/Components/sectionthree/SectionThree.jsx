import React from "react";
import styles from "./SectionThree.module.css";
import web1 from "./../../../public/imagesWEB/WEB1.webp";
import web2 from "./../../../public/imagesWEB/WEB2.webp";
import web3 from "./../../../public/imagesWEB/WEB3.webp";
import Image from "next/image";
import { poppins } from "@/Fonts/fonts";
const SectionThree = () => {
  const imageCarrucel = [web1, web2, web3];

  const copyImageCarrucel = [
    ...imageCarrucel,
    ...imageCarrucel,
    ...imageCarrucel,
    ...imageCarrucel,
    ...imageCarrucel,
  ];

  return (
    <div className={styles.containerSectionThree}>
      <div className={styles.containerCarrucel}>
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={450}
            height={"auto"}
            alt="imagen proyecto"
          ></Image>
        ))}
      </div>
      <div
        className={styles.containerCarrucel}
        style={{ flexDirection: "column-reverse" }}
      >
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={450}
            height={"auto"}
            alt="imagen proyecto"
          ></Image>
        ))}
      </div>
      <div className={styles.containerCarrucel}>
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={450}
            height={"auto"}
            alt="imagen proyecto"
          ></Image>
        ))}
      </div>
      <div className={styles.containerText}>
        <div className={styles.title}>
          <h2 className={poppins.className}>Nuestros Proyectos</h2>
          <p className={poppins.className}>
            Explora nuestros proyectos realizados y descubre cómo hemos ayudado
            a nuestros clientes a alcanzar sus objetivos en línea.
          </p>
          <button className={poppins.className}>Ver Proyectos</button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
