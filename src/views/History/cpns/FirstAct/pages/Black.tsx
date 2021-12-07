import { useEffect, useState } from 'react'
import styles from '../../../../../assets/style/FirstAct/black.module.less'
import '../../../../../assets/style/font.less'
import 'animate.css'

const Black: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null
    useEffect(() => {
        setTimeout(() => {
            divNode?.addEventListener('click', () => {
                changeActive('isMapActive', true)
                changeActive('isBlackActive', false)
            })
        }, 2000)
    }, [])
    return (
        <div
            className={styles['background']}
            ref={currentNode => (divNode = currentNode)}
        >
            <div
                className={`${styles['sentences-box']} animate__animated animate__fadeIn`}
            >
                {`“九一八”事变之后，日本帝国
                主义加紧侵略中国。他们在东北
                地区推行殖民地化统治的同时， 
                把侵略魔爪一步步伸向华北，民
                族危机日益严重。`}
            </div>
        </div>
    )
}
export default Black
