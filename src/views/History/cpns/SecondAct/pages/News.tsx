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
                {`1935年8月1日，《八一宣言》发
                表，号召停止内战，组织全国统
                一的国防政府和抗日联军一致抗
                日。为一二九运动提供了思想准
                备。`}
            </Line>
        </article>
        <img src={child} className={styles["sec-child"] + " animate__animated animate__fadeIn"} />
        <img src={newspapers} className={styles["sec-newspaper"] + " animate__animated animate__fadeIn"} />
    </div>)
}

export default News