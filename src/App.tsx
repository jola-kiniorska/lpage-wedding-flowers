import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.tsx";
import OfferFlowerCrown from "./pages/OfferFlowerCrown/OfferFlowerCrown.tsx";
import OfferBouquet from "./pages/OfferBouquet/OfferBouquet.tsx";
import OfferButtonhole from "./pages/OfferButtonhole/OfferButtonhole.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/offer-flower-crown" element={<OfferFlowerCrown />}></Route>
        <Route path="/offer-bouquet" element={<OfferBouquet />}></Route>
        <Route path="/offer-buttonhole" element={<OfferButtonhole />}></Route>
      </Routes>
    </main>
  );
}

export default App;
