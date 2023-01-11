import { H2 } from '../H2/H2';
import s from './Popular.module.css'
import  pizza  from './smallpizza.png'
 export function Popular({ text, price }) { 
  return (
    <div className={ s.popular }>
        <H2 text="Новое и популярное"/>
      <div className={s.small_card}>
        <img src={pizza} alt="pizza" className={s.small_img} />
        <div className={s.small_info}>
          <p className={s.small_text}>{text}</p>
          <p className={s.small_price}>{price}</p>
        </div>
      </div>
    </div>
  );
}