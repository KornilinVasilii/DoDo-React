import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/H2/H2';
import { Slider } from '../../components/Slider/Slider';
import { Section } from '../../components/Section/Section';
import { Popular } from '../../components/Popular/Popular';
import { Pizza } from '../../components/Pizza/Pizza'
import { Snacks } from '../../components/Snacks/Snacks';
import { Desserts } from '../../components/Desserts/Desserts';
import { Drinks } from '../../components/Drinks/Drinks';
import { Combo } from '../../components/Combo/Combo';
import { Other } from '../../components/Other/Other';

export function Main({ data }) {
  console.log(data)
  return (
    <>
      <Section>
        <Container>
          <Slider />
          <Popular text="Нежный лосось" price="от 445 ₽" />
          <Pizza data={data?.products1?.pizzas} />
          <Combo data={data?.products1?.combo} />
          <Snacks data={data?.products1?.hot} />
          <Desserts data={data?.products1?.desserts} />
          <Drinks data={data?.products1?.sodas} />
        </Container>
      </Section>
    </>
  );
}
