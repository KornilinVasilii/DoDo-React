import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { H2 } from '../../components/H2/H2';
import { Slider } from '../../components/Slider/Slider';
import { Section } from '../../components/Section/Section';
import { Gridcards } from '../../components/Gridcards/Gridcards';
import { SmallCard } from '../../components/SmallCard/SmallCard';
import s from './Main.module.css'

export function Main() {
  return (
    <>
      <Section>
        <Container>
          <Slider />
          <H2 className={s.title} text="Новое и популярное" />
          <div className={s.small_cards}>
            <SmallCard text="Цезарь" price="от 445 ₽" />
            <SmallCard text="Нежный лосось" price="от 445 ₽" />
            <SmallCard text="2 пиццы" price="899 ₽" />
            <SmallCard text="Карбонара" price="от 395 ₽" />
          </div>
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
