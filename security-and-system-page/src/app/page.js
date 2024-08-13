"use client";
import SectionOne from "./../Components/sectionone/SectionOne";
import HomePage from "./../Components/homePage/HomePage";
import NavBar from "./../Components/navbar/NavBar";
import styles from "./page.module.css";
import SectionThree from "@/Components/sectionthree/SectionThree";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ContactUs from "@/Components/contactus/ContactUs";
import Footer from "@/Components/footer/Footer";

export default function Home() {
  const bgRef = useRef(null);

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
      <header className={styles.header}>
        <NavBar />
        <HomePage />
        <div className={styles.bg} ref={bgRef}></div>
      </header>
      <main className={styles.main}>
        <SectionOne />
        <SectionThree />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
