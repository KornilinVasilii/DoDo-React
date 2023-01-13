import s from './Button.module.css'


export function Button({text}) {
  return (
    <button className={s.button}>
      {text}
    </button>
  );
}