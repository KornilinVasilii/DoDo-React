import pizza from "./pizza.png"
import s from "./Card.module.css"
import { Button } from "../Button/Button";

export function Card({ img,title, description,price }) { 
  
  return (
    <div className={s.card}>
      <img src={img} alt="foto pizza" />
      <h3 className={s.h3}>{title}</h3>
      <p className={ s.p}>{description}</p>
      <div className={s.order}>
        <p className={s.price}>{price} ₽</p>
        <Button text="Собрать" />
      </div>
    </div>
  );
}