import { Gridcards } from '../Gridcards/Gridcards';
import { Card } from '../Card/Card';
import { H2 } from '../H2/H2';

export function Snacks() {
  return (
    <div>
      <H2 text="Закуски" />
      <Gridcards>
        <Card />
      </Gridcards>
    </div>
  );
}
