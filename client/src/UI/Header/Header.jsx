import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Menu } from "../../components/Menu/Menu";
import s from "./Header.module.css"
import { Contacts } from "../../components/Contacts/Contacts"

export function Header({ }) { 
  return (
    <Container>
      <div className={s.header}>
        <Logo />
        <Contacts/>
      </div>
      <Menu />
    </Container>
  );

}