import styles from './Button.module.scss';

const Button = props => {
    return (
        <div className={styles.button}>
            <a href={props.link}>Galeria</a>
        </div>
    )
}

export default Button;