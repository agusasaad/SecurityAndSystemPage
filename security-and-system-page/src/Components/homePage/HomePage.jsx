'use client'
import { useEffect, useRef } from 'react'
import styles from './HomePage.module.css'
import { poppins } from '@/Fonts/fonts'
import gsap from 'gsap'
import Link from 'next/link'
import Facebook from './redesSociales/Facebook'
import Instagram from './redesSociales/Instagram'
import Linkedin from './redesSociales/Linkedin'

const HomePage = () => {
  const titleRef1 = useRef(null)
  const titleRef2 = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.set(
      [
        titleRef1.current,
        titleRef2.current,
        subtitleRef.current,
        buttonRef.current,
      ],
      {
        y: 100,
        opacity: 0,
        visibility: 'hidden',
      }
    )

    tl.to(
      [
        titleRef1.current,
        titleRef2.current,
        subtitleRef.current,
        buttonRef.current,
      ],
      {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        ease: 'power3.out',
        duration: 0.8,
        stagger: 0.3,
      }
    )

    tl.fromTo(
      titleRef1.current,
      { width: '0%', borderRight: '1px solid white', opacity: 0 },
      {
        width: '100%',
        opacity: 1,
        duration: 1.2,
        ease: 'power2.inOut',
      },
      '-=1.5'
    )

    // Desaparecer el cursor del primer texto justo después de la animación
    tl.to(
      titleRef1.current,
      {
        borderRight: 'none',
        duration: 0,
      },
      '+=0.1'
    ).fromTo(
      titleRef2.current,
      { width: '0%', border: 'none' },
      {
        width: '100%',
        borderRight: '2px solid white',
        duration: 1.2,
        ease: 'power2.inOut',
      },
      '-=0.3'
    )

    tl.to(titleRef2.current, {
      borderRightColor: 'transparent',
      duration: 0.4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    })

    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      visibility: 'visible',
      ease: 'power3.out',
      duration: 0.8,
    })

    tl.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      visibility: 'visible',
      ease: 'power3.out',
      duration: 0.8,
    })
  }, [])

  return (
    <div className={styles.homePage}>
      <div className={styles.containerTitle}>
        <div className={`${styles.typeWritten} ${poppins.className}`}>
          <h1 ref={titleRef1}>Construyendo</h1>
        </div>
        <div className={`${styles.typeWritten} ${poppins.className}`}>
          <h1 ref={titleRef2}>un Futuro Digital.</h1>
        </div>
        <div className={styles.containerText}>
          <p className={poppins.className} ref={subtitleRef}>
            Impulsamos soluciones que destacan, conectan y generan resultados
            reales.
          </p>
        </div>
      </div>
      <div className={styles.containerButton} ref={buttonRef}>
        <button className={`${poppins.className} ${styles.buttonFolow}`}>
          Solicitar Cotización
        </button>
        <div className={styles.containerSocial}>
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </div>
  )
}

export default HomePage
