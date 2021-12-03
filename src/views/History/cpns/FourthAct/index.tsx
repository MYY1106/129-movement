import { ReactElement, useEffect, useState, FC } from "react";
import Line from "../../../../components/Lines"
import styles from "../../styles/four.module.less"
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
import photo1 from "assets/imgs/History/Fourth/photo1.png"
import photo2 from "assets/imgs/History/Fourth/photo2.png"
import photo3 from "assets/imgs/History/Fourth/photo3.png"

enum actions {
    one, two, three
}

interface typeProps {
    nextAct: Function
}


let time = 2000;
const FourthAct: FC<typeProps> = ({ nextAct }) => {
    const [act, setAct] = useState<actions>(0)
    let loading = true;

    const changeAct = (t: number) => {
        if (!loading) {
            time = t
            console.log(time)
            act >= 2 ? setAct(0) : setAct(act + 1)
        }
    }
    useEffect(() => {
        console.log(time)
        setTimeout(() => { loading = false; }, time)
    })

    return (
        <div>
            {(() => {
                if (act === 0) {
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
                } else if (act === 1) {
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
                else if (act === 2) {
                    return (<div className={styles["four-bg-map"] + " " + styles["four-bg"]} onClick={() => nextAct(2000)}>
                        <img src={photo1} className={styles["four-photo1"] + " animate__animated animate__fadeInUp"} alt="photo" />
                        <img src={photo2} className={styles["four-photo2"] + " animate__animated animate__fadeInUp"} alt="photo" />
                        <img src={photo3} className={styles["four-photo3"] + " animate__animated animate__fadeInUp"} alt="photo" />
                    </div>);
                }
            })()}
        </div >)
}

export default FourthAct