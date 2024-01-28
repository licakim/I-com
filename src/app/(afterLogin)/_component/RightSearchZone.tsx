"use client";
import { usePathname } from "next/navigation";
import style from "./rightSearchZone.module.css";
import { useState } from "react";
import SearchForm from "./SearchForm";

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
      <SearchForm />
    </div>
  );
}
