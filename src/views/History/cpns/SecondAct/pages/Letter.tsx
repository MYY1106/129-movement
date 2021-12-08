import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/sec.module.less"
import Line from "../../../../../components/Lines"
import letter from "assets/imgs/History/Second/letter.png"
import letterWord from "assets/imgs/History/Second/letter-word.png"


const Letter: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]} onClick={() => changeAct(5500)}>
        <article className={styles["sec-words"]}>
            <Line mode="word" time={20}>
                {`12月6日， 我党收到消息， 在日
                本侵略者逼迫下，国民党将于12
                月9日成立“冀察政务委员会”，
                企图实现华北自治。 ”`}
            </Line>
        </article>
        <img src={letterWord} className={styles["sec-letter-words"] + " animate__animated animate__fadeIn"} />
        <img src={letter} className={styles["sec-letter"]} />
    </div>)
}

export default Letter