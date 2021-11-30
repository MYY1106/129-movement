import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from '../../assets/style/home.module.less'

const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const goToLoading = () => props.history.push('/loading')
    return (
        <div className={styles['home-container']}>
            <div className={styles['home-button']} onClick={goToLoading}></div>
        </div>
    )
}
export default withRouter(Home)
