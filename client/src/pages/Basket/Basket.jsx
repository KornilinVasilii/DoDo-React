import s from '../Basket/Basket.module.css';
import { Logo } from "../../components/Logo/Logo"

export function Basket() {
  return (
    <>
      <header className={s.header}>
        <div className={s.contaner}>
          <Logo />
          <div className={s.basket_status}>
            <div className={s.circle}>
              <span className={s.span}>1</span>
            </div>
            <div className={s.dashed}>-----</div>
            <div className={s.circle}>
              <span className={s.span}>2</span>
            </div>
            <div className={s.dashed}></div>
            <div className={s.circle}>
              <span className={s.span}>3</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}