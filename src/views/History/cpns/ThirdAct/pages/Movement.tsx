import { useEffect } from 'react'
import Lines from '../../../../../components/Lines'
import styles from '../../../../../assets/style/ThirdAct/movement.module.less'
import 'animate.css'

const Movement: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null,
        newspaperContentNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                newspaperContentNode?.classList.add(styles['show'])
                resolve('show newspaper success!!')
            }, 1500)
        }).then(() => {
            setTimeout(() => {
                divNode!.addEventListener('click', () => {
                    changeActive('isMovementActive', false)
                    changeActive('isHuangActive', true)
                })
            }, 2200)
        })
    })
    return (
        <div
            className={`${styles['movement-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <Lines mode="sentence">
                    {`游行画面，横幅口号“全国武装\n起来，保卫华北！”“反对防共\n自治运动！反对卖国的外交政\n策！”`}
                </Lines>
            </div>
            <div className={styles['newspaper']}></div>
            <div
                className={`${styles['newspaper-and-content']} animate__animated animate__fadeIn`}
                ref={currentNode => (newspaperContentNode = currentNode)}
            ></div>
        </div>
    )
}
export default Movement
