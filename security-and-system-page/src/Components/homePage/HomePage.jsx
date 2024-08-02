import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.containerTitle}>
        <h1>
          Construyendo un futuro <span className={styles.span}>digital.</span>
        </h1>
      </div>
      <div className={styles.containerText}>
        <p>
          En Security And System creamos páginas web personalizadas que conectan
          con tu audiencia y generan resultados impactantes.
        </p>
      </div>
      <div className={styles.containerButton}>
        <button>
          <span>Contratar Servicios</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
