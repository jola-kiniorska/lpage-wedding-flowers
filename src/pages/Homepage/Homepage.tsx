import React from "react";
import CarouselItem from "../../containers/CarouselItem/CarouselItem.tsx";
import Contact from "../../containers/Contact/Contact.tsx";
import Footer from "../../containers/Footer/Footer.tsx";
import Gallery from "../../containers/Gallery/Gallery.tsx";
import Header from "../../containers/Header/Header.tsx";
import Intro from "../../containers/Intro/Intro.tsx";
import Offer from "../../containers/Offer/Offer.tsx";
import Container from "../../containers/Container/Container.tsx";

const Homepage = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <Offer />
      <Gallery />
      <CarouselItem />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Homepage;
