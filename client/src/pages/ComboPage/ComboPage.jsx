import { Combo } from '../../components/Combo/Combo';
import { Footer } from '../../UI/Footer/Footer';
import { Header } from '../../UI/Header/Header';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function ComboPage() {
  return (
    <Section>
      <Container>
        <Header />
        <Combo />
      </Container>
        <Footer />
    </Section>
  );
}
