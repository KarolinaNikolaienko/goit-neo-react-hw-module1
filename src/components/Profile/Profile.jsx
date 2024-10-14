import css from './Profile.module.css'
import clsx from 'clsx'

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.profileCard}>
            <div className={css.profileInfo}>
                <img className={css.profileImg}
                    src={image}
                    alt="User avatar"
                    
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileUserInfo}>@{tag}</p>
                <p className={css.profileUserInfo}>{location}</p>
            </div>

            <ul className={css.profileStatsList}>
                <li className={css.profileStat}>
                    <span className={css.stat}>Followers</span>
                    <span className={clsx(css.stat, css.statValue)}>{stats.followers}</span>
                </li>
                <li className={css.profileStat}>
                    <span className={css.stat}>Views</span>
                    <span className={clsx(css.stat, css.statValue)}>{stats.views}</span>
                </li>
                <li className={css.profileStat}>
                    <span className={css.stat}>Likes</span>
                    <span className={clsx(css.stat, css.statValue)}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile