import s from './About.module.css'
export function About() {
  return (
    <div className={s.about}>
      <h3 className={s.title}>Додо Пицца</h3>
      <a href='#' className={s.item}>О нас</a>
      <a href='#' className={s.item}>Додо-книга</a>
      <a href='#' className={s.item}>Блог «Сила ума» </a>
      <a href='#' className={s.item}>Додо ИС</a>
    </div>
  );
}
