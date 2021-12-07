import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/sec.module.less"
import Line from "../../../../../components/Lines"
import letter from "assets/imgs/History/Second/letter.png"
import letterWord from "assets/imgs/History/Second/letter-word.png"


const Letter: FC<fnProps> = ({ changeAct }) => {
<<<<<<< HEAD
    return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]} onClick={() => changeAct(4500)}>
=======
    return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]} onClick={() => changeAct(4000)}>
>>>>>>> master
        <article className={styles["sec-words"]}>
            <Line mode="sentence">
                {`一名共产党员打开信封，信封上
                写着“日本人要求国民政府在12
                月9日成立“冀察政务委员会”
                我们必须要马上行动！”`}
            </Line>
        </article>
        <img src={letterWord} className={styles["sec-letter-words"] + " animate__animated animate__fadeIn"} />
        <img src={letter} className={styles["sec-letter"]} />
    </div>)
}

export default Letter