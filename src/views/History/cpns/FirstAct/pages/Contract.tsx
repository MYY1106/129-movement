import styles from '../../../../../assets/style/FirstAct/contract.module.less'
import 'animate.css'

const Contract: React.FC = () => {
    return (
        <div className={styles['contract-container']}>
            <div
                className={`${styles['sentences-box']} animate__animated animate__fadeIn`}
            >
                {`国民党政府签下“何梅协定”和\n“秦土协定”把包括平津在内的\n河北、察哈尔两省的大部分主权\n奉送给日本。`}
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
