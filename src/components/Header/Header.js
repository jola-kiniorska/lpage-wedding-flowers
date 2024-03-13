import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <h2>"A woman is a <span>flower...</span>"</h2>
        </div>
    )
}

export default Header;