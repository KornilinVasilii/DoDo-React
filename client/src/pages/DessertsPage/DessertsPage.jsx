import { Footer } from '../../UI/Footer/Footer';
import { Header } from '../../UI/Header/Header';
import { Desserts } from '../../components/Desserts/Desserts';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function DessertsPage() {
  return (
    <Section>
      <Container>
        <Header />
        <Desserts />
      </Container>
        <Footer />
    </Section>
  );
}
