import styles from '../../../../../assets/style/FirstAct/Black.module.less'
import '../../../../../assets/style/font.less'

const FirstAct: React.FC = () => {
    return (
        <div className={styles['background']}>
            <div className={styles['sentences-box']}>
                {`“九一八”事变之后，日本帝国
                主义加紧侵略中国。他们在东北
                地区推行殖民地化统治的同时， 
                把侵略魔爪一步步伸向华北，民
                族危机日益严重。`}
            </div>
        </div>
    )
}
export default FirstAct
