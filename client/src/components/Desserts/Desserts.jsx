import { Gridcards } from '../Gridcards/Gridcards';
import { Card } from '../Card/Card';
import { H2 } from '../H2/H2';
import { useState, useEffect } from 'react';

export function Desserts() {
  const [desserts, setDesserts] = useState([]);

      useEffect(() => {
        fetch('http://localhost:5000/desserts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((desserts) => desserts.json())
          .then((d) => setDesserts(d.desserts));
      }, []);
  return (
    <div>
      <H2 text="Десерты" />
      <Gridcards>
        {desserts.map((el, i) => (
          <Card key={i} {...el} text='В корзину'/>
        ))}
      </Gridcards>
    </div>
  );
}
