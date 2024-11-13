'use client'
import SectionOne from './../Components/sectionone/SectionOne'
import HomePage from './../Components/homePage/HomePage'
import styles from './page.module.css'
import SectionThree from '@/Components/sectionthree/SectionThree'
import { useState } from 'react'
import ContactUs from '@/Components/contactus/ContactUs'
import Modal from '@/Components/modal/Modal'
import ButtonOpenModal from '@/Components/modal/buttonModal/ButtonOpenModal'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <main className={styles.main}>
        <ButtonOpenModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
        <div className={styles.inicio}>
          <HomePage />
          <div className={styles.bg}>
            <video
              src='/video.mp4'
              loop
              preload='auto'
              muted
              autoPlay
              playsInline
            ></video>
          </div>
        </div>
        <div className={styles.secciones}>
          <SectionOne />
          <SectionThree />
          <ContactUs />
        </div>
        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      </main>
    </>
  )
}
