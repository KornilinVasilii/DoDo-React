import { Gridcards } from '../Gridcards/Gridcards';
import { Card } from '../Card/Card';
import { H2 } from '../H2/H2';
import { useState, useEffect } from 'react';
import { SmallCards } from '../SmallCards/SmallCards';


export function Other({ setLook }) {
  const [other, setOther] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/other", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((other) => other.json())
      .then((d) => setOther(d.other));
  }, []);
  return (
    <div>
      <H2 text="Другие товары" />
      <Gridcards>
        {other.map((el, i) => (
          <SmallCards key={i} {...el} setLook={setLook} />
        ))}
      </Gridcards>
    </div>
  );
}
