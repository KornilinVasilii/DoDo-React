import s from './Order.module.css'
import { BasketHeader } from "../../widgets/BasketHeader/BasketHeader";
import { Container } from '../../components/Container/Container';

export function Order() { 

  return (
    <div>
      <BasketHeader />
      <Container>
        <div className={s.order}>
          <h1 className={s.order_title}>Заказ на доставку</h1>
          <div className={s.contacts}>
            <div className={s.order_info}>
              <p className={s.info}>Имя</p>
              <input type="text" name="" id="" className={s.input_name} />
            </div>
            <div className={s.order_info}>
              <p className={s.info}>Номер телефона</p>
              <input type="text" className={s.input_phone} />
            </div>
            <div className={s.order_info}>
              <p className={s.info}>Куда доставить</p>
              <input type="text-aria" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}