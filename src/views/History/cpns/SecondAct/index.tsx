import { useState, useEffect, TouchEvent, FC } from 'react';
import { Black, News, Letter, Envelope, Desk } from './pages'
import type { actions, vector, typeProps } from './type'

let time = 2000;

const SectionAct: FC<typeProps> = ({ nextAct }) => {

    const [act, setAct] = useState<actions>(0)

    let loading = true;

    let startPosition: vector = { x: 0, y: 0 }

    const changeAct = (t: number) => {
        if (!loading) {
            time = t
            act >= 4 ? setAct(0) : setAct(act + 1)
        }
    }

    const touchLetterStart = (e: TouchEvent) => {
        startPosition.x = e.targetTouches[0].clientX
        startPosition.y = e.targetTouches[0].clientY
    }

    const touchLetterEnd = (e: TouchEvent) => {
        const x = e.changedTouches[0].clientX
        const y = e.changedTouches[0].clientY
        if (Math.abs(x - startPosition.x) > 130 && Math.abs(y - startPosition.y) < 30) {
            setAct(act + 1)
        }
    }

    useEffect(() => {
        setTimeout(() => { loading = false; }, time)
    })

    return (<>
        {(() => {
            if (act === 0) {
                return (<Black changeAct={changeAct} />)
            } else if (act === 1) {
                return (<News changeAct={changeAct} />)
            } else if (act === 2) {
                return (
                    <Envelope start={touchLetterStart} end={touchLetterEnd}></Envelope>)
            } else if (act === 3) {
                return (<Letter changeAct={changeAct} />)
            } else if (act === 4) {
                return (<Desk changeAct={nextAct} />)
            }
        })()
        }
    </>)
}

export default SectionAct

