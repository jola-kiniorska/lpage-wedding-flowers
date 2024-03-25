import styles from './Button.module.scss';

const Button = props => {

    const scrollToElement = (element) => {
        const section = document.querySelector(element);
        section.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className={styles.button}>
            <button onClick={() => scrollToElement(props.element)}>{props.name}</button>
        </div>
    )
}

export default Button;