import { FC } from 'react'
import { touchProps } from '../type'
import styles from "../../../styles/sec.module.less"
import envelope from "assets/imgs/History/Second/envelope.png"
import line from "assets/imgs/History/Second/line.png"

const Envelope: FC<touchProps> = ({ start, end }) => {
    return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]} onTouchStart={e => start(e)} onTouchEnd={e => end(e)}>
        <div className={styles['sec-reminder']}>沿虚线划动打开信封</div>
        <img src={line} className={styles["sec-line"]} />
        <img src={envelope} className={styles["sec-envelope"]} />
    </div>)
}

export default Envelope