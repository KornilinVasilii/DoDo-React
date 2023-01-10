import s from "./Order.module.css";
import { BasketHeader } from "../../widgets/BasketHeader/BasketHeader";
import { Container } from "../../components/Container/Container";
import { Input } from "../../widgets/Input/Input";
import { BasketFooter } from "../../widgets/BasketFooter/BasketFooter";

export function Order() {
  return (
    <div>
      <BasketHeader />
      <Container>

          <h1 className={s.order_title}>Заказ на доставку</h1>
        <div className={s.order}>
            <div className={s.order_info}>
              <p className={s.info}>Имя</p>
              <p className={s.info}>Номер телефона</p>
              <p className={s.info}>Куда доставить</p>
            </div>
            <div className={s.input}>
              <Input />
              <Input />
              <input className={s.address} type='text'/>
            </div>
          </div>
      </Container>
      <BasketFooter />
    </div>
  );
}
