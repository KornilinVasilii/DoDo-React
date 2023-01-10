import { FooterPhon } from '../../components/FooterPhon/FooterPhon';
import s from './BasketFooter.module.css';
import { Container } from '../../components/Container/Container';
import logo from './Logo.png'

export function BasketFooter() {
  return (
    <div className={s.section}>
      <Container>
        <FooterPhon />
        <div className={s.container}></div>
        <div className={s.footer}>
          <div className={s.footer_logo}>
            <img className={s.logo} src={logo} alt="logo DoDo" />
            <small className={s.copyright}>© 2021</small>
          </div>
          <div className={s.links}>
            <a href="#" className={s.info}>
              Правовая информация
            </a>
            <a href="#" className={s.call}>
              Калорийность и состав
            </a>
            <a href="#" className={s.help}>
              Помощь
            </a>
          </div>
          <a href="#" className={s.feedback}>
            feedback@dodopizza.com
          </a>
        </div>
      </Container>
    </div>
  );
}
