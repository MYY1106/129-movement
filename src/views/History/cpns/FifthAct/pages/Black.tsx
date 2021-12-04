import { useEffect } from 'react'
import styles from '../../../../../assets/style/FifthAct/black.module.less'
import Lines from '../../../../../components/Lines'
import 'animate.css'

const Black: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null
    useEffect(() => {
        setTimeout(() => {
            divNode?.addEventListener('click', () => {
                changeActive('isBlackActive', false)
                changeActive('isProposalActive', true)
            })
        }, 2000)
    })
    return (
        <div
            className={`${styles['background']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentences-box']}>
                <Lines mode="sentence">{`一 二·九运动广泛地宣传了中国\n共产党与国民党停止内战、一致\n对外的抗日主张，掀起了全国抗\n日救国运动的新高潮`}</Lines>
            </div>
        </div>
    )
}
export default Black
