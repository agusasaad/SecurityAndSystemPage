import styles from "./DiseñoResponsive.module.css";
import { poppins } from "@/Fonts/fonts";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TbDeviceMobileCode } from "react-icons/tb";

const DiseñoResponsive = () => {
  return (
    <div className={styles.desarrolloWebInfo}>
      <div>
        <span
          className={styles.span}
          style={{
            background: "#3b88e925",
            color: "#4e9eff",
          }}
        >
          <TbDeviceMobileCode style={{ fontSize: "15px" }} />
          Adaptabilidad
        </span>
        <h2 className={poppins.className}>Diseño responsive mobile</h2>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <IoCheckmarkCircleOutline style={{ color: "#4e9eff" }} />
          Entendiendo tu Visión
        </span>
        <p className={poppins.className}>
          Entendemos que cada negocio es diferente, por lo que trabajamos
          estrechamente contigo para entender tu visión y traducirla en un sitio
          web que no solo sea visualmente atractivo, sino también funcional y
          alineado con tus objetivos comerciales.
        </p>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <IoCheckmarkCircleOutline style={{ color: "#4e9eff" }} />
          Diseño Intuitivo y Eficiente
        </span>
        <p className={poppins.className}>
          Nuestro equipo de expertos en diseño y desarrollo se asegura de que
          cada detalle esté perfectamente optimizado para ofrecer una
          experiencia de usuario intuitiva.
        </p>
      </div>
    </div>
  );
};

export default DiseñoResponsive;
