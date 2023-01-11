import s from '../Basket/Basket.module.css';
import { Logo } from "../../components/Logo/Logo"
import { BasketHeader } from '../../widgets/BasketHeader/BasketHeader';
import { Container } from '../../components/Container/Container';
import { BasketFooter } from '../../widgets/BasketFooter/BasketFooter';
import { OrderButtonRight } from '../../widgets/OrderButtonRight/OrderButtonRight'
import { OrderButtonLeft } from '../../widgets/OrderButtonLeft/OrderButtonLeft'
import { ContainerOrder } from '../../components/ContainerOrder/ContainerOrder'
export function Basket() {
  return (
    <>
      <BasketHeader />
      <Container>
        <ContainerOrder>
        <div className={s.basket}>
          <h1>Корзина</h1>
          <p>Добавить к заказу?</p>
          <div className={s.basket_btn}>
            <OrderButtonLeft text="Вернуться в меню" />
            <OrderButtonRight text="Оформить заказ" />
          </div>
        </div>
        </ContainerOrder>
      </Container>
      <BasketFooter />
    </>
  );
}
