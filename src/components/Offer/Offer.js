import OfferProducts from "../OfferProducts/OfferProducts";
import Title from "../Title/Title";

const Offer = props => {
    return (
        <div>
            <Title/>
            <div>
                <OfferProducts/>
                <OfferProducts/>
                <OfferProducts/>
            </div>
        </div>
    )
}

export default Offer;