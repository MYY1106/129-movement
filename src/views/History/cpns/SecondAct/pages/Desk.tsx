import { FC, useEffect } from 'react'
import { fnProps } from '../type'
import styles from '../../../styles/sec.module.less'

import desk from 'assets/imgs/History/Second/desk.png'
import soldier from 'assets/imgs/History/Second/soldier.png'
import emotion from 'assets/imgs/History/Second/emotion.png'
import Line from '../../../../../components/Lines'

const Black: FC<fnProps> = ({ changeAct }) => {
    let isloading = true
    const nextChange = () => {
        if (!isloading) {
            changeAct(2000)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            isloading = false
        }, 4000)
    })
    return (
        <div
            className={styles['sec-bg-people'] + ' ' + styles['sec-bg']}
            onClick={nextChange}
        >
            <article
                className={
                    styles['sec-words'] + ' animate__animated animate__fadeIn'
                }
            >
                <Line mode="word" time={20}>
                    {`在中共北平临时工委的领导下，
                    北平市大中学校学生联合会决定
                    于9日举行学生大请愿。`}
                </Line>
            </article>
            <img src={desk} className={styles['sec-desk']} />
            <img
                src={soldier}
                className={
                    styles['sec-solider'] +
                    ' animate__animated animate__fadeInUp'
                }
            />
            <img
                src={emotion}
                className={
                    styles['sec-emotion'] + ' animate__animated animate__fadeIn'
                }
            />
        </div>
    )
}

export default Black
