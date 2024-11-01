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
    <div className={styles.containerApp}>
      <ButtonOpenModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <header className={styles.header}>
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
      </header>
      <main className={styles.main}>
        <SectionOne />
        <SectionThree />
        <ContactUs />
      </main>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}
