import React, { useState, useEffect } from "react";
import styles from "./gameResult.module.css";
import { FaPlay } from "react-icons/fa";

export default function GameResult({
  score,
  seconds,
  setIsGameStarted,
  setGameNo,
  setShowResult,
  shuffleCards,
  setCurrentPage,
  name,
  mobileNumber,
  setDataArr,
}) {
  const [isAttemptLeft, setIsAttemptLeft] = useState(true);
  const [attemptLeft, setAttemptLeft] = useState(3);

  // Function to update local storage and dataArr state
  const updateAttempts = () => {
    let attemptsArr = JSON.parse(localStorage.getItem("attemptsArr")) || [];

    const totalAttempts = attemptsArr.length;

    if (totalAttempts === 0) {
      attemptsArr.push({ 1: score });
      setDataArr([{ attempt: 1, score: score }]);
      setAttemptLeft(2);
    } else if (totalAttempts === 1) {
      attemptsArr.push({ 2: score });
      setDataArr([
        { attempt: 1, score: attemptsArr[0]["1"] },
        { attempt: 2, score: score },
      ]);
      setAttemptLeft(1);
    } else if (totalAttempts === 2) {
      attemptsArr.push({ 3: score });
      setDataArr([
        { attempt: 1, score: attemptsArr[0]["1"] },
        { attempt: 2, score: attemptsArr[1]["2"] },
        { attempt: 3, score: score },
      ]);
      setAttemptLeft(0);
      setIsAttemptLeft(false);
    }

    localStorage.setItem("attemptsArr", JSON.stringify(attemptsArr));
  };

  useEffect(() => {
    updateAttempts();
  }, [score]);

  return (
    <div className={`flex-row-center ${styles.GameResult}`}>
      <div className={`flex-col-center ${styles.mainContainer}`}>
        {/* game won container */}
        {score === 10 && (
          <div className={`flex-col-center ${styles.gameWonContainer}`}>
            <p className={styles.congrats}>CONGRATS!</p>
            <p className={`txt2`}>
              AVAIL YOUR REWARD LOYALTY POINTS AT CHECKOUT
            </p>
          </div>
        )}

        {/* game lost container */}
        {score !== 10 && (
          <div className={`flex-col-center ${styles.gameLostContainer}`}>
            <p className={`txt2`}>TIME'S UP!</p>
            <p className={styles.score}>
              YOUR SCORE IS <strong>{score}</strong>
            </p>
            <div className={styles.line}></div>

            {/* play again container */}
            <div className={`flex-col-center ${styles.playAgainContainer}`}>
              <p className={`txt2`}>
                You Have <strong>{attemptLeft}</strong> More Attempts
              </p>
              <button
                onClick={() => {
                  shuffleCards();
                  setShowResult(false);
                }}
                className={`flex-row-center ${styles.playAgain} ${
                  !isAttemptLeft && styles.disableBtn
                }`}
                disabled={!isAttemptLeft}
              >
                <FaPlay /> Play Again
              </button>
            </div>
          </div>
        )}

        <p
          to={"/reward"}
          className={`txt2 ${styles.redirect}`}
          onClick={() => setCurrentPage("reward")}
        >
          Click here to avail your reward
        </p>
      </div>
    </div>
  );
}
