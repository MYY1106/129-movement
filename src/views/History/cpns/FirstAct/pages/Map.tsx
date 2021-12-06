import { useEffect, useState } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FirstAct/map.module.less'
import 'animate.css'

const Map: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null
    useEffect(() => {
        setTimeout(() => {
            divNode!.addEventListener('click', () => {
                changeActive('isContractActive', true)
                changeActive('isMapActive', false)
            })
        }, 5500)
    }, [])
    return (
        <div
            className={`${styles['map-container']} animate__animated animate__fadeIn'
            `}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentences-box']}>
                <TypedLines
                    lines="1935年，日本侵略军在国民党的不"
                    fastForward={true}
                />
                <TypedLines
                    lines="抵抗政策下更加猖獗，继九一八事"
                    lastTimeTypedWords={16}
                    fastForward={true}
                />
                <TypedLines
                    lines="变后，又密谋策划，蚕食侵犯华北"
                    lastTimeTypedWords={31}
                    fastForward={true}
                />
                <TypedLines
                    lines="地区。"
                    lastTimeTypedWords={46}
                    fastForward={true}
                />
            </div>
            <div
                className={`${styles['map']} animate__animated animate__fadeIn`}
            ></div>
            <div
                className={`${styles['top-left-hand']} animate__animated animate__fadeInTopLeft`}
            ></div>
            <div
                className={`${styles['bottom-left-hand']} animate__animated  animate__fadeInBottomLeft`}
            ></div>
            <div
                className={`${styles['middle-right-hand']} animate__animated  animate__fadeInBottomRight`}
            ></div>
            <div
                className={`${styles['bottom-right-hand']} animate__animated  animate__fadeInBottomRight`}
            ></div>
        </div>
    )
}
export default Map
