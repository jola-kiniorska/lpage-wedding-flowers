import Button from "../Button/Button";
import styles from "./Gallery.module.scss";

const Gallery = props => {
    return (
        <div className={styles.section_gallery}>
            <p>Zobacz nasze realizacje</p>
            <Button/>
        </div>
    )
}

export default Gallery;