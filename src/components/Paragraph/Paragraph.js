import styles from './Paragraph.module.scss';

const Paragraph = props => {
    return (
        <div className={styles.paragraph}>
            <p>{props.text}</p>
        </div>
    )
}

export default Paragraph;