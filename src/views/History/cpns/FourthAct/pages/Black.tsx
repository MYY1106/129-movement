import { FC } from 'react'
import { fnProps } from '../type'
import styles from "../../../styles/four.module.less"

const Black: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["four-bg-black"] + " " + styles["four-bg"]} onClick={() => changeAct(4500)}>
        <article className={styles["four-words"] + " animate__animated animate__fadeIn"}>
            在会议室内，北平市学生联合会
            <br />
            主席郭明秋说出会议决定“12月
            <br />
            9日我们举行学生大请愿，反对
            <br />
            华北自治！”
        </article>
    </div>)
}

export default Black