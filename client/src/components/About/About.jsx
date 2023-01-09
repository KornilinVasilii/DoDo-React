import s from './About.module.css'
export function About() {
  return (
    <>
      <div className={s.about}>
        <h3 className={s.title}>Додо Пицца</h3>
        <a href="#" className={s.item}>
          О нас
        </a>
        <a href="#" className={s.item}>
          Додо-книга
        </a>
        <a href="#" className={s.item}>
          Блог «Сила ума»{" "}
        </a>
        <a href="#" className={s.item}>
          Додо ИС
        </a>
      </div>
      <div className={s.work}>
        <h3 className={s.title}>Работа</h3>
        <a href="#" className={s.item}>
          В пицерии{" "}
        </a>
        <a href="#" className={s.item}>
          В контакт-центре{" "}
        </a>
      </div>
      <div className={s.partners}>
        <h3 className={s.title}>Партнерам</h3>
        <p className={s.item}>Франшиза</p>
        <p className={s.item}>Инвестиции</p>
        <p className={s.item}>Поставщикам</p>
        <p className={s.item}>Предложить помещение</p>
      </div>
      <div className={s.interesting}>
        <h3 className={s.title}>Это интересно</h3>
        <p className={s.item}> Экскурсии и мастер-классы</p>
        <p className={s.item}>Корпоративные заказы</p>
      </div>
    </>
  );
}
