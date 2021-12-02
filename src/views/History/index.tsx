import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { transition } from "./utils/index"

export default function History() {
	const link = useRef(null)

	useEffect(() => {
		transition(link.current!, true)
	})

	return (<>
		<Link to="/end" ref={link}>历史回顾</Link>
	</>)
}
