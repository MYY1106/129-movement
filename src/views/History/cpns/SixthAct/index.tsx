import { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../../styles/six.module.less'

const SixthAct: FC = () => {
    let loading = true;
    const history = useHistory()
    const toBeEnd = () => {
        if (!loading) {

            history.push('./end')
        }
    }

    useEffect(() => {
        setTimeout(() => { loading = false; }, 3000)
    })
    return (<div className={styles["six-bg-black"] + " " + styles["six-bg"]} onClick={toBeEnd}>
        <main className={styles["six-words"] + " animate__animated animate__fadeIn"} >
            一·二·九运动 ，它是伟大抗日战争的
            <br />
            准备， 这同五四运动是死一次大革
            <br />
            命的准备一样。 “一·二·九”推动了
            <br />
            “七 七”抗战，准备了“七 七”抗
            <br />
            战
            <br />
            一·二·九运动是动员全民族抗战的运
            <br />
            动,它准备了抗战的思想，准备了抗
            <br />
            战的人心，准备了抗战的干部
            <br />
            <br />
            <br />
            <div>——毛泽东</div>
        </main>
    </div>)
}

export default SixthAct