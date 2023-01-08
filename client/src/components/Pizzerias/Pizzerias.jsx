import s from './Pizzerias.module.css'

export function Pizzerias() { 
  return (
    <div className={ s.pizzerias }>
      <p className={ s.num }>688 пиццерий</p>
      <p className={ s.num_country }>в 14 странах, включая Китай, США и Великобританию</p>
    </div>
  );
}