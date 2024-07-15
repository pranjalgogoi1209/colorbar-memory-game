import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

import styles from "./popup.module.css";

export default function Popup({ setIsAttempted }) {
  return (
    <div className={`flex-row-center ${styles.GameResult}`}>
      <div className={`flex-col-center ${styles.mainContainer}`}>
        <p className="txt2">You have already played</p>

        <div
          onClick={() => setIsAttempted(false)}
          className={`flex-row-center ${styles.closeBtn}`}
        >
          <IoCloseSharp />
        </div>
      </div>
    </div>
  );
}
