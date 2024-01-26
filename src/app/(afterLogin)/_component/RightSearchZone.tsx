"use client";
import { usePathname } from "next/navigation";
import style from "./rightSearchZone.module.css";
import { useState } from "react";

export default function RightSearchZone() {
  const pathname = usePathname();
  const onChangeAll = () => {};
  const onChangeFollow = () => {};
  const onChangeAnyWhere = () => {};
  const onChangeNear = () => {};
  //   const [locationState,setLocationState] = useState("any");
  if (pathname === "/explore") return null;
  if (pathname === "/search") {
    return (
      <div>
        <div className={style.searchFilterTitle}>
          <h3>Search filters</h3>
        </div>
        <div className={style.searchFilterBody}>
          <div>
            <label>People</label>
            <div className={style.radio}>
              <div>From anyone</div>
              <div className={style.radioHover}>
                <input
                  type="radio"
                  name="pf"
                  defaultChecked
                  //   checked ={setPeopleState("any")}
                  onChange={onChangeAll}
                />
              </div>
            </div>
            <div className={style.radio}>
              <div>People you follow</div>
              <div className={style.radioHover}>
                <input
                  type="radio"
                  name="pf"
                  defaultChecked
                  //   checked ={setPeopleState("fol")}
                  onChange={onChangeFollow}
                />
              </div>
            </div>
          </div>
          <div>
            <label>Location</label>
            <div className={style.radio}>
              <div>Anywhere</div>
              <div className={style.radioHover}>
                <input
                  type="radio"
                  name="lo"
                  defaultChecked
                  //   checked ={setLocationState("any")}
                  onChange={onChangeAnyWhere}
                />
              </div>
            </div>
            <div className={style.radio}>
              <div>Near you</div>
              <div className={style.radioHover}>
                <input
                  type="radio"
                  name="lo"
                  defaultChecked
                  //   checked ={setLocationState("near")}
                  onChange={onChangeNear}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <form className={style.search}>
        <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </g>
        </svg>
        <input type="search" placeholder="Search" />
      </form>
    </div>
  );
}
