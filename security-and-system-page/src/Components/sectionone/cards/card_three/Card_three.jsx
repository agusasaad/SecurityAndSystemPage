'use client'
import { poppins } from '@/Fonts/fonts'
import styles from './Card_three.module.css'
import Checked from '@/svg/Checked'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import foto_SYC_01 from './../../../../../public/servidoresCloud/ELEMENTO_01.png'
import foto_SYC_02 from './../../../../../public/servidoresCloud/ELEMENTO_02.png'
import foto_SYC_03 from './../../../../../public/servidoresCloud/ELEMENTO_03.png'
import foto_SYC_04 from './../../../../../public/servidoresCloud/ELEMENTO_04.png'
import foto_SYC_05 from './../../../../../public/servidoresCloud/ELEMENTO_06.png'
import Link from 'next/link'
import Image from 'next/image'

const Card_three = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const tip_oneRef = useRef(null)
  const tip_twoRef = useRef(null)
  const tip_threeRef = useRef(null)
  const button_container = useRef(null)
  const button_mobile = useRef(null)
  const img_oneRef = useRef(null)
  const img_twoRef = useRef(null)
  const img_threeRef = useRef(null)
  const img_fourRef = useRef(null)
  const img_fiveRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      [
        titleRef.current,
        descriptionRef.current,
        tip_oneRef.current,
        tip_twoRef.current,
        tip_threeRef.current,
        img_oneRef.current,
        img_twoRef.current,
        img_threeRef.current,
        img_fourRef.current,
        img_fiveRef.current,
        button_mobile.current,
      ],
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power1',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=200 80%',
          end: 'bottom 20%',
        },
      }
    )

    // Retrasa la animación del botón con 2 segundos
    gsap.fromTo(
      button_container.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power1',
        delay: 3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=200 80%',
          end: 'bottom 20%',
        },
      }
    )

    gsap.fromTo(
      img_fourRef.current,
      {
        translateY: -15,
      },
      {
        translateY: 0,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      }
    )
  }, [])

  return (
    <div className={styles.card} ref={containerRef}>
      <div className={`${poppins.className} ${styles.containerText}`}>
        <h3 className={poppins.className} ref={titleRef}>
          Servidores y Soluciones Cloud
        </h3>
        <p className={poppins.className} ref={descriptionRef}>
          Implementamos infraestructuras robustas en AWS, Azure y Google Cloud,
          garantizando escalabilidad y seguridad con configuraciones adaptadas a
          cada proyecto.
        </p>
        <div className={styles.tips}>
          <p className={poppins.className} ref={tip_oneRef}>
            <Checked />
            Configuraciones personalizadas.
          </p>
          <p className={poppins.className} ref={tip_twoRef}>
            <Checked />
            Escalabilidad y seguridad garantizadas.
          </p>
          <p className={poppins.className} ref={tip_threeRef}>
            <Checked />
            Gestión experta para alta disponibilidad.
          </p>
        </div>
        <div className={styles.containerButton}>
          <Link href='/servidores_soluciones_cloud'>
            <button
              className={`${poppins.className} ${styles.button_black}`}
              ref={button_container}
            >
              Detalles
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.containerImg}>
        <Image
          width={400}
          height={400}
          src={foto_SYC_01.src}
          alt={'Servidores y Soluciones Cloud'}
          ref={img_oneRef}
        />
        <Image
          width={400}
          height={400}
          src={foto_SYC_02.src}
          alt={'Servidores y Soluciones Cloud'}
          ref={img_twoRef}
        />
        <Image
          width={400}
          height={400}
          src={foto_SYC_03.src}
          alt={'Servidores y Soluciones Cloud'}
          ref={img_threeRef}
        />
        <Image
          width={400}
          height={400}
          src={foto_SYC_04.src}
          alt={'Servidores y Soluciones Cloud'}
          ref={img_fourRef}
        />
        <Image
          width={400}
          height={400}
          src={foto_SYC_05.src}
          alt={'Servidores y Soluciones Cloud'}
          ref={img_fiveRef}
        />
      </div>
      <div className={styles.containerButton_mobile} ref={button_mobile}>
        <Link href='/servidores_soluciones_cloud'>
          <button className={styles.button}>
            <span className={`${poppins.className} ${styles.button_content}`}>
              Ver detalles
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card_three
