'use client'
import { poppins } from '@/Fonts/fonts'
import styles from './CardTwo.module.css'
import web1 from './../../../../public/proyectos/net_expertos_optimizada.jpg'
import web2 from './../../../../public/proyectos/tu_voz_suma_optimizada.jpg'
import web3 from './../../../../public/proyectos/dni_optimizado.jpg'
import web4 from './../../../../public/proyectos/que_dj_optimizada.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CardTwo = () => {
  const titleRef = useRef(null)
  const containerCard = useRef(null)
  const card_one = useRef(null)
  const card_two = useRef(null)
  const card_three = useRef(null)
  const card_four = useRef(null)

  const router = useRouter()

  const initialCards = [
    { id: 8, title: 'Que DJ', imageSrc: web4.src, ref: card_one },
    { id: 7, title: 'DNI Logistica', imageSrc: web3.src, ref: card_two },
    { id: 6, title: 'Tu voz Suma', imageSrc: web2.src, ref: card_three },
    { id: 5, title: 'Net Expertos', imageSrc: web1.src, ref: card_four },
  ]

  const [cards, setCards] = useState(initialCards)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    if (window.innerWidth > 768) {
      tl.fromTo(
        titleRef.current,
        { width: '0%', border: 'none' },
        {
          width: '100%',
          borderRight: '2px solid white',
          duration: 1.2,
          ease: 'power2.inOut',
        },
        '<'
      )
      tl.to(
        titleRef.current,
        {
          borderRightColor: 'white',
          duration: 0.4,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
        '<'
      )
      tl.fromTo(
        [
          containerCard.current,
          card_one.current,
          card_two.current,
          card_three.current,
          card_four.current,
        ],
        { opacity: 0, y: 100, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        }
      )
      tl.to(card_one.current, {
        rotation: -45,
        x: -170,
        y: 50,
        boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
        duration: 0.5,
        ease: 'power3.out',
      })
        .to(
          card_two.current,
          {
            rotation: -30,
            x: -120,
            y: 23,
            boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<'
        )
        .to(
          card_three.current,
          {
            rotation: -15,
            x: -60,
            y: 5,
            boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<'
        )
        .to(
          card_four.current,
          {
            rotation: 0,
            x: 0,
            y: 0,
            boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<'
        )
    } else {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerCard.current,
            start: 'top 90%',
            end: 'bottom top',
          },
        })
        .fromTo(
          titleRef.current,
          { width: '0%', border: 'none' },
          {
            width: '100%',
            borderRight: '2px solid white',
            duration: 1.2,
            ease: 'power2.inOut',
          }
        )
        .to(
          titleRef.current,
          {
            borderRightColor: 'white',
            duration: 0.4,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
          },
          '<'
        )
        .fromTo(
          containerCard.current,
          { opacity: 0, y: 100, visibility: 'hidden' },
          {
            opacity: 1,
            y: 0,
            visibility: 'visible',
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.5,
          }
        )
        .to(card_one.current, {
          rotation: 0,
          x: 0,
          y: 0,
          boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
          duration: 0.5,
          ease: 'power3.out',
        })
        .to(
          card_two.current,
          {
            rotation: 0,
            x: 0,
            y: 50,
            boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<'
        )
        .to(
          card_three.current,
          {
            rotation: 0,
            x: 0,
            y: 100,
            boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<'
        )
        .to(
          card_four.current,
          {
            rotation: 0,
            x: 0,
            y: 150,
            boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.808)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<'
        )
    }
  }, [])

  const moveCardToBack = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId)
    const reorderedCards = [
      ...cards.filter((card) => card.id !== cardId),
      selectedCard,
    ]
    setCards(reorderedCards)

    reorderedCards.forEach((card, index) => {
      const { x, y, rotation } = getCardTransform(index, isMobile)
      gsap.to(card.ref.current, {
        rotation,
        x,
        y,
        duration: 0.7,
        ease: 'power1',
      })

      card.ref.current.style.zIndex = index + 1
    })
  }

  const getCardTransform = (index, isMobile) => {
    const desktopTransformations = [
      { rotation: -45, x: -170, y: 50 },
      { rotation: -30, x: -120, y: 23 },
      { rotation: -15, x: -60, y: 5 },
      { rotation: 0, x: 0, y: 0 },
    ]

    const mobileTransformations = [
      { rotation: 0, x: 0, y: 0 },
      { rotation: 0, x: 0, y: 50 },
      { rotation: 0, x: 0, y: 100 },
      { rotation: 0, x: 0, y: 150 },
    ]

    return isMobile
      ? mobileTransformations[index]
      : desktopTransformations[index]
  }

  const handleDetailsClick = (id) => {
    router.push(`/web_proyectos/${id}`)
  }

  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <div className={styles.containerTitle}>
        <h1 className={poppins.className} ref={titleRef}>
          Proyectos Mobile
        </h1>
      </div>
      <div className={styles.containerCards} ref={containerCard}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={styles.card}
            ref={card.ref}
            onClick={() => moveCardToBack(card.id)}
          >
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={400}
              height={400}
            />
            <div
              className={styles.title}
              onClick={() => handleDetailsClick(card.id)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardTwo
