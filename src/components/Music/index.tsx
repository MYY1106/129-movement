import Music from './Music';
import { useHistory, } from "react-router-dom"
import { ReactElement, useRef, useEffect } from 'react'
import style from 'assets/style/music.module.less'

const WithRouterMusic = (): ReactElement => {
    const history = useHistory()
    const useMusic = useRef<HTMLDivElement>(null)
    const listenRoute = (pathname: string) => {
        if (pathname === '/history') {
            useMusic.current!.className = style['history-music']
        } else if (pathname === '/end') {
            useMusic.current!.className = style['end-music']
        } else {
            useMusic.current!.className = style['home-music']
        }
    }
    history.listen(({ pathname }) => listenRoute(pathname))
    useEffect(() => {
        listenRoute(history.location.pathname)
    })
    return (
        <div ref={useMusic}>
            <Music loop={true}></Music>
        </div>
    )
}

export default WithRouterMusic