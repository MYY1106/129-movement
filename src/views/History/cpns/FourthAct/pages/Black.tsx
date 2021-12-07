import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../four.module.less"

const Black: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["four-bg-black"] + " " + styles["four-bg"]} onClick={() => changeAct(4500)}>
        <article className={styles["four-words"] + " animate__animated animate__fadeIn"}>
            “一二·九”的抗日怒吼，震撼
            <br />
            了古都北平，全国各阶级人民纷
            <br />
            纷响应，举行罢课、罢工等运动。
        </article>
    </div>)
}

export default Black