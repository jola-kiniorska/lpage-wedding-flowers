import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Offer from "./components/Offer/Offer";

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Intro />
        <Offer />
        <Gallery />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}

export default App;
