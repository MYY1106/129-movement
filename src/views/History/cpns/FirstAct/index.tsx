import { useEffect, useState } from 'react'
import Map from './pages/Map'
import Black from './pages/Black'
import Contract from './pages/Contract'
import Student from './pages/Student'

const FirstAct: React.FC<FirstActProps> = ({ nextAct }) => {
    let timer: NodeJS.Timeout
    let [actActiveConfig, setActActiveConfig] = useState({
        isBlackActive: true,
        isMapActive: false,
        isContractActive: false,
        isStudentActive: false,
    })
    const changeNotActive = (pageActive: string, isActive: boolean) => {
        setActActiveConfig(actActiveConfig => ({
            ...actActiveConfig,
            [pageActive]: isActive,
        }))
    }

    useEffect(() => {
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div>
            {(() => {
                if (actActiveConfig.isBlackActive)
                    return <Black changeActive={changeNotActive} />
                if (actActiveConfig.isMapActive)
                    return <Map changeActive={changeNotActive} />
                if (actActiveConfig.isContractActive)
                    return <Contract changeActive={changeNotActive} />
                if (actActiveConfig.isStudentActive)
                    return (
                        <Student
                            changeActive={changeNotActive}
                            changeAct={nextAct}
                        />
                    )
            })()}
        </div>
    )
}
export default FirstAct
