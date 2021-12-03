import styles from '../../../../../assets/style/FirstAct/student.module.less'
import 'animate.css'

const Student: React.FC = () => {
    return (
        <div className={styles['student-container']}>
            <div className={styles['hands']}>
                <div className={styles['sentences-box']}>
                    {`国民党政府坚持不抵抗政策，在
                  民族危亡时刻，北平爱国学生感
                  到“华北之大,已经安放不下一张
                  平静的书桌了！”`}
                </div>
            </div>
        </div>
    )
}
export default Student
