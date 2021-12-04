import { useEffect } from 'react'
import Lines from '../../../../../components/Lines'
import styles from '../../../../../assets/style/FifthAct/resolution.module.less'
import 'animate.css'

const Resolution: React.FC<PageProps> = ({ changeAct }) => {
    let divNode: HTMLDivElement | null,
        passNode: HTMLDivElement | null,
        sealNode: HTMLDivElement | null
    useEffect(() => {
        passNode?.addEventListener('click', function () {
            this.classList.add('animate__fadeOut')
            sealNode?.classList.add(styles['show'])
            divNode!.addEventListener(
                'click',
                () => {
                    ;(changeAct as Function)(2000)
                },
                true
            )
        })
        new Promise(resolve => {
            setTimeout(() => {
                passNode?.classList.add(styles['show'])
                resolve('show proposal success!!')
            }, 5000)
        })
    }, [])
    return (
        <div
            className={`${styles['resolution-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <Lines mode="sentence">{`通过了反对“冀察政务委员会”，\n要求停止内战、一致对外，收复\n东北失地，争取抗日和爱国自由\n的决议案`}</Lines>
            </div>
            <div className={styles['resolution']}>
                <div
                    className={`${styles['resolution-pass']} animate__animated animate__fadeIn`}
                    ref={currentNode => (passNode = currentNode)}
                ></div>
                <div
                    className={`${styles['resolution-seal']} animate__animated animate__bounceIn`}
                    ref={currentNode => (sealNode = currentNode)}
                ></div>
            </div>
        </div>
    )
}
export default Resolution
