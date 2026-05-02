import { useEffect, useRef } from "react";
import cloud1 from "../src/Assists/CLOUD1 1.png";
import cloud2 from "../src/Assists/CLOUD2 MAIN 1.png";
import faded from "../src/Assists/FADED CLOUID 1.png";
import forfround from "../src/Assists/FOREGORUND CLOUD 1.png";
import style from "./Cloud.module.css";
export default function Cloud() {
    const c1 = useRef(null);
    const c2 = useRef(null);
    const cf = useRef(null);
    const cfg = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (c1.current)
        c1.current.style.transform = `translateY(${scrollY * -0.15}px)`;
      if (c2.current)
        c2.current.style.transform = `translateY(${scrollY * -0.25}px)`;
      if (cf.current)
        cf.current.style.transform = `translateY(${scrollY * -0.08}px)`;
      if (cfg.current)
        cfg.current.style.transform = `translateY(${scrollY * 0.1}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={style.cloudWrapper}>
      <img ref={cf} src={faded} alt="movecld" className={style.faded} />
      <img ref={c1} src={cloud1} alt="smallcld" className={style.cloud1} />
      <img ref={c2} src={cloud2} alt="bigCld" className={style.cloud2} />
      <img
        ref={cfg}
        src={forfround}
        alt="movecld"
        className={style.foreground}
      />
    </div>
  );
}
