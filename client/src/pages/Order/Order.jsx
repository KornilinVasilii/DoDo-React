import s from "./Order.module.css";
import { BasketHeader } from "../../widgets/BasketHeader/BasketHeader";
import { Container } from "../../components/Container/Container";
import { Input } from "../../widgets/Input/Input";

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
              <Input />
            </div>
            <div className={s.order_info}>
              <p className={s.info}>Номер телефона</p>
              <Input />
            </div>
            <div className={s.order_info}>
              <p className={s.info}>Куда доставить</p>
              <input className={s.address} type="text-aria" />
            </div>
          </div>
          <>
            <div className={s.details}></div>
          </>
        </div>
      </Container>
    </div>
  );
}
