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
            }, 2500)
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
                    lines="青年学生在街头演讲，传播爱国"
                    fastForward={true}
                />
                <TypedLines
                    lines="热情。图为北京大学学生黄敬在"
                    fastForward={true}
                    lastTimeTypedWords={14}
                />
                <TypedLines
                    lines="电车上演讲。"
                    fastForward={true}
                    lastTimeTypedWords={28}
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
