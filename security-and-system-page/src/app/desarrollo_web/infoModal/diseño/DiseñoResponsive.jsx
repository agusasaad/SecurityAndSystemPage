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
          <IoCheckmarkCircleOutline
            style={{ color: "#4e9eff" }}
            className={styles.icon}
          />
          Interfaz Adaptativa para Todos los Dispositivos
        </span>
        <p className={poppins.className}>
          Nos especializamos en la creación de interfaces que se adaptan
          perfectamente a cualquier dispositivo, garantizando una experiencia de
          usuario fluida y consistente sin importar si se accede desde un
          smartphone, tablet, o cualquier otro dispositivo móvil.
        </p>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <IoCheckmarkCircleOutline
            style={{ color: "#4e9eff" }}
            className={styles.icon}
          />
          Experiencia Óptima en Cualquier Dispositivo y Lugar
        </span>
        <p className={poppins.className}>
          Nos aseguramos de que su producto ofrezca la mejor experiencia
          posible, independientemente del dispositivo utilizado, permitiendo a
          los usuarios interactuar con su contenido de manera efectiva en
          cualquier lugar y en cualquier momento.
        </p>
      </div>
    </div>
  );
};

export default DiseñoResponsive;
