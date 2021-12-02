import { useRef, useEffect, useMemo } from 'react'
import Typed from 'typed.js'

const TypedLines: React.FC<TypedLinesProps> = (props: TypedLinesProps) => {
    const element: React.RefObject<HTMLSpanElement> =
        useRef<HTMLSpanElement>(null) // 引用包含动画的DOM元素
    const typedItem = useRef<Typed | null>(null) // 储存Typed对象

    useEffect(() => {
        typedItem.current = new Typed(element.current as string | Element, {
            strings: [props.lines],
            startDelay:
                (props.lastTimeTypedWords as number) * 210 || props.startDelay,
            typeSpeed: 150,
            showCursor: false,
        })
        return () => {
            typedItem.current!.destroy()
        }
    }, [])

    return (
        <div className="wrap">
            <div className="type-wrap">
                <span style={{ whiteSpace: 'pre' }} ref={element} />
            </div>
        </div>
    )
}

export default TypedLines
