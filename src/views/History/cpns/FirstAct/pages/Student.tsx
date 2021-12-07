import { useEffect } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FirstAct/student.module.less'
import 'animate.css'

const Student: React.FC<PageProps> = ({ changeAct }) => {
    let divNode: HTMLDivElement | null,
        deskNode: HTMLDivElement | null,
        handsNode: HTMLDivElement | null,
        angerNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                handsNode?.classList.add(styles['show'])
                deskNode?.classList.add(styles['hidden'])
                resolve('show hands success!!')
            }, 4000)
        })
            .then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        angerNode?.classList.add(styles['show'])
                        resolve('show anger success!!')
                    }, 0)
                })
            })
            .then(() => {
                setTimeout(() => {
                    divNode?.addEventListener('click', () => {
                        ;(changeAct as Function)(2000)
                    })
                }, 2200)
            })
    })

    return (
        <div
            className={`${styles['student-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div
                className={styles['hands']}
                ref={currentNode => (deskNode = currentNode)}
            ></div>
            <div className={styles['sentences-box']}>
                <TypedLines
                    lines="日军全面侵略华北，国民党却坚"
                    fastForward={true}
                />
                <TypedLines
                    lines="持不抵抗，民族危亡时刻，爱国"
                    lastTimeTypedWords={14}
                    fastForward={true}
                />
                <TypedLines
                    lines="青年发出呐喊 “ 华北之大,已经"
                    lastTimeTypedWords={30}
                    fastForward={true}
                />
                <TypedLines
                    lines="安放不下一张平静的书桌了 ”"
                    lastTimeTypedWords={44}
                    fastForward={true}
                />
            </div>
            <div
                className={`${styles['anger']} animate__animated animate__fadeIn`}
                ref={currentNode => (angerNode = currentNode)}
            ></div>
            <div
                className={`${styles['show-hands']} animate__animated animate__bounce`}
                ref={currentNode => (handsNode = currentNode)}
            ></div>
        </div>
    )
}
export default Student
