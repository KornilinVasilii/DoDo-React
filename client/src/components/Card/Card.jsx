import pizza from "./pizza.png"
import s from "./Card.module.css"
import { Button } from "../Button/Button";

export function Card() { 
  return (
    <div className={s.card}>
      <img src={pizza} alt="foto pizza" />
      <h2 className={s.h3}>Пицца из половинок</h2>
      <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
      <div className={s.order}>
        <p className={s.price}>от 600 ₽</p>
        <Button/>
      </div>
    </div>
  );

}