interface FirstActProps {
    nextAct: (t: number) => void
}

interface PageProps {
    changeActive: (pageActive: string, isActive: boolean) => void
    changeAct?: Function
}
