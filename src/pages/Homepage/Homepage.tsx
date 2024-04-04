import React from "react";
import CarouselItem from "../../components/CarouselItem/CarouselItem.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Gallery from "../../components/Gallery/Gallery.tsx";
import Header from "../../components/Header/Header.tsx";
import Intro from "../../components/Intro/Intro.tsx";
import Offer from "../../components/Offer/Offer.tsx";

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
