import { useEffect, useRef } from "react";
import myImage from "../Assists/image-1.png";
import cloud from "../Assists/topCloud.png";
import mountain from "../Assists/mountain.png";
import style from "./page.module.css";
import Cloud from "../Cloud";

export default function PageHead() {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (textRef.current) {
        textRef.current.style.transform = `translate(-50%, calc(-50% + ${scrollY * -0.12}px))`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  return (
    <div className={style.firstImage}>
      <div className={style.cloudeContainer}>
        <img src={cloud} alt="cloudImage" />
        <div>
          <Cloud />
        </div>
        <p ref={textRef} className={style.overlayText}>
          {" "}
          In a world where imagination shapes reality, one artist crafts
          stories, worlds, and heroes. Enter the realm of Benjamin, the Game
          Artist who turns ideas into living worlds.
        </p>
      </div>
      <div className={style.bottomSection}>
        <img src={mountain} alt="mountain" className={style.mountain} />
        {/* <img src={myImage} alt="character" className={style.character} /> */}
      </div>
    </div>
  );
}
