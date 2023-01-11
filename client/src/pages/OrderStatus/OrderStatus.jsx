import { Container } from "../../components/Container/Container";
import { BasketFooter } from "../../widgets/BasketFooter/BasketFooter";
import { BasketHeader } from "../../widgets/BasketHeader/BasketHeader";
import s from './OrderStatus.module.css'
export function OrderStatus() {
  return (
    <>
      <BasketHeader />
      <Container>
        <div className={ s.status }>
        <h1>Приняли</h1>
        </div>
        </Container>
      <BasketFooter />
    </>
  );
}
