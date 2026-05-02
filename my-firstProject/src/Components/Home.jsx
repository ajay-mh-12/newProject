import style from "./Home.module.css";
export default function Home() {
  return (
    <div className={style.homepage}>
      <h3>Loading
      <span className={style.dot}>.</span>
      <span className={style.dot}>.</span>
      <span className={style.dot}>.</span>
      </h3>
    </div>
  );
}
