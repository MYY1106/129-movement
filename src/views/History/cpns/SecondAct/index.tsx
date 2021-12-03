import { useState, useEffect, TouchEvent, FC } from 'react';
import { transition } from '../../utils';
import styles from "../../styles/sec.module.less";
import child from "assets/imgs/History/Second/child.png"
import newspapers from "assets/imgs/History/Second/newspaper.png"

import envelope from "assets/imgs/History/Second/envelope.png"
import line from "assets/imgs/History/Second/line.png"
import letter from "assets/imgs/History/Second/letter.png"
import letterWord from "assets/imgs/History/Second/letter-word.png"
import desk from "assets/imgs/History/Second/desk.png"
import soldier from "assets/imgs/History/Second/soldier.png"
import emotion from "assets/imgs/History/Second/emotion.png"
import Line from "../../../../components/Lines"

enum actions {
    one, two, three, four, five
}

interface vector {
    x: number;
    y: number
}

interface typeProps {
    nextAct: Function
}

let time = 2000;

const SectionAct: FC<typeProps> = ({ nextAct }) => {

    const [act, setAct] = useState<actions>(0)

    let loading = true;

    let startPosition: vector = { x: 0, y: 0 }

    const changeAct = (t: number) => {
        if (!loading) {
            time = t
            act >= 4 ? setAct(0) : setAct(act + 1)
        }
    }

    const touchLetterStart = (e: TouchEvent) => {
        startPosition.x = e.targetTouches[0].clientX
        startPosition.y = e.targetTouches[0].clientY
    }

    const touchLetterEnd = (e: TouchEvent) => {
        const x = e.changedTouches[0].clientX
        const y = e.changedTouches[0].clientY
        if (Math.abs(x - startPosition.x) > 80 && Math.abs(y - startPosition.y) < 30) {
            setAct(act + 1)
        }
    }

    useEffect(() => {
        setTimeout(() => { loading = false; }, time)
    })

    return (<>
        {(() => {
            if (act === 0) {
                return (<div className={styles["sec-bg-black"] + " " + styles["sec-bg"]} onClick={() => changeAct(2000)}>
                    <main className={styles["sec-words"] + " animate__animated animate__fadeIn"} >
                        侵略行为激起北平各阶层人民的
                        极大愤慨， 中国共产党人向劳
                        动 大众发出“抵御侵略、保卫
                        华北” 的号召。
                    </main>
                </div>)
            } else if (act === 1) {
                return (<div className={styles["sec-bg-bicycle"] + " " + styles["sec-bg"]} onClick={() => changeAct(2000)}>
                    <article className={styles["sec-words"]}>
                        <Line mode="sentence">
                            {`报童在街上喊着卖报，报纸上写
                              着：“中共党中央发布《八一宣
                              言》，号召立即停止内战、一致
                              抗日，结成抗日民族统一战线。”`}
                        </Line>
                    </article>
                    <img src={child} className={styles["sec-child"] + " animate__animated animate__fadeIn"} />
                    <img src={newspapers} className={styles["sec-newspaper"] + " animate__animated animate__fadeIn"} />
                </div>)
            } else if (act === 2) {
                return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]} onTouchStart={e => touchLetterStart(e)} onTouchEnd={e => touchLetterEnd(e)}>
                    <img src={line} className={styles["sec-line"]} />
                    <img src={envelope} className={styles["sec-envelope"]} />
                </div>)
            } else if (act === 3) {
                return (<div className={styles["sec-bg-door"] + " " + styles["sec-bg"]} onClick={() => changeAct(2000)}>
                    <article className={styles["sec-words"]}>
                        <Line mode="sentence">
                            {`一名共产党员打开信封，信封上
                            写着“日本人要求国民政府在12
                            月9日成立“冀察政务委员会”
                            我们必须要马上行动！”`}
                        </Line>
                    </article>
                    <img src={letterWord} className={styles["sec-letter-words"] + " animate__animated animate__fadeIn"} />
                    <img src={letter} className={styles["sec-letter"]} />
                </div>)
            } else if (act === 4) {
                return (<div className={styles["sec-bg-people"] + " " + styles["sec-bg"]} onClick={() => nextAct(6000)}>
                    <article className={styles["sec-words"] + " animate__animated animate__fadeIn"}>
                        <Line mode="sentence">
                            {`在会议室内，北平市学生联合会
                            主席郭明秋说出会议决定“12月
                            9日我们举行学生大请愿，反对
                            华北自治！”`}
                        </Line>
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

