
import { ContainerOrder } from "../../components/ContainerOrder/ContainerOrder";
import { BasketFooter } from "../../widgets/BasketFooter/BasketFooter";
import { BasketHeader } from "../../widgets/BasketHeader/BasketHeader";
import { OrderStatusBtn } from "../../widgets/OrderStatusBtn/OrderStatusBtn";
import s from './OrderStatus.module.css'
export function OrderStatus() {
  return (
    <>
      <BasketHeader />
      <ContainerOrder>
        <div className={s.order}>
          <p className={s.order_num}>Заказ №62</p>
          <div className={s.status}>
            <h1 className={s.status_value}>Приняли</h1>
            <p className={s.status_value}>24 мин</p>
          </div>
        </div>
        <div className={s.buttons}>
          <OrderStatusBtn color="white" text="Отменить заказ" />
          <OrderStatusBtn color="orange" text="Вернуться в меню" />
        </div>
      </ContainerOrder>
      <BasketFooter />
    </>
  );
}
