import { useEffect } from 'react'
import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FifthAct/proposal.module.less'
import 'animate.css'

const Proposal: React.FC<PageProps> = ({ changeActive }) => {
    let divNode: HTMLDivElement | null,
        proposalContentNode: HTMLDivElement | null
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                proposalContentNode?.classList.add(styles['show'])
                resolve('show proposal success!!')
            }, 3000)
        }).then(() => {
            divNode!.addEventListener('click', () => {
                changeActive('isProposalActive', false)
                changeActive('isPraiseActive', true)
            })
        })
    }, [])
    return (
        <div
            className={`${styles['proposal-container']} animate__animated animate__fadeIn`}
            ref={currentNode => (divNode = currentNode)}
        >
            <div className={styles['sentence-box']}>
                <TypedLines lines="《为援助北平学生救国运动告工友书》" />
            </div>
            <div className={styles['proposal']}></div>
            <div
                className={`${styles['proposal-and-content']} animate__animated animate__fadeIn`}
                ref={currentNode => (proposalContentNode = currentNode)}
            ></div>
        </div>
    )
}
export default Proposal
