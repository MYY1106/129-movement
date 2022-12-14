import { useEffect, useState, FC } from 'react'
import {
    FirstAct,
    SecondAct,
    ThirdAct,
    FourthAct,
    FifthAct,
    SixthAct,
} from './cpns'

enum actions {
    one,
    two,
    three,
    four,
    five,
    six,
}

const History: FC = () => {
    const [act, setAct] = useState<actions>(0)
    const [time, setTime] = useState<number>(2000)

    let loading = true

    const changeAct = (t: number) => {
        if (!loading) {
            setTime(t)
            console.log(time)
            act >= 5 ? setAct(0) : setAct(act + 1)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            loading = false
        }, time)
    })

    return (
        <div style={{ backgroundColor: 'black', zIndex: '-100' }}>
            {(() => {
                if (act === 0) {
                    return <FirstAct nextAct={changeAct} />
                } else if (act === 1) {
                    return <SecondAct nextAct={changeAct} />
                } else if (act === 2) {
                    return <ThirdAct nextAct={changeAct} />
                } else if (act === 3) {
                    return <FourthAct nextAct={changeAct} />
                } else if (act === 4) {
                    return <FifthAct nextAct={changeAct} />
                } else if (act === 5) {
                    return <SixthAct />
                }
            })()}
        </div>
    )
}

export default History
