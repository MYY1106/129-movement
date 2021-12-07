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
                console.log(1)
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
                    lines="当游行队伍行至西单牌楼平津卫"
                    fastForward={true}
                />
                <TypedLines
                    lines="戍司令部附近时，遇到军警的阻"
                    lastTimeTypedWords={14}
                    fastForward={true}
                />
                <TypedLines
                    lines="拦和袭击。军警挥舞皮鞭、木棍"
                    lastTimeTypedWords={28}
                    fastForward={true}
                />
                <TypedLines
                    lines="抽打手无寸铁的爱国学生。同学"
                    lastTimeTypedWords={42}
                    fastForward={true}
                />
                <TypedLines
                    lines="们与军警展开了搏斗，当场有数"
                    lastTimeTypedWords={56}
                    fastForward={true}
                />
                <TypedLines
                    lines="十人被捕。"
                    lastTimeTypedWords={70}
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
