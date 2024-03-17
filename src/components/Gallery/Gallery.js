import Button from "../Button/Button";
import styles from "./Gallery.module.scss";

const Gallery = props => {
    return (
        <div className={styles.section_gallery}>
            <div className={styles.gallery_txt}>
                <p>Zobacz nasze realizacje</p>
                <Button/>
            </div>
        </div>
    )
}

export default Gallery;