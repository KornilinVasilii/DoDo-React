import { Pizza } from '../../components/Pizza/Pizza';
import { Footer } from '../../UI/Footer/Footer';
import { Header } from '../../UI/Header/Header';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function PizzaPage({ setModalActive }) {
  return (
    <Section>
      <Container>
        <Header />
        <Pizza setModalActive={setModalActive} />
      </Container>
      <Footer />
    </Section>
  );
}
