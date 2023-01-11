import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/H2/H2';
import { Slider } from '../../components/Slider/Slider';
import { Section } from '../../components/Section/Section';
import { Gridcards } from '../../components/Gridcards/Gridcards';
// import { SmallCard } from '../../components/SmallCard/SmallCard';
import s from './Main.module.css'
import { Popular } from '../../components/Popular/Popular';

export function Main() {
  return (
    <>
      <Section>
        <Container>
          <Slider />
            <Popular text="Нежный лосось" price="от 445 ₽" />
          
          <H2 text="Пицца" />
          <Gridcards>
            <Card />
            <Card />
            <Card />
            <Card />
          </Gridcards>
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
        </Container>
      </Section>
    </>
  );
}
