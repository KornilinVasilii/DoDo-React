import { Container } from '../../components/Container/Container';
import { Slider } from '../../components/Slider/Slider';
import { Section } from '../../components/Section/Section';
import { Popular } from '../../components/Popular/Popular';
import { Pizza } from '../../components/Pizza/Pizza'
import { Snacks } from '../../components/Snacks/Snacks';
import { Desserts } from '../../components/Desserts/Desserts';
import { Drinks } from '../../components/Drinks/Drinks';
import { Combo } from '../../components/Combo/Combo';
import { Other } from '../../components/Other/Other';

export function Main() {

  return (
    <>
      <Section>
        <Container>
          <Slider />
          <Popular />
          <Pizza />
          <Combo/>
          <Snacks />
          <Desserts />
          <Drinks  />
          <Other  />
        </Container>
      </Section>
    </>
  );
}
