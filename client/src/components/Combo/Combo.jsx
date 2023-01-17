import { Card } from "../Card/Card";
import { Gridcards } from "../Gridcards/Gridcards";
import { H2 } from "../H2/H2";
import { useState,useEffect } from "react";

export function Combo() { 

  const [combo, setCombo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/combo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((combo) => combo.json())
      .then((d) => setCombo(d.combo));
  }, []);
  console.log(combo);

  return (
    <div>
      <H2 text="Комбо" />
      <Gridcards>
        {combo.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </Gridcards>
    </div>
  );
}