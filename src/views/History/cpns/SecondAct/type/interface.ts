interface vector {
    x: number;
    y: number
}

interface fnProps {
    changeAct: Function
}

interface typeProps {
    nextAct: Function
}


interface touchProps {
    start: Function,
    end: Function
}

export type { vector, typeProps, fnProps, touchProps }