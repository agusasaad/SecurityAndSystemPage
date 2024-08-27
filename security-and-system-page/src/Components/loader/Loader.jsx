import React from "react";
import "./loader.css";
import logo from "./../../../public/logoSAS.png";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="box">
          <div className="logo">
            <img src={logo.src} alt="" width={25} height={"auto"} />
          </div>
        </div>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </div>
  );
};

export default Loader;
