import { ReactElement, useState } from "react";
import Line from "../../../../components/Lines"
import styles from "../../styles/four.module.less"

const FourthAct = (): ReactElement => {
    const [act, setAct] = useState<"part1" | "part2" | "part3" | "part4" | "part5">("part1")
    return (
        <div>
            {(() => {
                if (act === "part1") {
                    return (<div className={styles["sec-bg-black"] + " " + styles["sec-bg"]}>
                        <article className={styles["sec-words"]}>
                            <Line mode="sentence">
                                {`
                                “一二·九”的抗日怒吼，震撼
                                了古都北平，全国各阶级人民纷
                                纷响应，举行罢课、罢工等运动。
                            `}
                            </Line>
                        </article>
                    </div>)
                }
                // } else if (act === 'part2') {
                //     return ()
                // } else if (act === 'part3') {
                //     return ()
                // } else if (act === 'part4') {
                //     return ()
                // } else if (act === 'part5') {
                //     return ()
                // }
            })()}
        </div>)
}

export default FourthAct