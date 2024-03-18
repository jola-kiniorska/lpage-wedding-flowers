import React from "react";
import { Routes, Route } from "react-router-dom";
import FullGallery from "./pages/FullGallery/FullGallery";
import Homepage from "./pages/Homepage/Homepage";
import OfferFlowerCrown from "./pages/OfferFlowerCrown/OfferFlowerCrown";
import OfferBouquet from "./pages/OfferBouquet/OfferBouquet";
import OfferButtonhole from "./pages/OfferButtonhole/OfferButtonhole";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/gallery" element={<FullGallery />}></Route>
        <Route path="/offer-flower-crown" element={<OfferFlowerCrown />}></Route>
        <Route path="/offer-bouquet" element={<OfferBouquet />}></Route>
        <Route path="/offer-buttonhole" element={<OfferButtonhole />}></Route>
      </Routes>
    </main>
  );
}

export default App;
