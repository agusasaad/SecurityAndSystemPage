"use client";
import styles from "./SectionOne.module.css";
import Cards from "./cards/Cards";
import { poppins } from "@/Fonts/fonts";

const SectionOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h2 className={poppins.className}>
          Conocé los servicios que{" "}
          <span className={styles.span}>tenemos para ofrecerte.</span>
        </h2>
        <p className={poppins.className}>
          Encuentra la solución perfecta con nuestra variedad de servicios.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default SectionOne;
