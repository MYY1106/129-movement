import { useEffect, useState } from 'react'
import Lines from '../../../../../components/Lines'
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
                <Lines mode="sentence">
                    {`上午11时许， 北平爱国学生和广\n大工人 、农民 、市民3万余人召\n开市民大会。图为黄敬同志扶着\n电车向群众讲话“人民！武装你\n们自己！”`}
                </Lines>
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
