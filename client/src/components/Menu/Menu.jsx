import s from './Menu.module.css'

export function Menu() { 
  return (
    <div className={ s.menu }>
          <ul className={s.menu_item}>
            <li><a className={s.menu_link} href="#">Пицца</a></li>
            <li><a className={s.menu_link} href="#">Комбо</a></li>
            <li><a className={s.menu_link} href="#">Закуски</a></li>
            <li><a className={s.menu_link} href="#">Десерты</a></li>
            <li><a className={s.menu_link} href="#">Напитки</a></li>
            <li><a className={s.menu_link} href="#">Другие товары</a></li>
          </ul>
      </div>
  )
}