import s from './Gridcards.module.css';
import { Card } from '../Card/Card';
export function Gridcards({ children }) {
  return <div className={s.cards}>{children}</div>;
}
