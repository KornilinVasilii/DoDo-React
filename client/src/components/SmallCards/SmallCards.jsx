import s from "./SmallCards.module.css";

export function SmallCards({ img, title, price, setLook }) {
  return (
    <div className={s.small_card} onClick={() => setLook(true)}>
      <img src={img} alt="pizza" className={s.small_img} />
      <div className={s.small_info}>
        <p className={s.small_text}>{title}</p>
        <p className={s.small_price}>{price} ₽</p>
      </div>
    </div>
  );
}
