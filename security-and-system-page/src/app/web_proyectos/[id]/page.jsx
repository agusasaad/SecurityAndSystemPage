"use client";
import styles from "./page.module.css";
import { desarrolloWeb } from "./Info";
import { useParams, useRouter } from "next/navigation";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { poppins } from "@/Fonts/fonts";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Detail = () => {
  const titleRef = useRef(null);
  const parrafoRef = useRef(null);
  const imgRef = useRef(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    gsap.set([titleRef.current, parrafoRef.current, imgRef.current], {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    });
    gsap.to([titleRef.current, parrafoRef.current, imgRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power1",
      stagger: 0.2,
      visibility: "visible",
    });
  }, []);

  const handleBack = (id) => {
    router.push(`/web_proyectos/${Number(id) - 1}`);
  };

  const handleNext = (id) => {
    router.push(`/web_proyectos/${Number(id) + 1}`);
  };

  const showProject = desarrolloWeb.find((proyecto) => proyecto.id === id);
  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.infoProyecto}>
          <div className={styles.title} ref={titleRef}>
            <h1 className={poppins.className}>{showProject?.title}</h1>
            <span className={poppins.className}>{showProject?.banner}</span>
            <button className={poppins.className}>Visitar web</button>
          </div>
          <div className={styles.parrafo} ref={parrafoRef}>
            <h5 className={poppins.className}>SOBRE EL PROYECTO</h5>
            <p className={poppins.className}>{showProject?.infoText}</p>
          </div>
        </div>
        <div className={styles.containerImg} ref={imgRef}>
          <img src={showProject?.img_3 || showProject?.img} alt="" />
          <img src={showProject?.img_2 || showProject?.img} alt="" />
          <img src={showProject?.img} alt="" />
        </div>
      </div>
      <div className={styles.controlButtons}>
        <button
          className={poppins.className}
          onClick={() => handleBack(id)}
          disabled={Number(id) === 1}
          style={{
            color: Number(id) === 1 ? "rgb(177, 177, 177)" : "white",
            cursor: Number(id) === 1 ? "default" : "pointer",
          }}
        >
          <IoArrowBack /> Atras
        </button>
        <button
          className={poppins.className}
          onClick={() => handleNext(id)}
          disabled={Number(id) === 8}
          style={{
            color: Number(id) === 8 ? "rgb(177, 177, 177)" : "white",
            cursor: Number(id) === 8 ? "default" : "pointer",
          }}
        >
          Siguiente <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Detail;
