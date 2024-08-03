import React from "react";
import styles from "./SectionOne.module.css";
import Cards from "./cards/Cards";
import { poppins } from "@/fonts/fonts";

const SectionOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <span className={`${poppins.className} ${styles.subtitle}`}>
          Servicios
        </span>
        <h2>
          Conocé los <span className={styles.span}>servicios</span> que tenemos
          para ofrecerte.
        </h2>
        <p className={poppins.className}>
          Encuentra la solución perfecta con nuestra variedad de servicios.
        </p>
      </div>
      <Cards />
      <div className={styles.containerButton}>
        <button className={poppins.className}>Ver todos los Servicios</button>
      </div>
    </div>
  );
};

export default SectionOne;
