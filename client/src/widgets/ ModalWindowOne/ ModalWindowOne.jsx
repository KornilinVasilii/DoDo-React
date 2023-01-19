import { RadioBtn } from '../RadioBtn/RadioBtn';
import { RadioButton } from '../RadioButton/RadioButton';
import s from './ModalWindowOne.module.css';
import img from './moduleImage.png';
import close from './close.svg';
import elipse from './Ellipse.svg';
export function ModalWindowOne({ active, handlerClick, setModalActive }) {
  return (
    <div
      className={active ? s.win : s.active}
      onClick={() => setModalActive(false)}
    >
      <div className={s.modalWindow} onClick={(e) => e.stopPropagation()}>
        <div className={s.module_img}>
          <img src={img} className={s.img} alt="" />
          <img src={elipse} className={s.ellipse}></img>
        </div>
        <div className={s.toping}>
          <h2 className={s.pizza_name}>Чиззи чеддер</h2>
          <p className={s.obout_pizza}>30 см, традиционное тесто, 480 г</p>
          <RadioButton />
          <RadioBtn />
          <div className={s.topings}>
            <p>Добавить в пиццу</p>
            <div className={s.top}>
              <input type="checkbox" />
              <p>Сырный бортик</p>
              <p>599 ₽</p>
            </div>
          </div>
        </div>
        <input
          onClick={() => setModalActive(false)}
          className={s.close}
          type="image"
          src={close}
        />
      </div>
    </div>
  );
}
