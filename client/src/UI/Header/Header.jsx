import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";
import  s from "./Header.module.css"

export function Header({ }) { 
  return (
    <Container>
      <div className={s.header}>
        <Logo />
        <div className={ s.contacts }>
          <p className={ s.tell }>8 800 302-00-60</p>
          <p className={ s.call }>Звонок бесплатный</p>
        </div>
      </div>
    </Container>
  );

}