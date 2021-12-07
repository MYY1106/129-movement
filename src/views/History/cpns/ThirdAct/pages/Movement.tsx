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
            }, 4500)
        })
    })
    return (
        <div
            className={`${styles['movement-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines
                    lines="十点半，新华门前汇集了许多请"
                    fastForward={true}
                />
                <TypedLines
                    lines="愿队伍。请愿学生高举旗帜，高"
                    lastTimeTypedWords={14}
                    fastForward={true}
                />
                <TypedLines
                    lines="呼抗日救国口号，提出了反对成"
                    lastTimeTypedWords={28}
                    fastForward={true}
                />
                <TypedLines
                    lines="立防共自治委员会、停止内战等"
                    lastTimeTypedWords={42}
                    fastForward={true}
                />
                <TypedLines
                    lines="要求"
                    lastTimeTypedWords={56}
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
