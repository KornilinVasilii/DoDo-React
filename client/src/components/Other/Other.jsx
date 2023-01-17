import { Gridcards } from '../Gridcards/Gridcards';
import { Card } from '../Card/Card';
import { H2 } from '../H2/H2';

export function Other({ data }) {
  return (
    <div>
      <H2 text="Другие товары" />
      <Gridcards>
        {data?.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </Gridcards>
    </div>
  );
}
