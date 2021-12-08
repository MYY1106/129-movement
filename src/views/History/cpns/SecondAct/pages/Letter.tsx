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
                {`1935年11月，李常青、彭涛等共
                产党员在党中央的指导下，成立
                了中共北平临时工作委员会，主
                要负责组织救亡运动。`}
            </Line>
        </article>
        <img src={letterWord} className={styles["sec-letter-words"] + " animate__animated animate__fadeIn"} />
        <img src={letter} className={styles["sec-letter"]} />
    </div>)
}

export default Letter