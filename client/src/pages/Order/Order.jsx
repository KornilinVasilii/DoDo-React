import s from "./Order.module.css";
import { BasketHeader } from "../../widgets/BasketHeader/BasketHeader";
import { Container } from "../../components/Container/Container";
import { Input } from "../../widgets/Input/Input";
import { BasketFooter } from "../../widgets/BasketFooter/BasketFooter";

import { OrderButton } from "../../widgets/OrderButtonLeft/OrderButton";
import { OrderButtonRight } from "../../widgets/OrderButtonRight/OrderButtonRight";

export function Order() {
  return (
    <div>
      <BasketHeader />
      <Container>
        <div className={s.order_delivery}>
          <div className={s.order}>
            <h1 className={s.order_title}>Заказ на доставку</h1>
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
              <input className={s.address} type="text" />
            </div>
            <div className={s.order_btn}>
              <OrderButton text="Назад в корзину" />
              <OrderButtonRight text="Оформить заказ  " />
            </div>
          </div>
          <div className={s.details}>
            <p className={s.details_title}>Состав заказа</p>
          </div>
        </div>
      </Container>
      <BasketFooter />
    </div>
  );
}
