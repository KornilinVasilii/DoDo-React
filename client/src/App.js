import './App.css'; 
import './index.css'
import { Footer } from './UI/Footer/Footer';
import { Header } from './UI/Header/Header';
import { Main } from './UI/Main/Main'
import { Basket } from './pages/Basket/Basket';
import { Order } from './pages/Order/Order';
import { OrderStatus } from './pages/OrderStatus/OrderStatus';
import { ModalWindowOne } from './pages/ ModalWindowOne/ ModalWindowOne';
import { ModalWindowTwo } from './pages/ModalWindowTwo/ModalWindowTwo'
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Basket />
      <Order />
      <OrderStatus />
      <ModalWindowOne />
      <ModalWindowTwo/>
    </>
  );
}

export default App;
