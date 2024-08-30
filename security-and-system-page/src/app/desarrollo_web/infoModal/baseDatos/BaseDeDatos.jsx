import styles from "./BaseDeDatos.module.css";
import { poppins } from "@/Fonts/fonts";
import { BsDatabaseCheck } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const BaseDeDatos = () => {
  return (
    <div className={styles.desarrolloWebInfo}>
      <div>
        <span
          className={styles.span}
          style={{
            background: "#d1772425",
            color: "#ff9a3c",
          }}
        >
          <BsDatabaseCheck style={{ fontSize: "15px" }} />
          Gestión
        </span>
        <h2 className={poppins.className}>
          Integración de Base de Datos y Gestión.
        </h2>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <IoCheckmarkCircleOutline style={{ color: "#ff9a3c" }} />
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
          <IoCheckmarkCircleOutline style={{ color: "#ff9a3c" }} />
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

export default BaseDeDatos;
