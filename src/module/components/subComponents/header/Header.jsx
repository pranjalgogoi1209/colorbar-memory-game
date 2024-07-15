import React from "react";
import styles from "./header.module.css";
import headerLeftImg from "./../../../assets/header/headerLeftImg.png";
import headerRightImg from "./../../../assets/header/headerRightImg.png";
import logo from "./../../../assets/header/logo.png";
import headerImgMobile from "./../../../assets/header/headerImgMobile.png";

export default function Header() {
  return (
    <div className={`flex-col-center ${styles.Header}`}>
      <div className={`flex-row-center ${styles.headerImgs}`}>
        <div className={`flex-row-center ${styles.headerImg}`}>
          <img
            src={headerImgMobile}
            alt="header-image"
            className="imgTechkilla"
          />
        </div>
        {/*  <div className={styles.headerLeftImg}>
          <img
            src={headerLeftImg}
            alt="header-left-img"
            className="imgTechkilla"
          />
        </div> */}
        {/* <div className={styles.headerRightImg}>
          <img
            src={headerRightImg}
            alt="header-right-img"
            className="imgTechkilla"
          />
        </div> */}
      </div>
      {/* <div className={`flex-row-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo" className="imgTechkilla" />
      </div> */}
    </div>
  );
}
