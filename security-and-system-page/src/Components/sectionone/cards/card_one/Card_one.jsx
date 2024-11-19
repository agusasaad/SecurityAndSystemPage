'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { poppins } from '@/Fonts/fonts'
import styles from './Card_one.module.css'
import Checked from '@/svg/Checked'
import DesarrolloWebImg_1 from './../../../../../public/desarrolloWeb/desarrolloWeb_1.png'
import DesarrolloWebImg_2 from './../../../../../public/desarrolloWeb/desarrolloWeb_2.png'
import DesarrolloWebImg_3 from './../../../../../public/desarrolloWeb/desarrolloWeb_3.png'
import DesarrolloWebImg_4 from './../../../../../public/desarrolloWeb/desarrolloWeb_4.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
  { img: DesarrolloWebImg_1, name: 'Fest Club', url: '/web_proyectos/3' },
  { img: DesarrolloWebImg_2, name: 'Cinq Capital', url: '/web_proyectos/1' },
  { img: DesarrolloWebImg_3, name: 'Salon Plaza', url: '/web_proyectos/2' },
  {
    img: DesarrolloWebImg_4,
    name: 'Grupo Zurita',
    url: '/web_proyectos/4',
  },
]

const Card_one = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const tip_oneRef = useRef(null)
  const tip_twoRef = useRef(null)
  const tip_threeRef = useRef(null)
  const button_container = useRef(null)
  const img_oneRef = useRef(null)
  const button_mobile = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top+=200 80%',
        end: 'bottom 20%',
      },
    })

    timeline
      .fromTo(
        [
          titleRef.current,
          descriptionRef.current,
          tip_oneRef.current,
          tip_twoRef.current,
          tip_threeRef.current,
          img_oneRef.current,
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
          stagger: 0.1,
        }
      )
      .fromTo(
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
          delay: 0.6,
        }
      )
  }, [])

  const carouselSettings = {
    autoPlay: true,
    showArrows: true,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: true,
    interval: 4000,
  }

  return (
    <div className={styles.card} ref={containerRef}>
      <div className={`${poppins.className} ${styles.containerText}`}>
        <h3 className={poppins.className} ref={titleRef}>
          Desarrollo Web
        </h3>
        <p className={poppins.className} ref={descriptionRef}>
          Nuestros diseños web están desarrollados para representar la identidad
          de tu marca y mejorar la interacción con tus clientes en línea.
        </p>
        <div className={styles.tips}>
          <p className={poppins.className} ref={tip_oneRef}>
            <Checked />
            Optimiza tu presencia y conversión online.
          </p>
          <p className={poppins.className} ref={tip_twoRef}>
            <Checked />
            Interfaces intuitivas y atractivas.
          </p>
          <p className={poppins.className} ref={tip_threeRef}>
            <Checked />
            Aumenta la interacción con tus clientes.
          </p>
        </div>
        <div className={styles.containerButton}>
          <Link href='/desarrollo_web'>
            <button
              className={`${poppins.className} ${styles.button_black}`}
              ref={button_container}
            >
              Detalles
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.containerImg} ref={img_oneRef}>
        <Carousel {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index} className={styles.img}>
              <Image src={image.img} alt={`Imagen ${index}`} />
              <div className={styles.name_project}>
                <h5>{image.name}</h5>
                <Link href={image.url}>
                  <button>Ver proyecto</button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.containerButton_mobile} ref={button_mobile}>
        <Link href='/desarrollo_web'>
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

export default Card_one
