import { Footer } from '../../UI/Footer/Footer';
import { Header } from '../../UI/Header/Header';
import { Other } from '../../components/Other/Other';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function OtherPage() {
  return (
    <Section>
      <Container>
        <Header />
        <Other />
        <Footer />
      </Container>
    </Section>
  );
}
