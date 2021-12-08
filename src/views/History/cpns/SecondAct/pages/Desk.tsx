import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/sec.module.less"

import desk from "assets/imgs/History/Second/desk.png"
import soldier from "assets/imgs/History/Second/soldier.png"
import emotion from "assets/imgs/History/Second/emotion.png"
import Line from "../../../../../components/Lines"

const Black: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["sec-bg-people"] + " " + styles["sec-bg"]} onClick={() => changeAct(2000)}>
        <article className={styles["sec-words"] + " animate__animated animate__fadeIn"}>
            <Line mode="word" time={20}>
                {`当国民党将于12月9日成立 “冀
                察政务委员会”的消息传来之时
                北平学联在中共北平临时工委的
                领导下 ，决定于9日举行学生大
                请愿。`}
            </Line>
        </article>
        <img src={desk} className={styles["sec-desk"]} />
        <img src={soldier} className={styles["sec-solider"] + " animate__animated animate__fadeInUp"} />
        <img src={emotion} className={styles["sec-emotion"] + " animate__animated animate__fadeIn"} />
    </div >)
}

export default Black