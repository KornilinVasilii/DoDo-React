import s from './Work.module.css'
export function Work() { 
  return (
    <div className={s.work}>
      <h3 className={s.title}>Работа</h3>
      <a href='#' className={s.item}>В пицерии </a>
      <a href='#' className={s.item}>В контакт-центре </a>
    </div>
  );
}