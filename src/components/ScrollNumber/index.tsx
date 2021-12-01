import { useState, useEffect } from 'react'
import styles from '../../assets/style/scrollNumber.module.less'

const ScrollNumber: React.FC<ScrollNumberProps> = props => {
    let ListNode: HTMLUListElement | null
    const style: Style = {
        '--oldi': props.oldNum,
        '--i': props.num,
        '--color': 'skyblue',
        '--width': '30px',
        '--height': '25px',
        '--duration': props.speed + 's',
    }
    useEffect(() => {
        const addClassTimer = setTimeout(() => {
            ListNode?.classList.add(styles['number-animation'])
        }, 1500)

        const removeClassTimer = setTimeout(() => {
            ListNode?.classList.remove(styles['number-animation'])
            ListNode?.classList.add(styles['number-no-animation'])
        }, 1500 + props.lastTime * 1000)

        return () => {
            clearTimeout(addClassTimer)
            clearTimeout(removeClassTimer)
        }
    }, [])
    return (
        <div className={styles['scroll-number-box']} style={style}>
            <ul
                className={styles['scroll-number-list']}
                ref={currentNode => (ListNode = currentNode)}
            >
                <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>0</li>
            </ul>
        </div>
    )
}
export default ScrollNumber
