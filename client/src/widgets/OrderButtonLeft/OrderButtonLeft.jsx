import s from './OrderButton.module.css'
import prev from "./Vector 1.svg";
export function OrderButtonLeft({ text }) { 
  return (
    <>
      <button className={s.oreder_button}>
        <img className={ s.prev } src={prev} alt="" />
        <p className={ s.btn_title }>{ text }</p>
      </button>
    </>
  );
}