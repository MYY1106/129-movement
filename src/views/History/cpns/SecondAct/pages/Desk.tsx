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
            <Line mode="sentence">
                {`在会议室内，北平市学生联合会
            主席郭明秋说出会议决定“12月
            9日我们举行学生大请愿，反对
            华北自治！”`}
            </Line>
        </article>
        <img src={desk} className={styles["sec-desk"]} />
        <img src={soldier} className={styles["sec-solider"] + " animate__animated animate__fadeInUp"} />
        <img src={emotion} className={styles["sec-emotion"] + " animate__animated animate__fadeIn"} />
    </div>)
}

export default Black