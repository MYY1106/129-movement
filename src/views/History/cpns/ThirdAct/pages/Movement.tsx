import { useEffect } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/ThirdAct/movement.module.less'
import 'animate.css'

const Movement: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null,
        newspaperContentNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                newspaperContentNode?.classList.add(styles['show'])
                resolve('show newspaper success!!')
            }, 2000)
        }).then(() => {
            setTimeout(() => {
                divNode!.addEventListener('click', () => {
                    changeActive('isMovementActive', false)
                    changeActive('isHuangActive', true)
                })
            }, 5500)
        })
    })
    return (
        <div
            className={`${styles['movement-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines
                    lines="12月9日上午十点左右， 新华门"
                    fastForward={true}
                />
                <TypedLines
                    lines="前汇集了许多请愿队伍。请愿学"
                    lastTimeTypedWords={16}
                    fastForward={true}
                />
                <TypedLines
                    lines="生高举旗帜，高呼：“停止内战，"
                    lastTimeTypedWords={30}
                    fastForward={true}
                />
                <TypedLines
                    lines="一致对外”  “反对华北五省自"
                    lastTimeTypedWords={45}
                    fastForward={true}
                />
                <TypedLines
                    lines="治”等口号。"
                    lastTimeTypedWords={60}
                    fastForward={true}
                />
            </div>
            <div className={styles['newspaper']}></div>
            <div
                className={`${styles['newspaper-and-content']} animate__animated animate__fadeIn`}
                ref={currentNode => (newspaperContentNode = currentNode)}
            ></div>
        </div>
    )
}
export default Movement
