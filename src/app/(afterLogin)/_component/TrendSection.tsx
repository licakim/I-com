"use client";

import style from "./trandSection.module.css";
import Trend from "./Trend";
import { usePathname } from "next/navigation";

export default function TrendSection() {
  const pathname = usePathname();
  if (pathname === "/explore") return null;
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3 style={{ fontSize: "20px" }}>Trends for you</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
