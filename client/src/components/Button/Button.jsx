import s from './Button.module.css'


export function Button({ text }) {
  
  if (text === 'Выбрать') {
    return (
      <button className={s.btn}>{ text }</button>
    )
  }
  if (text === 'В корзину') {
    return <button className={ s.button }>{text}</button>;
  }
  if (text === "Корзина") {
      return <button className={s.button}>{text}</button>;
    }
}