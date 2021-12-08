import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/sec.module.less"

const Black: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["sec-bg-black"] + " " + styles["sec-bg"]} onClick={() => changeAct(6500)}>
        <div className={styles["sec-title"] + " animate__animated animate__fadeIn"}>事件背景</div>
        <main className={styles["sec-words"] + " animate__animated animate__fadeIn"} >
            日本帝国主义的侵略罪行和国民
            党反动政府的妥协退让，让各界
            爱国人士痛心疾首，也极大地激
            发了广大青年学生的爱国热情，
            他们为祖国的前途、民族的危亡
            而日夜忧虑。
        </main>
    </div>)
}

export default Black