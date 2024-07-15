import React from "react";
import styles from "./bgIcons.module.css";
import headerLeftImg from "./../../../assets/header/headerLeftImg.png";
import headerRightImg from "./../../../assets/header/headerRightImg.png";
import footerLeftImg from "./../../../assets/footer/footerLeftImg.png";
import footerRightImg from "./../../../assets/footer/footerRightImg.png";
import headerImgLaptop from "./../../../assets/header/headerImgLaptop.png";
import footerImgLaptop from "./../../../assets/footer/footerImgLaptop.png";

export default function BgIcons() {
  return (
    <div className={`flex-col-center ${styles.BgIcons}`}>
      <div className={`flex-row-center ${styles.topContainer}`}>
        {/*  <div
          className={`flex-row-center ${styles.imgContainer} ${styles.topLeftImg}`}
        >
          <img
            src={headerLeftImg}
            alt="header-left-img"
            className="imgTechkilla"
          />
        </div>
        <div
          className={`flex-row-center ${styles.imgContainer} ${styles.topRightImg}`}
        >
          <img
            src={headerRightImg}
            alt="header-left-img"
            className="imgTechkilla"
          />
        </div>{" "} */}
        <div className={`flex-row-center ${styles.imgContainer}`}>
          <img src={headerImgLaptop} alt="headerImg" className="imgTechkilla" />
        </div>
      </div>

      <div className={`flex-row-center ${styles.bottomContainer}`}>
        {/* <div
          className={`flex-row-center ${styles.imgContainer} ${styles.bottomLeftImg}`}
        >
          <img
            src={footerLeftImg}
            alt="footer-left-img"
            className="imgTechkilla"
          />
        </div>

        <div
          className={`flex-row-center ${styles.imgContainer} ${styles.bottomRightImg}`}
        >
          <img
            src={footerRightImg}
            alt="footer-right-img"
            className="imgTechkilla"
          />
        </div> */}
        <div className={`flex-row-center ${styles.imgContainer}`}>
          <img src={footerImgLaptop} alt="headerImg" className="imgTechkilla" />
        </div>
      </div>
    </div>
  );
}
