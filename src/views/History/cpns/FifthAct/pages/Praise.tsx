import { useEffect } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FifthAct/praise.module.less'
import 'animate.css'

const Praise: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null, praiseContentNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                praiseContentNode?.classList.add(styles['show'])
                resolve('show praise success!!')
            }, 5000)
        }).then(() => {
            divNode!.addEventListener('click', () => {
                changeActive('isPraiseActive', false)
                changeActive('isResolutionActive', true)
            })
        })
    }, [])
    return (
        <div
            className={`${styles['praise-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines lines="鲁迅、宋庆龄等爱国知名人士发" />
                <TypedLines
                    lines="文赞扬爱国学生的英勇奋斗精神"
                    lastTimeTypedWords={14}
                />
            </div>
            <div className={styles['praise']}></div>
            <div
                className={`${styles['praise-and-content']} animate__animated animate__fadeIn`}
                ref={currentNode => (praiseContentNode = currentNode)}
            ></div>
        </div>
    )
}
export default Praise
