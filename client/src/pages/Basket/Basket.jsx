import s from "../Basket/Basket.module.css";
import { BasketHeader } from "../../widgets/BasketHeader/BasketHeader";
import { Container } from "../../components/Container/Container";
import { BasketFooter } from "../../widgets/BasketFooter/BasketFooter";
import { OrderButton } from "../../widgets/OrderButtonLeft/OrderButton";
import { OrderButtonRight } from "../../widgets/OrderButtonRight/OrderButtonRight";


export function Basket() {
  return (
    <>
      <BasketHeader />
      <Container>
        <div className={s.basket}>
          <h1>Корзина</h1>
          <p>Добавить к заказу?</p>
          <div className={s.basket_btn}>
            <OrderButton text="Вернуться в меню" />
            <OrderButtonRight text="Оформить заказ" />
          </div>
        </div>
      </Container>
      <BasketFooter />
    </>
  );
}
