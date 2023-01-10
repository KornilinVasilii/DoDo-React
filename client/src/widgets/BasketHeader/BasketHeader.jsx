import s from './BasketHeader.module.css'
import { Logo } from '../../components/Logo/Logo';
import { Container } from '../../components/Container/Container';

export function BasketHeader() { 
  return (
    <div className={s.basketHeader}>
      <Container>
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <div className={s.basket_status}>
          <div className={s.circle}>
            <span className={s.span}>1</span>
            <p className={s.order_status}>Корзина</p>
          </div>
          <div className={s.dashed}></div>
          <div className={s.circle}>
            <span className={s.span}>2</span>
            <p className={s.order_status_two}>Оформление заказа</p>
          </div>
          <div className={s.dashed}></div>
          <div className={s.circle}>
            <span className={s.span}>3</span>
            <p className={s.order_status_three}>Заказ принят</p>
          </div>
        </div>
      </div>
        </header>
        </Container>
      </div>
     
  );
}