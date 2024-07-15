import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";

import Cards from "../subComponents/game/cards/Cards";
import CountDown from "../subComponents/game/countDown/CountDown";
import GameResult from "../subComponents/game/gameResultModal/GameResult";
import BgIcons from "../subComponents/bgIcons/BgIcons";
import { backCardsArr } from "../../utils/backCards";

import logo from "./../../assets/header/logo.png";

export default function GamePage({
  name,
  mobileNumber,
  isLaptopView,
  score,
  setScore,
  setCurrentPage,
  setDataArr,
}) {
  const [cards, setCards] = useState([]);
  const [seconds, setSeconds] = useState(90);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gameNo, setGameNo] = useState(0);
  const [startingCountDown, setStartingCountDown] = useState(3);

  // testing user's atempts
  /*   useEffect(() => {
    const localAttemtsArr = JSON.parse(localStorage.getItem("attemptsArr"));
    if (localAttemtsArr) {
      const totalAttempts = localAttemtsArr.length;
      if (totalAttempts >= 3) {
        setCurrentPage("home");
      }
    }
  }, []); */

  // starting count down
  useEffect(() => {
    if (startingCountDown > 0) {
      const timer = setTimeout(() => {
        setStartingCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsGameStarted(true);
    }
  }, [startingCountDown, isGameStarted]);

  // shuffle cards at the time of newgame
  const shuffleCards = () => {
    // console.log("Starting a New Game");
    const shuffledCards = [...backCardsArr, ...backCardsArr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);

    // restart timing
    setSeconds(45);

    // restart score
    setScore(0);
  };

  // this homePage function is rendering in every second because of countDown, that's why write anything you want inside this useEffect
  useEffect(() => {
    setShowResult(false);
    shuffleCards();
  }, [isGameStarted, gameNo]);

  useEffect(() => {
    if (score === 10 || seconds === 0) {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  }, [seconds, score]);

  return (
    <div className={`flex-col-center ${styles.GamePage}`}>
      {/* logo */}
      {isLaptopView && (
        <div className={styles.logoContainer} style={{ visibility: "hidden" }}>
          <img src={logo} alt="logo" className="imgTechkilla" />
        </div>
      )}

      <header className={`flex-col-center ${styles.header}`}>
        {name && (
          <strong className={`txt1 ${styles.name}`}>
            Hello {name.trim().split(" ")[0]},
          </strong>
        )}

        {/* score and time */}
        <div className={`flex-row-center ${styles.scoreTimeContainer}`}>
          <p className={`txt1 ${styles.score}`}>Score: {score}</p>
          <div className={`txt1 flex-row-center ${styles.time}`}>
            {isGameStarted ? (
              <CountDown
                seconds={seconds}
                setSeconds={setSeconds}
                score={score}
              />
            ) : (
              "00:00"
            )}
          </div>
        </div>
      </header>

      {/* cards */}
      <div className={styles.cardsContainer}>
        <Cards cards={cards} setCards={setCards} setScore={setScore} />
      </div>

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

      {/* starting countdown */}
      {startingCountDown > 0 && (
        <div className={`flex-row-center ${styles.startingCountDown}`}>
          <p className={styles.count}>{startingCountDown}</p>
        </div>
      )}

      {/* game result */}
      {showResult && (
        <GameResult
          name={name}
          mobileNumber={mobileNumber}
          score={score}
          seconds={seconds}
          setIsGameStarted={setIsGameStarted}
          setGameNo={setGameNo}
          setShowResult={setShowResult}
          shuffleCards={shuffleCards}
          setCurrentPage={setCurrentPage}
          setDataArr={setDataArr}
        />
      )}

      {isLaptopView && <BgIcons />}
    </div>
  );
}
