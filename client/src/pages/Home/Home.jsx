import { Footer } from "../../UI/Footer/Footer";
import { Header } from "../../UI/Header/Header";
import { Main } from "../../UI/Main/Main";


export function Home({ setModalActive }) {
  return (
    <>
      <Header />
      <Main setModalActive={setModalActive} />
      <Footer />
    </>
  );
}