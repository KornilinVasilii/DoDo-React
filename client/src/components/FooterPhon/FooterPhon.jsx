import s from './FooterPhon.module.css'

export function FooterPhon() {
  return (
    <>
      <a href="tel:88003020060" className={s.tell}>
        8-800-302-00-60
      </a>
      <p className={s.call}> Звонок бесплатный</p>
    </>
  );
}