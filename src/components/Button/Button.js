import styles from './Button.module.scss';
import { useNavigate } from "react-router-dom";

const Button = props => {

    let navigate = useNavigate(); 
    const routeChange = () => { 
      let path = `/gallery`; 
      navigate(path);
    }

    return (
        <div className={styles.button}>
            <button onClick={routeChange}>Galeria</button>
        </div>
    )
}

export default Button;