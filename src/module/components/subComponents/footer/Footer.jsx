import React from "react";
import styles from "./footer.module.css";

import footerLeftImg from "./../../../assets/footer/footerLeftImg.png";
import footerRightImg from "./../../../assets/footer/footerRightImg.png";
import footerImgMobile from "./../../../assets/footer/footerImgMobile.png";

export default function Footer({ currentPage }) {
  return (
    <div className={`flex-col-center ${styles.Footer}`}>
      {currentPage !== "reward" && (
        <a
          href="https://www.colorbarcosmetics.com"
          target="_blank"
          className={`txt2 ${styles.website}`}
          style={{ textDecoration: "underline" }}
        >
          Back to Website
        </a>
      )}

      <div className={`flex-row-center ${styles.imgs}`}>
        <div className={`flex-row-center ${styles.footerImg}`}>
          <img
            src={footerImgMobile}
            alt="footer-image"
            className="imgTechkilla"
          />
        </div>

        {/*  <div className={`flex-row-center ${styles.footerLeftImg}`}>
          <img
            src={footerLeftImg}
            alt="footer-image"
            className="imgTechkilla"
          />
        </div>

        <div className={`flex-row-center ${styles.footerRightImg}`}>
          <img
            src={footerRightImg}
            alt="footer-image"
            className="imgTechkilla"
          />
        </div> */}
      </div>
    </div>
  );
}
