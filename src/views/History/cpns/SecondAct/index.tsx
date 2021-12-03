import { ReactElement, useState } from 'react';
import { transition } from '../../utils';
import styles from "../../styles/sec.module.less";
import TypedLines from "../../../../components/TypedLines"
import child from "assets/imgs/History/Second/child.png"
import newspapers from "assets/imgs/History/Second/newspaper.png"

import envelope from "assets/imgs/History/Second/envelope.png"
import line from "assets/imgs/History/Second/line.png"
import letter from "assets/imgs/History/Second/letter.png"
import letterWord from "assets/imgs/History/Second/letter-word.png"
import desk from "assets/imgs/History/Second/desk.png"
import soldier from "assets/imgs/History/Second/soldier.png"
import emotion from "assets/imgs/History/Second/emotion.png"


const SectionAct = (): ReactElement => {

    const [act, setAct] = useState<"part1" | "part2" | "part3" | "part4" | "part5">("part5")

    return (<>
        {(() => {
            if (act === "part1") {
                return (<div className={styles["sec-bg-black"] + " " + styles["sec-bg"]}>
                    <main className={styles["sec-words"]}>
                        侵略行为激起北平各阶层人民的
                        <br />
                        极大愤慨， 中国共产党人向劳
                        <br />
                        动 大众发出“抵御侵略、保卫
                        <br />
                        华北” 的号召。
                    </main>
                </div>)
            } else if (act === 'part2') {
                return (<div className={styles["sec-bg-bicycle"] + " " + styles["sec-bg"]}>
                    <article className={styles["sec-words"]}>
                        报童在街上喊着卖报，报纸上写
                        <br />
                        着：“中共党中央发布《八一宣
                        <br />
                        言》，号召立即停止内战、一致
                        <br />
                        抗日，结成抗日民族统一战线。”
                    </article>
                    <img src={child} className={styles["sec-child"] + " animate__animated animate__fadeIn"} />
                    <img src={newspapers} className={styles["sec-newspaper"] + " animate__animated animate__fadeIn"} />
                </div>)
            } else if (act === 'part3') {
                return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]}>
                    <img src={line} className={styles["sec-line"]} />
                    <img src={envelope} className={styles["sec-envelope"]} />
                </div>)
            } else if (act === 'part4') {
                return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]}>
                    <article className={styles["sec-words"]}>
                        一名共产党员打开信封，信封上
                        <br />
                        写着“日本人要求国民政府在12
                        <br />
                        月9日成立“冀察政务委员会”
                        <br />
                        我们必须要马上行动！”
                    </article>
                    <img src={letterWord} className={styles["sec-letter-words"] + " animate__animated animate__fadeIn"} />
                    <img src={letter} className={styles["sec-letter"]} />
                </div>)
            } else if (act === 'part5') {
                return (<div className={styles["sec-bg-people"] + " " + styles["sec-bg"]}>
                    <article className={styles["sec-words"]}>
                        在会议室内，北平市学生联合会
                        <br />
                        主席郭明秋说出会议决定“12月
                        <br />
                        9日我们举行学生大请愿，反对
                        <br />
                        华北自治！”
                    </article>
                    <img src={desk} className={styles["sec-desk"]} />
                    <img src={soldier} className={styles["sec-solider"] + " animate__animated animate__fadeInUp"} />
                    <img src={emotion} className={styles["sec-emotion"] + " animate__animated animate__fadeIn"} />
                </div>)
            }
        })()
        }
    </>)
}

export default SectionAct

