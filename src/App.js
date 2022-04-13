import { FAQ } from "./components/sections/FAQ";
import { Form } from "./components/sections/Form";
import { Hero } from "./components/sections/Hero";
import { Main } from "./components/containers/Main";
import { About } from "./components/sections/About";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { Reviews } from "./components/sections/Reviews";

function App() {
  return (
    <>
      <Header />

      <Main>
        <Hero />
        <About />
        <Reviews />
        <FAQ />
        <Form />
      </Main>

      <Footer />
    </>
  );
}

export { App };
