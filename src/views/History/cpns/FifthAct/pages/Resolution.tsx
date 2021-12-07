import { useEffect } from 'react'
import Lines from '../../../../../components/Lines'
import TypedLines from '../../../../../components/TypedLines'
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
                resolve('show resolution success!!')
            }, 5600)
        })
    }, [])
    return (
        <div
            className={`${styles['resolution-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines
                    lines="1 2月9日举行的市民大会通过了"
                    fastForward={true}
                />
                <TypedLines
                    lines="反对冀察政务委员会，要求停止"
                    lastTimeTypedWords={16}
                    fastForward={true}
                />
                <TypedLines
                    lines="内战、一致对外，争取抗日等 8"
                    lastTimeTypedWords={30}
                    fastForward={true}
                />
                <TypedLines
                    lines="个决议案"
                    lastTimeTypedWords={45}
                    fastForward={true}
                />
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
