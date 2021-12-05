import { useEffect } from 'react'
import Lines from '../../../../../components/Lines'
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
            }, 3000)
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
                }, 1000)
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
                <Lines mode="sentence">
                    {`国民党政府坚持不抵抗政策，在\n民族危亡时刻，北平爱国学生感\n到“华北之大,已经安放不下一张\n平静的书桌了！”`}
                </Lines>
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
