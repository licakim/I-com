"use client";
import style from "./tab.module.css";
import { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const onClickFol = () => {
    setTab("fol");
  };
  const onClickRec = () => {
    setTab("rec");
  };
  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div
          className={style.forYou}
          style={{ color: tab === "rec" ? "#0F1419" : "#536471" }}
          onClick={onClickRec}
        >
          For you
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div
          className={style.following}
          style={{ color: tab === "fol" ? "#0F1419" : "#536471" }}
          onClick={onClickFol}
        >
          Following
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
