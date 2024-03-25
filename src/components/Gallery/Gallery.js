import styles from "./Gallery.module.scss";
import Button from "../Button/Button";

const Gallery = () => {
    return (
        <div className={styles.section_gallery}>
            <div className={styles.gallery_txt}>
                <p>Zobacz nasze realizacje</p>
                <Button name='Galeria' element='.react-multi-carousel-list'/>
            </div>
        </div>
    )
}

export default Gallery;