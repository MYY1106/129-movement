import { useEffect } from 'react'
import styles from '../../../../../assets/style/FifthAct/black.module.less'
import 'animate.css'

const Black: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null
    useEffect(() => {
        setTimeout(() => {
            divNode?.addEventListener('click', () => {
                changeActive('isBlackActive', false)
                changeActive('isResolutionActive', true)
            })
        }, 2000)
    })
    return (
        <div
            className={`${styles['background']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentences-box']}>
                <div className={styles['title']}>事件影响</div>
                {`一·二·九运动公开揭露了日本帝
                国主义侵略中国 、并吞华北的
                阴谋，打击了国民党政府的妥
                协投降政策，大大地促进了中
                国人民的觉醒，同时也配合了
                红军北上抗日，促进了国内和
                平和对日抗战的发展。`}
            </div>
        </div>
    )
}
export default Black
