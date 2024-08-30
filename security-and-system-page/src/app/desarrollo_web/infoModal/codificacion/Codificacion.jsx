import styles from "./Codificacion.module.css";
import { poppins } from "@/Fonts/fonts";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TbSettingsCode } from "react-icons/tb";

const Codificacion = () => {
  return (
    <div className={styles.desarrolloWebInfo}>
      <div>
        <span
          className={styles.span}
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
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <IoCheckmarkCircleOutline style={{ color: "#c084fd" }} />
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
          <IoCheckmarkCircleOutline style={{ color: "#c084fd" }} />
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

export default Codificacion;
