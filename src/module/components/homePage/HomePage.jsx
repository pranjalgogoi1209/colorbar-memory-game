import React, { useEffect, useState } from "react";
import styles from "./homePage.module.css";

import Popup from "../subComponents/home/popup/Popup";

import productImage from "./../../assets/home/makeup.png";
import BgIcons from "./../subComponents/bgIcons/BgIcons";
import logo from "./../../assets/header/logo.png";
import leftStar from "./../../assets/home/leftStar.png";
import rightStar from "./../../assets/home/rightStar.png";

export default function HomePage({
  name,
  setName,
  mobileNumber,
  setMobileNumber,
  isLaptopView,
  setCurrentPage,
}) {
  const [isAttempted, setIsAttempted] = useState(false);
  const [isNumberError, setIsNumberError] = useState(false);

  // testing user's atempts
  /*  useEffect(() => {
    const localAttemtsArr = JSON.parse(localStorage.getItem("attemptsArr"));
    if (localAttemtsArr) {
      const totalAttempts = localAttemtsArr.length;
      if (totalAttempts >= 1) {
        setIsNoMoreAttempt(true);
      }
    }
  }, []); */

  // console.log(typeof name, typeof mobileNumber);

  useEffect(() => {
    const data = window.localStorage.getItem("attemptsArr");

    // console.log(data);

    if (data) {
      window.localStorage.removeItem("attemptsArr");
    } else {
      // console.log("data not found");
    }
  }, []);

  const API_BASE_URL = window.origin;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (mobileNumber.length < 10) {
      setIsNumberError(true);
    } else {
      setIsNumberError(false);
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
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        if (data.atempted == "1") {
          setCurrentPage("home");
          setIsAttempted(true);
        } else {
          setIsAttempted(false);
          setCurrentPage("game");
        }
      } catch (error) {
        console.error(error);
        // setCurrentPage("game");
        // setIsAttempted(true);
      }
    }
  };

  // window.origin + endpoint

  const handleNameChange = (event) => {
    const newValue = event.target.value.replace(/[^a-zA-Z\s]/g, "");
    setName(newValue);
  };
  console.log(name, mobileNumber);
  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      {/* {isAttempted && (
        <Popup setIsAttempted={setIsAttempted} isNumberError={isNumberError} />
      )} */}

      {/*  {isLaptopView && (
        <div
          className={`flex-row-center ${styles.logoContainer}`}
          style={{ visibility: "hidden" }}
        >
          <img src={logo} alt="logo" className="imgTechkilla" />
        </div>
      )} */}

      <header className={`flex-col-center ${styles.header}`}>
        <h1 className="h1Techkilla">Flip, Match, and Win!</h1>

        <div className={`flex-col-center ${styles.content_text}`}>
          <p className={`txt2 ${styles.txt}`}>
            Test your memory and have fun with our card-matching game. Every
            player will earn 🎉{" "}
            <em>
              <strong>50 loyalty points,</strong>
            </em>{" "}
            and the 👑{" "}
            <em>
              <strong>
                top 50 winners will receive an exclusive makeup kit.
              </strong>
            </em>{" "}
          </p>
          <p className="txt2">Enjoy the game and good luck! 🥳</p>
        </div>
      </header>

      {/* laptop image */}
      {isLaptopView && (
        <div className={styles.product_image}>
          <img
            src={productImage}
            alt="product-image"
            className="imgTechkilla"
          />
        </div>
      )}

      <div className={`flex-col-center ${styles.playFormContainer}`}>
        {/* how to play */}
        <div className={`flex-col-center ${styles.how_to_play_wrapper}`}>
          <div className={`flex-row-center ${styles.titleContainer}`}>
            <div className={`flex-row-center ${styles.imgContainer}`}>
              <img src={leftStar} alt="leftStar" className="imgTechkilla" />
            </div>
            <h2 className="h2Techkilla">HOW TO PLAY?</h2>
            <div className={`flex-row-center ${styles.imgContainer}`}>
              <img src={rightStar} alt="rightStar" className="imgTechkilla" />
            </div>
          </div>
          <ul className="flex-col-center">
            <li className={`txt2 liTechkilla`}>
              The cards are placed face down, with each card having a matching
              pair.
            </li>
            <li className={`txt2 liTechkilla`}>Select 2 cards at a time.</li>
            <li className={`txt2 liTechkilla`}>
              You will get <strong>3 attempts of 45 seconds</strong> each to
              finish the game.
            </li>
            <li className={`txt2 liTechkilla`}>
              Match all the cards before the timer runs out!
            </li>
          </ul>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className={`flex-col-center ${styles.user_form}`}
        >
          <div className={`flex-col-center ${styles.input_field}`}>
            <label htmlFor="name" className="txt2">
              Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Rysha"
              value={name}
              onChange={handleNameChange}
              /*  onChange={(event) => {
                setName(event.target.value);
              }} */
              className="txt2"
              required
            />
          </div>

          <div className={`flex-col-center ${styles.input_field}`}>
            <label htmlFor="mobile_number" className="txt2">
              Mobile Number*
            </label>
            <input
              type="number"
              name="mobileNumber"
              id="mobile_number"
              placeholder="98765-xxxxx"
              value={mobileNumber}
              onChange={(event) => {
                if (event.target.value.length <= 10) {
                  setMobileNumber(event.target.value);
                }
              }}
              className="txt2"
              required
              maxLength={10}
            />
            {isNumberError && (
              <p className="smallTxt" style={{ color: "#ff0000" }}>
                Please input a valid number
              </p>
            )}
            {!isNumberError && isAttempted && (
              <p className="smallTxt" style={{ color: "#ff0000" }}>
                You've exhausted all your attempts
              </p>
            )}
          </div>
          {/*  ${isNoMoreAttempt && styles.disableBtn} */}
          <button
            type="submit"
            className={`txt2`}
            // disabled={isNoMoreAttempt}
          >
            Start Game
          </button>
        </form>
      </div>

      {/* mobile image */}
      {!isLaptopView && (
        <div className={styles.product_image}>
          <img
            src={productImage}
            alt="product-image"
            className="imgTechkilla"
          />
        </div>
      )}

      {isLaptopView && (
        <a
          href="https://www.colorbarcosmetics.com"
          target="_blank"
          className={`txt2 ${styles.link}`}
          style={{ textDecoration: "underline" }}
        >
          Back to Website
        </a>
      )}

      {isLaptopView && <BgIcons />}
    </div>
  );
}
