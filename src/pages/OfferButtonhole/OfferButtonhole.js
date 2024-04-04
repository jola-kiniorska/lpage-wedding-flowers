import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import OfferSite from "../../components/OfferSite/OfferSite";
import imgOfferSite1 from "../../img/offer_site_3.jpg";

const OfferButtonhole = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <OfferSite
                offerSiteImg={imgOfferSite1}
                title="Butonierki"
                theme_1="Opis"
                description_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                theme_2="Kwiaty do wyboru"
                description_2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                theme_3="Cena"
                description_3="Lorem ipsum dolor sit amet"
                theme_4="Czas realizacji"
                description_4="Lorem ipsum" />
            <Footer />
        </main>
    );
}

export default OfferButtonhole;