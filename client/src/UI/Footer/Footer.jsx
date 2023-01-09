import { Information } from "../../components/ Information/ Information";
import { About } from "../../components/About/About";
import { Container } from "../../components/Container/Container";
import { FooterContacts } from "../../components/FooterContacts/FooterContacts";
import { Pizzerias } from "../../components/Pizzerias/Pizzerias";
import { Profit } from "../../components/Profit/Profit";

import s from './Footer.module.css'

export function Footer() { 
  return (
    <div className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <About />
          <FooterContacts />
        </div>
        <div className={s.profit}>
          <Profit/>
          <Pizzerias/>
        </div>
        <Information /> 
      </Container>
    </div>
  );
}