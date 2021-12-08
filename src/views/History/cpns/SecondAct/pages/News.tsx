import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/sec.module.less"
import child from "assets/imgs/History/Second/child.png"
import newspapers from "assets/imgs/History/Second/newspaper.png"
import Line from "../../../../../components/Lines"

const News: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["sec-bg-bicycle"] + " " + styles["sec-bg"]} onClick={() => changeAct(2000)}>
        <article className={styles["sec-words"]}>
            <Line mode="word" time={30}>
                {`中共党中央发布《八一宣言》，
                号召立即停止内战，一致抗日，
                结成抗日民族统一战线。`}
            </Line>
        </article>
        <img src={child} className={styles["sec-child"] + " animate__animated animate__fadeIn"} />
        <img src={newspapers} className={styles["sec-newspaper"] + " animate__animated animate__fadeIn"} />
    </div>)
}

export default News