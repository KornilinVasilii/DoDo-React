import s from "./Button.module.css";

export function Button({ text, setModalActive }) {
  if (text === "Выбрать") {
    return (
      <button onClick={setModalActive} className={s.btn}>
        {text}
      </button>
    );
  }
  if (text === "В корзину") {
    return <button className={s.button}>{text}</button>;
  }
  if (text === "Корзина") {
    return <button className={s.button}>{text}</button>;
  }
}
