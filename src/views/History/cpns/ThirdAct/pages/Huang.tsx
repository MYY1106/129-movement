import { useEffect, useState } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/ThirdAct/huang.module.less'
import 'animate.css'

const Huang: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null,
        newspaperContentNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                newspaperContentNode?.classList.add(styles['show'])
                resolve('newpaper success')
            }, 5500)
        }).then(() => {
            setTimeout(() => {
                divNode!.addEventListener('click', () => {
                    changeActive('isHuangActive', false)
                    changeActive('isBattleActive', true)
                })
            }, 1500)
        })
    })
    return (
        <div
            className={`${styles['huang-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines
                    lines="上午11时许， 北平爱国学生和广"
                    fastForward={true}
                />
                <TypedLines
                    lines="大工人 、农民 、市民3万余人召"
                    fastForward={true}
                    lastTimeTypedWords={16}
                />
                <TypedLines
                    lines="开市民大会。图为黄敬同志扶着"
                    fastForward={true}
                    lastTimeTypedWords={32}
                />
                <TypedLines
                    lines="电车向群众讲话“人民！武装你"
                    fastForward={true}
                    lastTimeTypedWords={46}
                />
                <TypedLines
                    lines="们自己！”"
                    fastForward={true}
                    lastTimeTypedWords={60}
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
export default Huang
