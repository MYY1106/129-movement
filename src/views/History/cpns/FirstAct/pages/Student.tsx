import { useEffect } from 'react'
import styles from '../../../../../assets/style/FirstAct/student.module.less'
import 'animate.css'

const Student: React.FC<PageProps> = ({ changeAct }) => {
    let divNode: HTMLDivElement | null,
        handsNode: HTMLDivElement | null,
        angerNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                handsNode?.classList.add(styles['show-hands'])
                resolve('show hands success!!')
            }, 500)
        })
            .then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        angerNode?.classList.add(styles['show-anger'])
                        resolve('show anger success!!')
                    }, 500)
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
                ref={currentNode => (handsNode = currentNode)}
            >
                <div className={styles['sentences-box']}>
                    {`国民党政府坚持不抵抗政策，在
                  民族危亡时刻，北平爱国学生感
                  到“华北之大,已经安放不下一张
                  平静的书桌了！”`}
                </div>
            </div>
            <div
                className={styles['anger']}
                ref={currentNode => (angerNode = currentNode)}
            ></div>
        </div>
    )
}
export default Student
