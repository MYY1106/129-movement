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
        }, 2000)
    }, [])
    return (
        <div
            className={`${styles['background']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentences-box']}>
                <div className={styles['title']}>走上街头</div>
                {`1935年12月9日，在中共北平临时
                  工作委员会的领导下，在姚依林、
                  郭明秋等共产党员的组织和指挥
                  下，东北大学、清华大学、燕京
                  大学等10多所高等院校和中学的
                  数千名学生涌上北平街头，举行
                  了声势浩大的抗日救亡游行。`}
            </div>
        </div>
    )
}
export default Black
