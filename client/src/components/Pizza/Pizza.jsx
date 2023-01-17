import { Gridcards } from '../Gridcards/Gridcards'
import { Card } from '../Card/Card'
import { H2 } from '../H2/H2';

export function Pizza({ data }) { 
  // console.log(data.products1.pizza)
  return (
    <div>
      <H2 text="Пицца" />
      <Gridcards>
        {data?.map((el, i) => (
          <Card key={i} {...el} />
        ))
        }
      </Gridcards>
    </div>
  );
}