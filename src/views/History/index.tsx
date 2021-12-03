import { Link } from 'react-router-dom'
import { useRef, useEffect, useState, FC } from 'react'
import { transition } from "./utils/index"
// import { FirstAct, SectionAct, ThridAct, FourthAct, FifthAct, SixthAct } from "./cpns"
import { SecondAct, FourthAct, SixthAct } from "./cpns"

enum actions {
	one, two, three, four, five, six
}


const History: FC = () => {
	const [act, setAct] = useState<actions>(2)
	const [time, setTime] = useState<number>(2000)

	let loading = true;

	const changeAct = (t: number) => {
		if (!loading) {
			setTime(t)
			act >= 5 ? setAct(0) : setAct(act + 1)
		}
	}

	useEffect(() => {
		setTimeout(() => { loading = false; }, time)
	})

	return (<>
		{(() => {
			if (act === 0) {
				return (
					<SecondAct nextAct={changeAct} />
				)
			} else if (act === 1) {
				return (
					<FourthAct nextAct={changeAct} />
				)
			} else if (act === 2) {
				return (
					<SixthAct />
				)
			}
			// else if (act === 3) {
			// 	return ()
			// } else if (act === 4) {
			// 	return ()
			// } else if (act === 5) {
			// 	return ()
			// }
		})()}
	</>)
}

export default History