import s from './Menu.module.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <div className={s.menu}>
      <ul className={s.menu_item}>
        <li>
          <Link className={s.menu_link} to="/pizza" >Пицца</Link>
        </li>
        <li>
          <Link className={s.menu_link} to="/combo">Комбо</Link>
        </li>
        <li>
          <Link className={s.menu_link} to="/snacks">Закуски</Link>
        </li>
        <li>
          <Link className={s.menu_link} to="/desserts">Десерты</Link>
        </li>
        <li>
          <Link className={s.menu_link} to="/drinks">Напитки</Link>
        </li>
        <li>
          <Link className={s.menu_link} to="/other">Другие товары</Link>
        </li>
      </ul>

      <Link className={s.link} to="/basket">
        <Button text="Корзина"></Button>
      </Link>
    </div>
  );
}
