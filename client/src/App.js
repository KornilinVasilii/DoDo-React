import './App.css'; 
import './index.css'
import { Footer } from './UI/Footer/Footer';
import { Header } from './UI/Header/Header';
import { Main } from './UI/Main/Main'
import { Basket } from './pages/Basket/Basket';
import { Order } from './pages/Order/Order';
import { OrderStatus } from './pages/OrderStatus/OrderStatus';

import { BasketFooter } from './widgets/BasketFooter/BasketFooter'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Basket />
      <Order />
      <OrderStatus/>
    </>
  );
}

export default App;
