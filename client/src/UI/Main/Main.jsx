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

export function Main({ setModalActive, setLook }) {
  return (
    <>
      <Section>
        <Container>
          <Slider />
          <Popular setLook={setLook} />
          <Pizza setModalActive={setModalActive} />
          <Combo setModalActive={setModalActive} />
          <Snacks />
          <Desserts />
          <Drinks />
          <Other setLook={setLook} />
        </Container>
      </Section>
    </>
  );
}
