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
            }, 4000)
        }).then(() => {
            setTimeout(() => {
                divNode!.addEventListener('click', () => {
                    changeActive('isHuangActive', false)
                    changeActive('isBattleActive', true)
                })
            }, 2200)
        })
    })
    return (
        <div
            className={`${styles['huang-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines lines="北京大学学生黄敬扶着电车向群" />
                <TypedLines
                    lines="众讲话“人民！武装你们自己！"
                    lastTimeTypedWords={14}
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
