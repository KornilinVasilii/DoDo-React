import { Card } from "../Card/Card";
import { Gridcards } from "../Gridcards/Gridcards";
import { H2 } from "../H2/H2";

export function Combo({ data }) { 
  return (
    <div>
      <H2 text="Комбо" />
      <Gridcards>
        {data?.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </Gridcards>
    </div>
  );
}