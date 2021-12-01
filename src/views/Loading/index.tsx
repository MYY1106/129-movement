import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from '../../assets/style/loading.module.less'
import '../../assets/style/font.less'
import ScrollNumber from '../../components/ScrollNumber'
import { useEffect } from 'react'

const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    useEffect(() => {
        // setTimeout(() => props.history.push('/history'), 7000)
    }, [])
    return (
        <div className={styles['loading-container']}>
            <div className={styles['calendar']}>
                <div className={styles['scroll-number-box']}>
                    <ScrollNumber oldNum={2} num={1} lastTime={1} speed={2} />
                    <ScrollNumber oldNum={0} num={9} lastTime={2} speed={1.5} />
                    <ScrollNumber oldNum={2} num={3} lastTime={3} speed={1} />
                    <ScrollNumber oldNum={1} num={5} lastTime={4} speed={0.8} />
                </div>
            </div>
        </div>
    )
}
export default withRouter(Home)
