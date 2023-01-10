import s from './Section.module.css'
export function Section({ children }) {
  return (
    <div className={ s.section }>{children}</div>);
}
