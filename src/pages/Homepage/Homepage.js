import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import Offer from "../../components/Offer/Offer";

const Homepage = () => {

    return (
        <main>
            <Header />
            <Intro />
            <Offer />
            <Gallery />
            <Contact />
            <Footer />
        </main>
    );
}

export default Homepage;