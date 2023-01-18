import { Gridcards } from '../Gridcards/Gridcards';
import { H2 } from '../H2/H2';
import { SmallCards } from '../SmallCards/SmallCards';
import s from './Popular.module.css'
import { useState, useEffect } from 'react';

export function Popular() { 
    // const [popular, setPopular] = useState([]);

    // useEffect(() => {
    //   fetch('http://localhost:5000/combo', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   })
    //     .then((popular) => popular.json())
    //     .then((d) => setPopular(d.popular));
    // }, []);
  return (
    <div className={s.popular}>
      <H2 text="Новое и популярное" />
      {/* <Gridcards> */}
            {/* {popular.map((el, i) => (
        <SmallCards key={i} {...el} />
      ))} */}
      </Gridcards>
    </div>
  );
}