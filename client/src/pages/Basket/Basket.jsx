import s from '../Basket/Basket.module.css';
// import { Logo } from "../../components/Logo/Logo"
import { BasketHeader } from '../../widgets/BasketHeader/BasketHeader';
import { Container } from '../../components/Container/Container';
import { BasketFooter } from '../../widgets/BasketFooter/BasketFooter';
import { OrderButtonRight } from '../../widgets/OrderButtonRight/OrderButtonRight';
import { OrderButtonLeft } from '../../widgets/OrderButtonLeft/OrderButtonLeft';
import { ContainerOrder } from '../../components/ContainerOrder/ContainerOrder';
import { Link } from "react-router-dom";
import logo from './logo.png'
import svg from './Vector.svg'
import image from './image.png'

export function Basket() {
  return (
    <>
      <BasketHeader />
      <ContainerOrder>
        <div className={s.basket}>
          <h1>Корзина</h1>
            <span className={s.order_line}></span>
          <div className={s.order}>
            <div className={s.order_pic}>
              <img src={logo} alt="" className={s.order_logo} />
              <div className={s.order_info}>
                <p className={s.order_name}>Чиззи чеддер</p>
                <p className={s.order_size}>
                  Средняя 30 см, традиционное тесто
                </p>
              </div>
            </div>
            <div className={s.order_elem}>
              <div className={s.button}>
                <button className={s.order_button}>-</button>
                <span className={s.order_num}>1</span>
                <button className={s.order_button}>+</button>
              </div>
              <p className={s.order_price}>3 799 ₽</p>
              <img src={svg} alt="svg" className={s.order_svg} />
            </div>
          </div>

          {/* <div className={s.order}>
            <div className={s.order_pic}>
              <img src={logo} alt="" className={s.order_logo} />
              <div className={s.order_info}>
                <p className={s.order_name}>Чиззи чеддер</p>
                <p className={s.order_size}>
                  Средняя 30 см, традиционное тесто
                </p>
              </div>
            </div>
            <div className={s.order_elem}>
              <div className={s.button}>
                <button className={s.order_button}>-</button>
                <span className={s.order_num}>1</span>
                <button className={s.order_button}>+</button>
              </div>
              <p className={s.order_price}>3 799 ₽</p>
              <img src={svg} alt="svg" className="order_svg" />
            </div>
          </div> */}

          <p className={s.add}>Добавить к заказу?</p>

          <div className={s.order_cards}>
            <div className={s.order_card}>
              <img src={image} alt="" className={s.order_card_logo} />
              <div className={s.order_card_info}>
                <p className={s.order_card_name}>Молочный коктейль с...</p>
                <span className={s.order_card_price}>175 ₽</span>
              </div>
            </div>

            <div className={s.order_card}>
              <img src={image} alt="" className={s.order_card_logo} />
              <div className={s.order_card_info}>
                <p className={s.order_card_name}>Молочный коктейль с...</p>
                <span className={s.order_card_price}>175 ₽</span>
              </div>
            </div>
          </div>

          <div className={s.order_summ}>
            <span className={s.orger_sum}>Сумма заказа:</span>
            <span className={s.order_sum_span}>4 792 ₽</span>
          </div>
          <div className={s.basket_btn}>
            <Link className={ s.link } to='/home'>
            <OrderButtonLeft text="Вернуться в меню" />
            </Link >
            <Link className={ s.secondLink } to='/order'>
            <OrderButtonRight text="Оформить заказ" />
            </Link>
          </div>
        </div>
      </ContainerOrder>
      <BasketFooter />
    </>
  );
}
