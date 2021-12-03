import { FC } from 'react'
import { fnProps } from '../type'

import styles from "../../../styles/four.module.less"
import photo1 from "assets/imgs/History/Fourth/photo1.png"
import photo2 from "assets/imgs/History/Fourth/photo2.png"
import photo3 from "assets/imgs/History/Fourth/photo3.png"

const Photos: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["four-bg-map"] + " " + styles["four-bg"]} onClick={() => changeAct(2000)}>
        <img src={photo1} className={styles["four-photo1"] + " animate__animated animate__fadeInUp"} alt="photo" />
        <img src={photo2} className={styles["four-photo2"] + " animate__animated animate__fadeInUp"} alt="photo" />
        <img src={photo3} className={styles["four-photo3"] + " animate__animated animate__fadeInUp"} alt="photo" />
    </div>)
}

export default Photos