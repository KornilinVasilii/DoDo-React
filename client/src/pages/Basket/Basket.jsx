import s from '../Basket/Basket.module.css';
import { Logo } from "../../components/Logo/Logo"
import { BasketHeader } from '../../widgets/BasketHeader/BasketHeader';
import { Container } from '../../components/Container/Container';
import { BasketFooter } from '../../widgets/BasketFooter/BasketFooter';

export function Basket() {
  return (
    <>
      <BasketHeader />
      <BasketFooter/>
    </>
  );
}