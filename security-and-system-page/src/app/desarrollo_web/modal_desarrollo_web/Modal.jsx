"use client";
import DesarrolloWebInfo from "../infoModal/personalizado/DesarrolloWebInfo";
import styles from "./Modal.module.css";
import Codificacion from "../infoModal/codificacion/Codificacion";
import DiseñoResponsive from "../infoModal/diseño/DiseñoResponsive";
import BaseDeDatos from "../infoModal/baseDatos/BaseDeDatos";
import { CgClose } from "react-icons/cg";

const Modal = ({
  showModal,
  setShowModal,
  showComponent,
  setShowComponent,
}) => {
  const renderComponent = () => {
    switch (showComponent) {
      case "Personalizado":
        return <DesarrolloWebInfo />;
      case "ProgramacionCodificacion":
        return <Codificacion />;
      case "DiseñoResponsiveMovile":
        return <DiseñoResponsive />;
      case "BaseDeDatos":
        return <BaseDeDatos />;
      default:
        return null;
    }
  };

  if (!showModal) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.containerButton}>
          <button onClick={() => setShowModal(false)}>
            <CgClose />
          </button>
        </div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Modal;
