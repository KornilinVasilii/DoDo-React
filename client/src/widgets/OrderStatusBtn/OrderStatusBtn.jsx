import s from './OrderStatusBtn.module.css'
import classNames from 'classnames'
export function OrderStatusBtn({ text, color }) {
  return <button className={ classNames (s.btn_left, s[color])}>{ text }</button>;
}
