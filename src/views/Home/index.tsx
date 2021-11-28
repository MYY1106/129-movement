import { Link } from 'react-router-dom'
import styles from '../../assets/style/home.module.less'

export default function Home() {
    return (
        <div className={styles['home-container']}>
            <div className={styles['home-button']}></div>
            {/* <Link to="/history">历史回顾</Link> */}
            <div className={styles['home-testbox']}></div>
        </div>
    )
}
