import { useEffect, useState, FC } from "react";
import { Black, Map, Photos } from './pages/index'
import { actions, typeProps } from './type'

let time = 2000;
const FourthAct: FC<typeProps> = ({ nextAct }) => {
    const [act, setAct] = useState<actions>(0)
    let loading = true;

    const changeAct = (t: number) => {
        if (!loading) {
            time = t
            console.log(time)
            act >= 2 ? setAct(0) : setAct(act + 1)
        }
    }
    useEffect(() => {
        console.log(time)
        setTimeout(() => { loading = false; }, time)
    })

    return (
        <div>
            {(() => {
                if (act === 0) {
                    return (<Black changeAct={changeAct} />)
                } else if (act === 1) {
                    return (<Map changeAct={changeAct} />)
                } else if (act === 2) {
                    return (<Photos changeAct={nextAct} />);
                }
            })()}
        </div >)
}

export default FourthAct