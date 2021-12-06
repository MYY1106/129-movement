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
            }, 5300)
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
                <TypedLines lines="宋庆龄、鲁迅、陶行知等爱国知" />
                <TypedLines
                    lines="名人士纷纷表示支持学生运动。"
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
