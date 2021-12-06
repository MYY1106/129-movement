import { ReactElement, useState, useRef, FC, forwardRef } from "react"
import style from 'assets/style/music.module.less'
import bgm from 'assets/music/找回我的精神.mp3'

interface IMusic {
    loop: boolean,
}

const Music: FC<IMusic> = ({ loop = true }): ReactElement => {
    // 控制音乐组件
    let useControl = useRef<HTMLDivElement>(null)


    // 创建音频，实现循环播放
    let audio = new Audio(bgm)
    audio.loop = loop

    let touchTimes = 0;
    let isPlay = false;
    let deg = 0;

    // 用户触碰页面模拟自动播放
    document.addEventListener('touchstart', autoPlayMusic)
    // 自动播放函数
    function autoPlayMusic() {
        audio.play()
        touchTimes++;
        if (touchTimes == 2) {
            document.removeEventListener('touchstart', autoPlayMusic);
            isPlay = true
            window.requestAnimationFrame(playAnimation)
        }
    }

    // 旋转动画，递归调用
    function playAnimation() {
        deg = deg + 0.3;
        useControl.current!.style.transform = `rotate(${deg}deg)`
        if (isPlay) {
            window.requestAnimationFrame(playAnimation)
        }
    }

    // 控制音乐播放和暂停
    const controlAudio = () => {
        console.log('test')
        if (!isPlay) {
            audio.play();
            window.requestAnimationFrame(playAnimation)
        }
        else {
            audio.pause();
        }
        isPlay = !isPlay;
    }
    return (
        <div className={style.music} ref={useControl} onClick={controlAudio}></div>)
}

export default Music;