import './App.css';
import './index.css';
import { Footer } from './UI/Footer/Footer';
import { Header } from './UI/Header/Header';
import { Main } from './UI/Main/Main';
import { Basket } from './pages/Basket/Basket';
import { Order } from './pages/Order/Order';
import { OrderStatus } from './pages/OrderStatus/OrderStatus';
import { ModalWindowOne } from './widgets/ ModalWindowOne/ ModalWindowOne';
import { ModalWindowTwo } from './widgets/ModalWindowTwo/ModalWindowTwo';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path='/orderstatus' element={ <OrderStatus/> }/>
        {/* <Header />
        <Main />
        <Footer />
        <Basket />
        <Order />
        <OrderStatus />
        <ModalWindowOne />
        <ModalWindowTwo /> */}
      </Routes>
    </>
  );
}

export default App;
