import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/H2/H2';
import { Slider } from '../../components/Slider/Slider';
import { Section } from '../../components/Section/Section';
import { Gridcards } from '../../components/Gridcards/Gridcards';
// import { SmallCard } from '../../components/SmallCard/SmallCard';
import s from './Main.module.css'
import { Popular } from '../../components/Popular/Popular';
import { Pizza } from '../../components/Pizza/Pizza'
import { Snacks } from '../../components/Snacks/Snacks';
import { Desserts } from '../../components/Desserts/Desserts';
import { Drinks } from '../../components/Drinks/Drinks';

export function Main() {
  return (
    <>
      <Section>
        <Container>
          <Slider />
          <Popular text="Нежный лосось" price="от 445 ₽" />

          <H2 text="Пицца" />
          <Pizza />
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 text="Комбо" />
          <Gridcards>
            <Card />
            <Card />
            <Card />
            <Card />
          </Gridcards>
          <H2 text="Закуски" />
          <Snacks />
          <H2 text="Десерты" />
          <Desserts />
          <H2 text="Напитки" />
          <Drinks/>
        </Container>
      </Section>
    </>
  );
}
