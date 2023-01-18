import { Gridcards } from '../Gridcards/Gridcards';
import { Card } from '../Card/Card';
import { H2 } from '../H2/H2';
import { useState, useEffect } from 'react';

export function Drinks() {
  const [drinks, setDrinks] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/drinks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((drinks) => drinks.json())
        .then((d) => setDrinks(d.drinks));
    }, []);
  return (
    <div>
      <H2 text="Напитки" />
      <Gridcards>
        {drinks.map((el, i) => (
          <Card key={i} {...el} text="В корзину" />
        ))}
      </Gridcards>
    </div>
  );
}
