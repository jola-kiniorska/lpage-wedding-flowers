import React from "react";
import CarouselItem from "../../containers/CarouselItem/CarouselItem.tsx";
import Contact from "../../containers/Contact/Contact.tsx";
import Footer from "../../containers/Footer/Footer.tsx";
import Gallery from "../../containers/Gallery/Gallery.tsx";
import Header from "../../containers/Header/Header.tsx";
import Intro from "../../containers/Intro/Intro.tsx";
import Offer from "../../containers/Offer/Offer.tsx";

const Homepage = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Offer />
      <Gallery />
      <CarouselItem />
      <Contact />
      <Footer />
    </main>
  );
};

export default Homepage;
