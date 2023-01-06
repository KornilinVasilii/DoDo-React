import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import s from './Main.module.css'
import { H2 } from '../../components/H2/H2';
import { Slider } from '../../components/Slider/Slider';

export function Main() {
  return (
    <Container>
      <Slider/>
      <H2 text='Пицца'/>
      <div className={s.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  )
}
