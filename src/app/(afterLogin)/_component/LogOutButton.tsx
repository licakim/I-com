"use client";
import style from "./logoutbutton.module.css";

export default function LogOutButton() {
  const me = {
    id: "hyunjki",
    image: "/profileimg.jpg",
    nickname: "코딩핑",
  };
  const onLogout = () => {};
  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
