import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/sec.module.less"

const Black: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["sec-bg-black"] + " " + styles["sec-bg"]} onClick={() => changeAct(2000)}>
        <main className={styles["sec-words"] + " animate__animated animate__fadeIn"} >
            侵略行为激起北平各阶层人民的
            极大愤慨， 中国共产党人向劳
            动 大众发出“抵御侵略、保卫
            华北” 的号召。
        </main>
    </div>)
}

export default Black