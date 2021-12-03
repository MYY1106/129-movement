import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/sec.module.less"
import child from "assets/imgs/History/Second/child.png"
import newspapers from "assets/imgs/History/Second/newspaper.png"
import Line from "../../../../../components/Lines"

const News: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["sec-bg-bicycle"] + " " + styles["sec-bg"]} onClick={() => changeAct(2000)}>
        <article className={styles["sec-words"]}>
            <Line mode="sentence">
                {`报童在街上喊着卖报，报纸上写
              着：“中共党中央发布《八一宣
              言》，号召立即停止内战、一致
              抗日，结成抗日民族统一战线。”`}
            </Line>
        </article>
        <img src={child} className={styles["sec-child"] + " animate__animated animate__fadeIn"} />
        <img src={newspapers} className={styles["sec-newspaper"] + " animate__animated animate__fadeIn"} />
    </div>)
}

export default News