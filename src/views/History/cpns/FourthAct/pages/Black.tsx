import { FC } from 'react'
import { fnProps } from '../type'
import styles from '../four.module.less'

const Black: FC<fnProps> = ({ changeAct }) => {
    return (
        <div
            className={styles['four-bg-black'] + ' ' + styles['four-bg']}
            onClick={() => changeAct(4500)}
        >
            <div className={styles["four-title"] + ' animate__animated animate__fadeIn'}>声援北平</div>
            <article
                className={
                    styles['four-words'] + ' animate__animated animate__fadeIn'
                }
            >
                在北平学生斗争的影响下，天津、
                <br />
                保定、太原、杭州、上海、武汉、
                <br />
                成都、重庆、广州等城市先后爆
                <br />
                发学生的爱国行动，许多地方的
                <br />
                工人也进行罢工，形成了全国人
                <br />
                民抗日民主运动的新高潮。
            </article>
        </div>
    )
}

export default Black
