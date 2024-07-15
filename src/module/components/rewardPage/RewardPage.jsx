import React, { useState, useEffect } from "react";
import styles from "./rewardPage.module.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import BgIcons from "../subComponents/bgIcons/BgIcons";

import instagramLogo from "../../assets/reward/instagram.png";
import product_1 from "./../../assets/reward/product01.jpg";
import product_2 from "./../../assets/reward/product02.jpg";
import product_3 from "./../../assets/reward/product03.jpg";
import product_4 from "./../../assets/reward/product04.jpg";
import makeupkit from "./../../assets/home/makeup.png";
import logo from "./../../assets/header/logo.png";
import labelIcon from "./../../assets/reward/label.png";

const products = [
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
  {
    img: product_2,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: false,
  },
  {
    img: product_3,
    name: "Anti Acne & Breakout Facewash",
    price: 650,
    oldPrice: 999,
    offer: 40,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 1250,
    oldPrice: 999,
    offer: 30,
    isNew: false,
  },
  {
    img: product_4,
    name: "Anti Acne & Breakout Facewash",
    price: 950,
    oldPrice: 99,
    offer: 10,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
];

export default function RewardPage({
  isLaptopView,
  score,
  name,
  mobileNumber,
  dataArr,
}) {
  // const [swiper, setSwiper] = useState(null);

  // API call
  const API_BASE_URL = window.origin;

  useEffect(() => {
    console.log(name, mobileNumber, dataArr, "second api is calling");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/rest/V1/webhook/gameapi/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                name: name,
                phone_number: mobileNumber,
                scores: dataArr,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
        // window.alert(error.message);
      }
    };

    if (dataArr.length > 0) {
      fetchData();
    }
  }, []);

  /*   useEffect(() => {
    if (swiper) {
      console.log(swiper);
    }
  }, [swiper]); */

  /*   const handleLeftArrowClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleRightArrowClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  }; */

  const scores = JSON.parse(localStorage.getItem("attemptsArr"));
  const scoreValues = scores.map((obj) => Object.values(obj)[0]);

  const highestScore = Math.max(...scoreValues);
  // console.log(highestScore);

  return (
    <div className={`flex-col-center ${styles.RewardPage}`}>
      {isLaptopView && (
        <div className={styles.logoContainer} style={{ visibility: "hidden" }}>
          <img src={logo} alt="logo" className="imgTechkilla" />
        </div>
      )}

      <div className={`flex-col-center ${styles.reward_page_heading}`}>
        <h1 className="h1Techkilla">Congratulations!</h1>
        <div className={`flex-col-center ${styles.attemptsContainer}`}>
          {scores.map((item, id) => {
            let arr = ["1st", "2nd", "3rd"];
            return (
              <p className="txt2" key={id}>
                {arr[id]} Attempt : {item[id + 1]}
              </p>
            );
          })}
        </div>
        <h3 className="h3Techkilla">
          <span style={{ fontWeight: "500" }}>YOUR BEST SCORE IS </span>{" "}
          <em>
            <strong>{highestScore}</strong>
          </em>
        </h3>
      </div>

      <div className={`flex-col-center ${styles.context_text}`}>
        <p className="txt2">
          You’ve just mastered the Colorbar Cosmetics Memory Card Game! 🥳
        </p>
        <p className="txt2">
          Your 🎉{" "}
          <em>
            <strong>50 loyalty points</strong>
          </em>{" "}
          will be added in your Colorbar account soon. Head over to the account
          page on our website to access your points.
        </p>
        <p className="txt2">
          The excitement doesn’t stop here—
          <em>
            <strong>stay tuned as we reveal the 👑 top 50 winners</strong>
          </em>{" "}
          on Instagram!
        </p>
        <p className="txt2">
          Thanks for playing and keep enjoying the fun with Colorbar Cosmetics!
        </p>
      </div>

      <a
        href="https://www.instagram.com/lovecolorbar"
        target="_blank"
        className={`flex-row-center ${styles.insta_img}`}
      >
        <img src={instagramLogo} alt="instagram" className="imgTechkilla" />
      </a>

      <div className={`flex-row-center ${styles.main_img}`}>
        <img src={makeupkit} alt="makeup" className="imgTechkilla" />
      </div>

      <div className={`flex-col-center ${styles.product_slider}`}>
        {/* <h3>Check Out Our Bestsellers</h3> */}
        {/*  <div className={`flex-row-center ${styles.swiperParent}`}>
          <div
            className={`flex-row-center ${styles.leftArrow}`}
            onClick={handleLeftArrowClick}
          >
            <img src={leftArrow} alt="left arrow" />
          </div>
          <div
            className={`flex-row-center ${styles.rightArrow}`}
            onClick={handleRightArrowClick}
          >
            <img src={rightArrow} alt="right arrow" />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={setSwiper}
            className={`flex-row-center ${styles.swiper}`}
          >
            {products.map((item, idx) => (
              <SwiperSlide
                className={`flex-col-center ${styles.swiperSlide}`}
                key={idx}
              >
                <div className={`flex-row-center ${styles.card_img}`}>
                  {item.isNew && (
                    <span>
                      <img src={labelIcon} alt="label new" />
                    </span>
                  )}
                  <div className={`flex-row-center ${styles.imgContainer}`}>
                    <img src={item.img} alt="makeup-kit" />
                  </div>
                </div>
                <div className={`flex-col-center ${styles.product_card_text}`}>
                  <p>TIMELESS LIFT MI jklsjfkldjsfd</p>
                  <div>
                    <strong>₹799</strong>{" "}
                    <del className={styles.oldPrice}>₹799</del>{" "}
                    <span className={styles.discountTxt}>20%</span>
                  </div>
                  <button className={styles.addCart}>ADD TO CART</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>

      <a
        href="https://www.colorbarcosmetics.com"
        target="_blank"
        style={{ color: "fff" }}
      >
        <button>Home</button>
      </a>

      {isLaptopView && <BgIcons />}
    </div>
  );
}
