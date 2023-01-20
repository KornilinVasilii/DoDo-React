import s from './Gridcards.module.css';
export function Gridcards({ children }) {
  return  <div className={s.cards}>{children}</div>;
}
