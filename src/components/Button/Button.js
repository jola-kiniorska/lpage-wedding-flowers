import styles from './Button.module.scss';
import { useNavigate } from "react-router-dom";

const Button = props => {

    let navigate = useNavigate(); 
    const goToSite = (page) => { 
      navigate(page);
    }

    return (
        <div className={styles.button}>
            <button onClick={() => goToSite(props.page)}>Galeria</button>
        </div>
    )
}

export default Button;