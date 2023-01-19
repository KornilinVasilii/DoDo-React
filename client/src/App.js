import "./App.css";
import "./index.css";
import { Basket } from "./pages/Basket/Basket";
import { Order } from "./pages/Order/Order";
import { OrderStatus } from "./pages/OrderStatus/OrderStatus";
import { ModalWindowOne } from "./widgets/ ModalWindowOne/ ModalWindowOne";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SnacksPage } from "./pages/SnacksPage/SnacksPage";
import { DrinksPage } from "./pages/DrinksPage/DrinksPage";
import { PizzaPage } from "./pages/PizzaPage/PizzaPage";
import { ComboPage } from "./pages/ComboPage/ComboPage";
import { DessertsPage } from "./pages/DessertsPage/DessertsPage";
import { OtherPage } from "./pages/OtherPage/OtherPage";
import { useState } from "react";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderstatus" element={<OrderStatus />} />
        <Route
          path="/pizza"
          element={<PizzaPage setModalActive={setModalActive} />}
        />
        <Route path="/snacks" element={<SnacksPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route
          path="/combo"
          element={<ComboPage setModalActive={setModalActive} />}
        />
        <Route path="/desserts" element={<DessertsPage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
      {modalActive && (
        <ModalWindowOne active={modalActive} setModalActive={setModalActive} />
      )}
    </>
  );
}

export default App;
