
import back from 'assets/imgs/End/back.png';
import change from 'assets/imgs/End/change.png';
import saying1 from 'assets/imgs/End/deng.png';
import saying2 from 'assets/imgs/End/mao.png';
import saying3 from 'assets/imgs/End/xi.png';
import styles from 'assets/style/end.module.less'
import { useState } from 'react'
import { Link } from 'react-router-dom'

enum INDEX {
    one, two, three
}

export default function End() {
    const [index, setIndex] = useState<INDEX>(0)
    const allSaying = [saying1, saying2, saying3]
    const changeSaying = () => {
        // index == 2 ? setIndex(0) : setIndex(index + 1)
        setIndex(index == 2 ? 0 : index + 1)
    }
    return (<>
        <main className={styles.main}>
            <img className={styles['saying']} src={allSaying[index]} />
            <div className={styles.words} >
                <img className={styles['change-saying-btn']} onClick={changeSaying} src={change} />
                <Link to="/history"><img className={styles['return-btn']} src={back} /></Link>
            </div>
        </main>
    </>)
}
