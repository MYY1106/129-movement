import { useState } from 'react'
import Black from './pages/Black'
import Movement from './pages/Movement'
import Huang from './pages/Huang'
import Battle from './pages/Battle'

const ThirdAct: React.FC<FirstActProps> = ({ nextAct }) => {
    let [actActiveConfig, setActActiveConfig] = useState({
        isBlackActive: true,
        isMovementActive: false,
        isHuangActive: false,
        isBattleActive: false,
    })
    const changeActive = (pageActive: string, isActive: boolean) => {
        setActActiveConfig(actActiveConfig => ({
            ...actActiveConfig,
            [pageActive]: isActive,
        }))
    }

    return (
        <div style={{ backgroundColor: 'black', zIndex: '-1' }}>
            {(() => {
                if (actActiveConfig.isBlackActive)
                    return <Black changeActive={changeActive} />
                if (actActiveConfig.isMovementActive)
                    return <Movement changeActive={changeActive} />
                if (actActiveConfig.isHuangActive)
                    return <Huang changeActive={changeActive} />
                if (actActiveConfig.isBattleActive)
                    return (
                        <Battle
                            changeActive={changeActive}
                            changeAct={nextAct}
                        />
                    )
            })()}
        </div>
    )
}
export default ThirdAct
