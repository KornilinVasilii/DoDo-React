import { RadioBtn } from '../../widgets/RadioBtn/RadioBtn';
import { RadioButton } from '../../widgets/RadioButton/RadioButton';
import s from './ModalWindowOne.module.css'
import img from './moduleImage.png'
import close from './close.svg'
import elipse from './Ellipse.svg'
export function ModalWindowOne() { 
  return (
    <div className={s.win}>
      <div className={s.modalWindow}>
        <div className={s.module_img}>
          <img src={img} className={s.img} alt="" />
          <img src={elipse} className={ s.ellipse } ></img>
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
      <input className={ s.close } type="image" src={ close } />
      </div>
    </div>
  );
}