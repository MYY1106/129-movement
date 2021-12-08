import { useEffect } from 'react'
import Lines from '../../../../../components/Lines'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FifthAct/resolution.module.less'
import 'animate.css'

const Resolution: React.FC<PageProps> = ({ changeActive }) => {
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
                    changeActive('isResolutionActive', false)
                    changeActive('isProposalActive', true)
                },
                true
            )
        })
        new Promise(resolve => {
            setTimeout(() => {
                passNode?.classList.add(styles['show'])
                resolve('show resolution success!!')
            }, 7600)
        })
    }, [])
    return (
        <div
            className={`${styles['resolution-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines
                    lines="12月16日清晨，北平各校学生从"
                    fastForward={true}
                />
                <TypedLines
                    lines="四面八方涌向天桥，举行了3万"
                    lastTimeTypedWords={16}
                    fastForward={true}
                />
                <TypedLines
                    lines="多人的市民大会，大会通过了组"
                    lastTimeTypedWords={30}
                    fastForward={true}
                />
                <TypedLines
                    lines="织民众，共同抗敌，誓死反对日"
                    lastTimeTypedWords={44}
                    fastForward={true}
                />
                <TypedLines
                    lines="本帝国主义侵略中国等决议案。"
                    lastTimeTypedWords={58}
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
