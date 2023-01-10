import pizza from './smallpizza.png';
import s from './SmallCard.module.css';

export function SmallCard({ text,price }) {
  return (
    <div className={s.small_card}>
      <img src={pizza} alt="pizza" className={s.small_img} />
      <div className={s.small_info}>
        <p className={s.small_text}>{ text }</p>
        <p className={s.small_price}>{ price }</p>
      </div>
    </div>
  );
}
