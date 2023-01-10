import './App.css'; 
import './index.css'
import { Footer } from './UI/Footer/Footer';
import { Header } from './UI/Header/Header';
import { Main } from './UI/Main/Main'
// import { Basket } from './widgets/Basket/Basket'


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      {/* <Basket/> */}
    </>
  );
}

export default App;
