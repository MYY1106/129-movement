import { useEffect } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FifthAct/praise.module.less'
import 'animate.css'

const Praise: React.FC<PageProps> = ({ changeAct }) => {
    let divNode: HTMLDivElement | null, praiseContentNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                praiseContentNode?.classList.add(styles['show'])
                resolve('show praise success!!')
            }, 3500)
        }).then(() => {
            divNode!.addEventListener('click', () => {
                ;(changeAct as Function)(2000)
            })
        })
    }, [])
    return (
        <div
            className={`${styles['praise-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines lines="鲁迅等爱国知名人士表示支持学" />
                <TypedLines lines="生运动。" lastTimeTypedWords={14} />
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
