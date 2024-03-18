import styles from './Quote.module.scss';

const Quote = props => {
    return (
        <div className={styles.quote}>
            <p>{props.quote}</p>
        </div>
    )
}

export default Quote;