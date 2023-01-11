import s from "./OrderButtonRight.module.css";
import  next  from './Next.svg'
export function OrderButtonRight({ text }) {
  return (
    <>
      <button className={s.oreder_button}>
        <p className={s.btn_title}>{ text } </p>
        <img src={ next } alt="" />
      </button>
    </>
  );
}
