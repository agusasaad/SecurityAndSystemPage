import React from "react";
import styles from "./SectionOne.module.css";
import Cards from "./cards/Cards";

const SectionOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h2>
          Conocé los <span className={styles.span}>servicios</span> que tenemos
          para ofrecerte.
        </h2>
        <p>Encuentra la solución perfecta con nuestra variedad de servicios.</p>
      </div>
      <Cards />
    </div>
  );
};

export default SectionOne;
