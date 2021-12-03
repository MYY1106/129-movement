import { FC } from 'react'
import { fnProps } from '../type'

import styles from "../../../styles/four.module.less"
import fire1 from "assets/imgs/History/Fourth/fire1.png"
import fire2 from "assets/imgs/History/Fourth/fire2.png"
import fire3 from "assets/imgs/History/Fourth/fire3.png"
import fire4 from "assets/imgs/History/Fourth/fire4.png"
import fire5 from "assets/imgs/History/Fourth/fire5.png"
import fire6 from "assets/imgs/History/Fourth/fire6.png"
import fire7 from "assets/imgs/History/Fourth/fire7.png"
import fire8 from "assets/imgs/History/Fourth/fire8.png"
import fire9 from "assets/imgs/History/Fourth/fire9.png"
import map from "assets/imgs/History/Fourth/map.png"

const Map: FC<fnProps> = ({ changeAct }) => {
    return (<div className={styles["four-bg-map"] + " " + styles["four-bg"]} onClick={() => changeAct(2000)}>
        {/* <main className={styles["four-map"]}></main> */}
        <img src={map} className={styles["four-map"]} alt="map" />
        <img src={fire1} className={styles["four-fire1"]} alt="fire" />
        <img src={fire2} className={styles["four-fire2"]} alt="fire" />
        <img src={fire3} className={styles["four-fire3"]} alt="fire" />
        <img src={fire4} className={styles["four-fire4"]} alt="fire" />
        <img src={fire5} className={styles["four-fire5"]} alt="fire" />
        <img src={fire6} className={styles["four-fire6"]} alt="fire" />
        <img src={fire7} className={styles["four-fire7"]} alt="fire" />
        <img src={fire8} className={styles["four-fire8"]} alt="fire" />
        <img src={fire9} className={styles["four-fire9"]} alt="fire" />
    </div>)
}

export default Map