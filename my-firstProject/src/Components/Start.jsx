import style from "./Start.module.css";
export default function Start({ onStart }) {
  return (
    <div className={style.start}>
      <h3>Benjamin Artist of Realms</h3>
      <div className={style.startBtn}>
        <button onClick={onStart}>Start Now</button>
      </div>
    </div>
  );
}
