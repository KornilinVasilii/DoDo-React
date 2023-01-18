import { Gridcards } from '../Gridcards/Gridcards';
import { Card } from '../Card/Card';
import { H2 } from '../H2/H2';
import { useState, useEffect } from 'react';

export function Snacks() {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/snacks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((snacks) => snacks.json())
        .then((d) => setSnacks(d.snacks));
    }, []);
  return (
    <div>
      <H2 text="Закуски" />
      <Gridcards>
        {snacks.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </Gridcards>
    </div>
  );
}
