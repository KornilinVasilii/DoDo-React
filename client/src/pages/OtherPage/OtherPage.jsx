import { Footer } from '../../UI/Footer/Footer';
import { Header } from '../../UI/Header/Header';
import { Other } from '../../components/Other/Other';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

export function OtherPage({ setLook}) {
  return (
    <Section>
      <Container>
        <Header />
        <Other setLook={setLook} />
      </Container>
      <Footer />
    </Section>
  );
}
