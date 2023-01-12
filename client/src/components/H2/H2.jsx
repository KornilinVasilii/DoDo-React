import s from './H2.module.css'

export function H2({ text, style }) {
  return <h2 className={ style }>{ text }</h2>
}