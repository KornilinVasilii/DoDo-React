import { Gridcards } from '../Gridcards/Gridcards';
import { H2 } from '../H2/H2';
import { SmallCards } from '../SmallCards/SmallCards';
import s from './Popular.module.css'
export function Popular({ data }) { 
  return (
    <div className={s.popular}>
      <H2 text="Новое и популярное" />
      <Gridcards>
            {data?.map((el, i) => (
        <SmallCards key={i} {...el} />
      ))}
      </Gridcards>
    </div>
  );
}