import { Gridcards } from '../Gridcards/Gridcards'
import { Card } from '../Card/Card'
import { H2 } from '../H2/H2';
export function Pizza() { 
  return (
    <div>
      <H2 text="Пицца" />
      <Gridcards>
        <Card />
      </Gridcards>
    </div>
  );
}