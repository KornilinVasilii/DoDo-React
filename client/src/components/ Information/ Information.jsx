import { Social } from '../Social/Social';
import s from './Information.module.css'
import logo from './letter-logo-gray.svg'
export function Information() { 
  return (
    <div className={s.information}>
      <img className={s.footer_logo} src={logo} alt="" />
      <p className={s.year}>© 2021</p>
      <a className={ s.footer_link }  href="#">Правовая информация</a>
      <a className={ s.footer_link } href="#">Калорийность и состав</a>
      <a className={s.footer_link} href="#">Помощь</a>
      <Social/>
    </div>
  );

}