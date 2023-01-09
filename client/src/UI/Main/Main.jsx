import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/H2/H2';
import { Slider } from '../../components/Slider/Slider';
import { Section } from '../../components/Section/Section';
import { Gridcards } from '../../components/Gridcards/Gridcards';

export function Main() {
  return (
    <>
      <Section>
        <Container>
          <Slider />
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
