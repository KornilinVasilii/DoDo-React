import { Drinks } from '../../components/Drinks/Drinks';
import { Footer } from '../../UI/Footer/Footer';
import { Header } from '../../UI/Header/Header';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function DrinksPage() {
  return (
    <Section>
      <Container>
        <Header />
        <Drinks />
        <Footer />
      </Container>
    </Section>
  );
}
