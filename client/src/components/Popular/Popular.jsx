import { Gridcards } from '../Gridcards/Gridcards';
import { H2 } from '../H2/H2';
import { SmallCards } from '../SmallCards/SmallCards';
import s from './Popular.module.css'
import { useState, useEffect } from 'react';

export function Popular({ setLook }) {
  const [novelty, setNovelty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/novelty", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((novelty) => novelty.json())
      .then((d) => setNovelty(d.novelty));
  }, []);
  console.log(novelty);
  return (
    <div className={s.popular}>
      <H2 text="Новое и популярное" />
      <Gridcards>
        {novelty.map((el, i) => (
          <SmallCards key={i} {...el} setLook={setLook} />
        ))}
      </Gridcards>
    </div>
  );
}