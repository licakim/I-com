"use client";
import { ChangeEventHandler, useRef, useState } from "react";
import style from "./modal.module.css";
import { useRouter } from "next/navigation";

export default function TweetModal() {
  const [content, setContent] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const onCancel = () => {
    router.back();
  };
  const onSubmit = () => {};
  const onClickButton = () => {};
  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const me = {
    id: "공부핑",
    image: "/profileimg.jpg",
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.head}>
          <div onClick={onCancel} className={style.cancel}>
            <svg
              width={20}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.input}>
            <div className={style.profile}>
              <div className={style.profileImage}>
                <img src={me.image} alt={me.id} />
              </div>
            </div>
            <div className={style.textAreaDiv}>
              <textarea
                className={style.textArea}
                placeholder="What is happening?!"
                value={content}
                onChange={onChangeContent}
              ></textarea>
            </div>
          </div>
          <div className={style.buttons}>
            <input
              type="file"
              name="imageFiles"
              multiple
              hidden
              ref={imageRef}
            />
            <div className={style.buttonsLeft}>
              <div onClick={onClickButton} className={style.insertButtons}>
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <button
              onClick={onSubmit}
              className={style.postButton}
              disabled={!content}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
