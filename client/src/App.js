import './App.css'; 
import './index.css'
import { Footer } from './UI/Footer/Footer';
import { Header } from './UI/Header/Header';
import { Main } from './UI/Main/Main'
import { Basket } from './pages/Basket/Basket';
import { Order } from './pages/Order/Order';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Basket />
      <Order/>
    </>
  );
}

export default App;
