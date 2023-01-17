import { Header } from '../../UI/Header/Header';
import { Snacks } from '../../components/Snacks/Snacks';
import { Footer } from '../../UI/Footer/Footer';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function SnacksPage() {
  return (
    <Section>
      <Container>
        <Header />
        <Snacks />
        <Footer />
      </Container>
    </Section>
  );
}
