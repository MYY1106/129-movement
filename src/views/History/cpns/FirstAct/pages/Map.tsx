import TypedLines from '../../../../../components/TypedLines'
import styles from '../../../../../assets/style/FirstAct/map.module.less'
import 'animate.css'

const Map: React.FC = () => {
    return (
        <div className={styles['map-container']}>
            <div className={styles['sentences-box']}>
                <TypedLines lines="日本的魔爪伸向华北地图，于1935" />
                <TypedLines lines="年发动华北事变。" lastTimeTypedWords={17} />
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