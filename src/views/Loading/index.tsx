import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from '../../assets/style/loading.module.less'
import '../../assets/style/font.less'
import ScrollNumber from '../../components/ScrollNumber'
import { useEffect } from 'react'

const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    let divNode: HTMLDivElement | null

    useEffect(() => {
        setTimeout(() => {
            divNode?.addEventListener('click', () => {
                props.history.push('/history')
            })
        }, 7000)
        // setTimeout(() =>, 7000)
    }, [])
    return (
        <div
            className={styles['loading-container']}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['calendar']}>
                <div className={styles['scroll-number-box']}>
                    <ScrollNumber
                        oldNum={2}
                        num={1}
                        lastTime={1}
                        speed={2}
                        height={5.5}
                    />
                    <ScrollNumber
                        oldNum={0}
                        num={9}
                        lastTime={2}
                        speed={1.5}
                        height={5.5}
                    />
                    <ScrollNumber
                        oldNum={2}
                        num={3}
                        lastTime={3}
                        speed={1}
                        height={5.5}
                    />
                    <ScrollNumber
                        oldNum={1}
                        num={5}
                        lastTime={4}
                        speed={0.8}
                        height={5.5}
                    />
                </div>
            </div>
        </div>
    )
}
export default withRouter(Home)
