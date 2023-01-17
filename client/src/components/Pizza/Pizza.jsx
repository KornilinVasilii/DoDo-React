import { Gridcards } from '../Gridcards/Gridcards'
import { Card } from '../Card/Card'
import { H2 } from '../H2/H2';
import { useState, useEffect } from "react";


export function Pizza() { 
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/pizzas", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((pizza) => pizza.json())
        .then((d) => setPizza(d.pizza));
    }, []);

  return (
    <div>
      <H2 text="Пицца" />
      <Gridcards>
        {pizza.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </Gridcards>
    </div>
  );
}