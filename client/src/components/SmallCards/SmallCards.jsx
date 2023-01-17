import s from "./SmallCards.module.css";

export function SmallCards({ img, title, price }) {
  return (
    <div className={s.small_card}>
      <img src={img} alt="pizza" className={s.small_img} />
      <div className={s.small_info}>
        <p className={s.small_text}>{title}</p>
        <p className={s.small_price}>{price} ₽</p>
      </div>
    </div>
  );
}
