import styles from './SocialMediaIcon.module.scss';

const SocialMediaIcon = props => {
    return (
        <a className={styles.social_media_link} href='https://www.instagram.com/'>
            <img src={props.icon} alt={'social-media'}></img>
        </a>
    )
}

export default SocialMediaIcon;