import { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../../styles/six.module.less'

const SixthAct: FC = () => {
    let loading = true
    const history = useHistory()
    const toBeEnd = () => {
        if (!loading) {
            history.push('./end')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            loading = false
        }, 3000)
    })
    return (
        <div
            className={styles['six-bg-black'] + ' ' + styles['six-bg']}
            onClick={toBeEnd}
        >
            <main
                className={
                    styles['six-words'] + ' animate__animated animate__fadeIn'
                }
            >
                一二九运动 ，它是伟大抗日战争
                <br />
                的准备，这同五四运动是一次大
                <br />
                革命的准备一样。“一二九”推
                <br />
                动了“七七”抗战，准备了“七
                <br />
                七”抗战。
                <br />
                一二九运动是动员全民族抗战的
                <br />
                运动，它准备了抗战的思想，准
                <br />
                备了抗战的人心，准备了抗战的
                <br />
                干部。
                <br />
                <br />
                <br />
                <div>——毛泽东</div>
            </main>
        </div>
    )
}

export default SixthAct
