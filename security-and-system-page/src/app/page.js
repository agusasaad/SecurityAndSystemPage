"use client";
import SectionOne from "./../Components/sectionone/SectionOne";
import HomePage from "./../Components/homePage/HomePage";
import styles from "./page.module.css";
import SectionThree from "@/Components/sectionthree/SectionThree";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ContactUs from "@/Components/contactus/ContactUs";
import Modal from "@/Components/modal/Modal";
import ButtonOpenModal from "@/Components/modal/buttonModal/ButtonOpenModal";

export default function Home() {
  const bgRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    gsap.set([bgRef.current], {
      opacity: 0,
      scale: 0,
    });
    gsap.to([bgRef.current], {
      opacity: 1,
      scale: 1,
      ease: "power1",
      duration: 0.4,
    });
  }, []);

  return (
    <div className={styles.containerApp}>
      <ButtonOpenModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <header className={styles.header}>
        <HomePage />
        <div className={styles.bg} ref={bgRef}></div>
      </header>
      <main className={styles.main}>
        <SectionOne />
        <SectionThree />
        <ContactUs />
      </main>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
