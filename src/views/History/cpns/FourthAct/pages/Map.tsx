import { FC, useRef } from 'react'
import { fnProps } from '../type'
import Line from '../../../../../components/Lines'

import styles from '../four.module.less'
import fire1 from 'assets/imgs/History/Fourth/fire1.png'
import fire2 from 'assets/imgs/History/Fourth/fire2.png'
import fire3 from 'assets/imgs/History/Fourth/fire3.png'
import fire4 from 'assets/imgs/History/Fourth/fire4.png'
import fire5 from 'assets/imgs/History/Fourth/fire5.png'
import fire6 from 'assets/imgs/History/Fourth/fire6.png'
import fire7 from 'assets/imgs/History/Fourth/fire7.png'
import fire8 from 'assets/imgs/History/Fourth/fire8.png'
import fire9 from 'assets/imgs/History/Fourth/fire9.png'
import map from 'assets/imgs/History/Fourth/map.png'

const Map: FC<fnProps> = ({ changeAct }) => {
    let timer: NodeJS.Timeout
    let timer2: NodeJS.Timeout
    let loading = false
    const firefather = useRef<HTMLDivElement>(null)
    const startMove = () => {
        timer = setTimeout(() => {
            firefather.current!.children[2].classList.add(styles['move1'])
            firefather.current!.children[4].classList.add(styles['move3'])
            firefather.current!.children[5].classList.add(styles['move4'])
            firefather.current!.children[6].classList.add(styles['move5'])
            firefather.current!.children[7].classList.add(styles['move6'])
            firefather.current!.children[8].classList.add(styles['move7'])
            firefather.current!.children[9].classList.add(styles['move8'])
            firefather.current!.children[10].classList.add(styles['move9'])
            timer2 = setTimeout(() => {
                loading = true
            }, 4500)
        }, 1000)
    }
    const cancelMove = () => {
        if (timer) {
            clearTimeout(timer)
        }
    }
    const readyChange = () => {
        if (loading) changeAct(4500)
    }

    return (
        <div
            ref={firefather}
            className={styles['four-bg-map'] + ' ' + styles['four-bg']}
            onClick={readyChange}
        >
            <div className={styles['four-map']}></div>
            <img src={map} className={styles['four-map']} alt="map" />
            <img src={fire1} className={styles['four-fire1']} alt="fire" />
            <div
                className={styles['four-fire2']}
                onTouchStart={startMove}
                onTouchEnd={cancelMove}
            />
            <img src={fire3} className={styles['four-fire3']} alt="fire" />
            <img src={fire4} className={styles['four-fire4']} alt="fire" />
            <img src={fire5} className={styles['four-fire5']} alt="fire" />
            <img src={fire6} className={styles['four-fire6']} alt="fire" />
            <img src={fire7} className={styles['four-fire7']} alt="fire" />
            <img src={fire8} className={styles['four-fire8']} alt="fire" />
            <img src={fire9} className={styles['four-fire9']} alt="fire" />
            <div className={styles['four-words']}>
                <Line mode="word" time={90}>
                    {`北平学生的爱国斗争，得到了各
界爱国人士的支持与响应。`}
                </Line>
            </div>
            <div
                className={
                    styles['four-reminder'] +
                    ' animate__animated animate__fadeIn'
                }
            >
                长按火焰声援北平！
            </div>
        </div>
    )
}

export default Map
