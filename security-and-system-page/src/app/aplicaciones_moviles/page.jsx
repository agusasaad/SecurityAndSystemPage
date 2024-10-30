'use client'
import styles from './page.module.css'
import { poppins } from '@/Fonts/fonts'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import ArrowBack from '@/svg/ArrowBack'
import ArrowNext from '@/svg/ArrowNext'
import Modal from '@/modalServices/Modal'
import { dataAplicaciones_moviles } from './dataAplicaciones_moviles'

gsap.registerPlugin(ScrollTrigger)

const AplicacionesMoviles = () => {
  const titleRef = useRef(null)
  const buttonControl = useRef(null)
  const gradientRef = useRef(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemSelected, setItemSelected] = useState(null)

  const openModal = (item) => {
    setIsModalOpen(true)
    setItemSelected(item)
  }

  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      [
        titleRef.current,
        '#card0',
        '#card1',
        '#card2',
        '#card3',
        buttonControl.current,
      ],
      { opacity: 0, y: 100, visibility: 'hidden' },
      {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration: 0.8,
        stagger: 0.1,
        animation: 'power3',
        delay: 0.5,
      }
    ).fromTo(
      gradientRef.current,
      { scale: 0, opacity: 0, visibility: 'hidden' },
      {
        scale: 1,
        opacity: 0.9,
        visibility: 'visible',
        duration: 1,
        ease: 'power3',
      }
    )
  }, [])

  return (
    <div className={styles.service}>
      <div className={styles.gradient} ref={gradientRef}></div>
      <div className={styles.containerServices}>
        <section className={styles.sectionOne}>
          <div className={styles.title} ref={titleRef}>
            <h2 className={poppins.className}>Aplicaciones Móviles</h2>
            <p className={poppins.className}>
              Todos nuestros servicios de Aplicaciones Móviles incluyen
            </p>
          </div>
          {dataAplicaciones_moviles.map((item, index) => (
            <div
              className={styles.personalizado}
              key={index}
              id={`card${index}`}
            >
              <span
                style={{
                  background: `${item.background}`,
                  color: `${item.color}`,
                }}
              >
                {item.icon}
                {item.subtitle}
              </span>
              <h2 className={poppins.className}>{item.title}</h2>
              <p className={poppins.className}>{item.description}</p>
              <div className={styles.containerButton}>
                <button
                  className={poppins.className}
                  onClick={() => openModal(item)}
                >
                  Ver Más
                </button>
              </div>
            </div>
          ))}
        </section>
        <div className={styles.controlButtons} ref={buttonControl}>
          <Link href={'/desarrollo_web'}>
            <button className={poppins.className}>
              <ArrowBack /> Atras
            </button>
          </Link>
          <Link href={'/servidores_soluciones_cloud'}>
            <button className={poppins.className}>
              Siguiente <ArrowNext />
            </button>
          </Link>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {itemSelected && (
          <div className={styles.desarrolloWebInfo}>
            <div>
              <span
                className={styles.span}
                style={{
                  background: `${itemSelected?.background}`,
                  color: `${itemSelected?.color}`,
                }}
              >
                {itemSelected?.icon}
                {itemSelected?.subtitle}
              </span>
              <h2 className={poppins.className}>{itemSelected?.title}</h2>
            </div>
            <div className={styles.parrafo}>
              <span className={poppins.className}>
                {itemSelected?.infoModal.icon_modal}
                {itemSelected?.infoModal.subtitle_one}
              </span>
              <p className={poppins.className}>
                {itemSelected?.infoModal.description_one}
              </p>
            </div>
            <div className={styles.parrafo}>
              <span className={poppins.className}>
                {itemSelected?.infoModal.icon_modal}
                {itemSelected?.infoModal.subtitle_two}
              </span>
              <p className={poppins.className}>
                {itemSelected?.infoModal.description_two}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default AplicacionesMoviles
