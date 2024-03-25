import styles from './CarouselItem.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imgOffer1 from "../../img/offers_1.jpg";
import imgOffer2 from "../../img/offers_2.jpg";
import imgOffer3 from "../../img/offers_3.jpg";

const CarouselItem = () => {

    return (
        <div className={styles.carousel_item}>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <img
                    src={imgOffer1}
                    alt="carousel"
                    style={{
                        display: 'block',
                        height: '200px',
                        margin: 'auto',
                        width: '200px'
                    }}
                />
                <img
                    src={imgOffer2}
                    alt="carousel"
                    style={{
                        display: 'block',
                        height: '200px',
                        margin: 'auto',
                        width: '200px'
                    }}
                />
                <img
                    src={imgOffer3}
                    alt="carousel"
                    style={{
                        display: 'block',
                        height: '200px',
                        margin: 'auto',
                        width: '200px'
                    }}
                />
            </Carousel>
        </div>
    )
}

export default CarouselItem;