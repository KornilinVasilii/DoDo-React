import s from './Profit.module.css'
export function Profit() {
  
  return (
    <div className={ s.profit }>
      <p className={ s.sum}>1 396 362 874 ₽</p>
      <p className={ s.profit_sum }>Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽</p>
    </div>
  );
}