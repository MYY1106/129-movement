interface ScrollNumberProps {
    num: number
    lastTime: number
    speed: number
    oldNum: number
    height: number
}

interface Style {
    '--i': number
    '--oldi': number
    '--color': string
    '--width': string
    '--height': string
    '--duration': string
    animation?: string
    transform?: string
}
