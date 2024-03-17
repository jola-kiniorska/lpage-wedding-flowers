import styles from './Quote.module.scss';

const Quote = props => {
    return (
        <div className={styles.quote}>
            <p>Ziemia śmieje się kwiatami – Ralph Waldo Emerson</p>
        </div>
    )
}

export default Quote;