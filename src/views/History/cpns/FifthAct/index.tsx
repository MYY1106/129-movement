import { useState } from 'react'
import Black from './pages/Black'
import Proposal from './pages/Proposal'
import Praise from './pages/Praise'
import Resolution from './pages/Resolution'

const FifthAct: React.FC<FirstActProps> = ({ nextAct }) => {
    let [actActiveConfig, setActActiveConfig] = useState({
        isBlackActive: true,
        isProposalActive: false,
        isPraiseActive: false,
        isResolutionActive: false,
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
                if (actActiveConfig.isProposalActive)
                    return <Proposal changeActive={changeActive} />
                if (actActiveConfig.isPraiseActive)
                    return <Praise changeActive={changeActive} />
                if (actActiveConfig.isResolutionActive)
                    return (
                        <Resolution
                            changeActive={changeActive}
                            changeAct={nextAct}
                        />
                    )
            })()}
        </div>
    )
}
export default FifthAct
