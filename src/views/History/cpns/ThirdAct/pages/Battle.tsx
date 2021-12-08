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
            }, 3400)
        }).then(() => {
            setTimeout(() => {
                divNode!.addEventListener('click', () => {
                    ;(changeAct as Function)(2000)
                })
            }, 4700)
        })
    })
    return (
        <div
            className={`${styles['battle-container']}  animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines
                    lines="当游行队伍经西单和东长安街"
                    fastForward={true}
                />
                <TypedLines
                    lines="时，学生遭到手持大刀、皮鞭、"
                    lastTimeTypedWords={13}
                    fastForward={true}
                />
                <TypedLines
                    lines="木棍、枪支的国民党军警袭击，"
                    lastTimeTypedWords={27}
                    fastForward={true}
                />
                <TypedLines
                    lines="30多人被捕，数百人受伤。"
                    lastTimeTypedWords={41}
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
export default Battle
