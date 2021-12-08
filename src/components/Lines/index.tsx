import { ReactElement, FC, useRef, useEffect } from 'react';
import { sleep } from '../../utils/index'
import styles from './index.module.less'

interface typeProps {
    mode: 'sentence' | 'word',
    children: string,
    time?: number
}

const showSentence = async (el: HTMLDivElement, sentences: string[], t: number) => {
    let context = ''
    for (let i = 0; i < sentences.length; i++) {
        i < sentences.length - 1 ? context += sentences[i] + "，" : context += sentences[i]
        el.textContent = context
        await sleep(t * 4)
    }
}

const showWord = async (el: HTMLDivElement, words: string, t: number) => {
    for (let i = 0; i <= words.length; i++) {
        el.textContent = words.substring(0, i)
        await sleep(t)
    }
}

const ShowLine: FC<typeProps> = ({ children, mode, time = 500 }): ReactElement => {
    const container = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (mode === 'sentence') {
            const sentences = children.split("，");
            showSentence(container.current!, sentences, time)
        } else if (mode === 'word') {
            showWord(container.current!, children, time)
        }
    })
    return (<div ref={container} className={styles.container}>
    </div>)
}

export default ShowLine