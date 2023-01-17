import { Pizza } from '../../components/Pizza/Pizza';
import { Footer } from '../../UI/Footer/Footer';
import { Header } from '../../UI/Header/Header';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function PizzaPage({ data }) {
  return (
    <Section>
      <Container>
        <Header />
        <Pizza data={ data } />
      </Container>
        <Footer />
    </Section>
  );
}
