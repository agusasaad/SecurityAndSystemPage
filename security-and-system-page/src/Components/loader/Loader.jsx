'use client'
import './loader.css'
import logo from './../../../public/logoSAS.png'
import Image from 'next/image'
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="box">
          <div className="logo">
            <Image src={logo.src} alt="" width={25} height={25} />
          </div>
        </div>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </div>
  )
}

export default Loader
