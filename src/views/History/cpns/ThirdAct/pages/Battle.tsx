import { useEffect, useState } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/ThirdAct/battle.module.less'
import 'animate.css'

const Battle: React.FC<PageProps> = ({ changeAct }) => {
    let divNode: HTMLDivElement | null,
        newspaperContentNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                newspaperContentNode?.classList.add(styles['show'])
                resolve('show paper success!!')
            }, 1500)
        }).then(() => {
            setTimeout(() => {
                divNode!.addEventListener('click', () => {
                    ;(changeAct as Function)(2000)
                })
            }, 4000)
        })
    })
    return (
        <div
            className={`${styles['battle-container']}  animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines lines="手无寸铁的同学们与手持皮鞭、" />
                <TypedLines
                    lines="木棍的国民党军警展开了搏斗。"
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
export default Battle
