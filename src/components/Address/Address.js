import styles from './Address.module.scss';

const Address = props => {

    return (
        <div className={styles.address}>
            <p>{props.text_one}<br />
                {props.text_two}<br />
                {props.text_three}</p>
        </div>
    )
}

export default Address;