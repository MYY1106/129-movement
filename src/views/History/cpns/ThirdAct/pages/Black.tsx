import { useEffect } from 'react'
import styles from '../../../../../assets/style/ThirdAct/black.module.less'
import TypedLines from '../../../../../components/TypedLines'
import 'animate.css'

const Black: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null
    useEffect(() => {
        setTimeout(() => {
            divNode?.addEventListener('click', () => {
                changeActive('isBlackActive', false)
                changeActive('isMovementActive', true)
            })
        }, 6000)
    }, [])
    return (
        <div
            className={`${styles['background']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentences-box']}>
                <TypedLines lines="1935年12月9日凌晨，广大爱国学" />
                <TypedLines
                    lines="生的抗日怒火像火山一样爆发"
                    lastTimeTypedWords={18}
                />
            </div>
        </div>
    )
}
export default Black
