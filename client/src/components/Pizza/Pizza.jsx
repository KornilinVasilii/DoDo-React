import { Gridcards } from '../Gridcards/Gridcards'
import { Card } from '../Card/Card'
import { H2 } from '../H2/H2';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
export function Pizza() { 
  return (
    <Section>
      <Container>
        <div>
          <H2 text="Пицца" />
          <Gridcards>
            <Card />
          </Gridcards>
        </div>
      </Container>
    </Section>
  );
}