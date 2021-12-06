import { useEffect } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FirstAct/contract.module.less'
import 'animate.css'

const Contract: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null
    useEffect(() => {
        setTimeout(() => {
            divNode!.addEventListener('click', () => {
                changeActive('isStudentActive', true)
                changeActive('isContractActive', false)
            })
        }, 6500)
    }, [])
    return (
        <div
            className={`${styles['contract-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div
                className={`${styles['sentences-box']} animate__animated animate__fadeIn`}
            >
                <TypedLines
                    lines="在日军的武力威胁下，国民党政"
                    fastForward={true}
                />
                <TypedLines
                    lines="府签下“何梅协定”和“秦土协"
                    fastForward={true}
                    lastTimeTypedWords={14}
                />
                <TypedLines
                    lines="定”把包括平津在内的河北、察"
                    fastForward={true}
                    lastTimeTypedWords={28}
                />
                <TypedLines
                    lines="哈尔两省的大部分主权奉送给日"
                    fastForward={true}
                    lastTimeTypedWords={42}
                />
                <TypedLines
                    lines="本。"
                    fastForward={true}
                    lastTimeTypedWords={56}
                />
            </div>
            <div className={styles['contract']}>
                <div
                    className={`${styles['contract-content']} animate__animated animate__fadeIn`}
                ></div>
            </div>
        </div>
    )
}
export default Contract
