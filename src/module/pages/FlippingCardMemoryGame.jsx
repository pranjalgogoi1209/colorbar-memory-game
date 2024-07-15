import React, { useState, useEffect } from "react";
import "./../techkilla.css";

import { HomePage, GamePage, RewardPage, Header, Footer } from "../components";

export default function FlippingCardMemoryGame() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLaptopView, setIsLaptopView] = useState(false);
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    function updateLaptopView() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 991) {
        setIsLaptopView(true);
      } else {
        setIsLaptopView(false);
      }
    }
    updateLaptopView();

    window.addEventListener("resize", updateLaptopView);

    return () => {
      window.removeEventListener("resize", updateLaptopView);
    };
  }, []);

  return (
    <>
      {!isLaptopView && <Header />}

      {currentPage === "home" && (
        <HomePage
          name={name}
          setName={setName}
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          isLaptopView={isLaptopView}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "game" && (
        <GamePage
          name={name}
          mobileNumber={mobileNumber}
          isLaptopView={isLaptopView}
          score={score}
          setScore={setScore}
          setCurrentPage={setCurrentPage}
          setDataArr={setDataArr}
        />
      )}

      {currentPage === "reward" && (
        <RewardPage
          isLaptopView={isLaptopView}
          score={score}
          setCurrentPage={setCurrentPage}
          dataArr={dataArr}
          name={name}
          mobileNumber={mobileNumber}
        />
      )}

      {!isLaptopView && <Footer currentPage={currentPage} />}
    </>
  );
}
