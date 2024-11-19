'use client'
import { poppins } from '@/Fonts/fonts'
import styles from './CardOne.module.css'
import web1 from './../../../../public/proyectos/cinq_capital_optimizada.jpg'
import web2 from './../../../../public/proyectos/fest_club_optimizada.jpg'
import web3 from './../../../../public/proyectos/fiestas_optimizada.jpg'
import web4 from './../../../../public/proyectos/grupo_zurita.jpg'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CardOne = () => {
  const titleRef = useRef(null)
  const containerCard = useRef(null)
  const card_one = useRef(null)
  const card_two = useRef(null)
  const card_three = useRef(null)
  const card_four = useRef(null)

  //router
  const router = useRouter()

  const initialCards = [
    { id: 4, title: 'Grupo Zurita', imageSrc: web4.src, ref: card_one },
    { id: 3, title: 'Fest Club', imageSrc: web2.src, ref: card_two },
    { id: 2, title: 'Salon Plaza', imageSrc: web3.src, ref: card_three },
    { id: 1, title: 'Cinq Capital', imageSrc: web1.src, ref: card_four },
  ]

  const [cards, setCards] = useState(initialCards)
  const [isMobile, setIsMobile] = useState(false) // Nuevo estado para móvil

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Detecta si la pantalla es móvil
    }

    // Llama a la función para inicializar al montar
    handleResize()

    // Listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize)

    // Cleanup del listener cuando se desmonta el componente
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
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
      tl.to(card_one.current, {
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
      const { x, y, rotation } = getCardTransform(index, isMobile) // Pasar isMobile
      gsap.to(card.ref.current, {
        rotation,
        x,
        y,
        duration: 0.7,
        ease: 'power1',
      })

      card.ref.current.style.zIndex = index + 1 // Mantiene el z-index correcto
    })
  }

  const getCardTransform = (index, isMobile) => {
    // Transformaciones para escritorio
    const desktopTransformations = [
      { rotation: -45, x: -170, y: 50 }, // Card 1
      { rotation: -30, x: -120, y: 23 }, // Card 2
      { rotation: -15, x: -60, y: 5 }, // Card 3
      { rotation: 0, x: 0, y: 0 }, // Card 4
    ]

    // Transformaciones para móvil
    const mobileTransformations = [
      { rotation: 0, x: 0, y: 0 }, // Card 1
      { rotation: 0, x: 0, y: 50 }, // Card 2
      { rotation: 0, x: 0, y: 100 }, // Card 3
      { rotation: 0, x: 0, y: 150 }, // Card 4
    ]

    // Retorna las transformaciones dependiendo si es móvil o no
    return isMobile
      ? mobileTransformations[index]
      : desktopTransformations[index]
  }

  const handleDetailsClick = (id) => {
    router.push(`/web_proyectos/${id}`) // Redirige a la ruta dinámica con el ID
  }

  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <div className={styles.containerTitle}>
        <h1 className={poppins.className} ref={titleRef}>
          Proyectos Web
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

export default CardOne
