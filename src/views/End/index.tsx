
import back from 'assets/imgs/End/back.png';
import change from 'assets/imgs/End/change.png';
import saying1 from 'assets/imgs/End/saying1.png';
import saying2 from 'assets/imgs/End/saying2.png';
import saying3 from 'assets/imgs/End/saying3.png';

import styles from 'assets/style/end.module.less'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function End() {
    const [index, setIndex] = useState(0)
    const allSaying = [saying1, saying2, saying3]
    const changeSaying = () => {
        index == 2 ? setIndex(index => index = 0) : setIndex(index => ++index)
    }

    return (<>
        <main className={styles.main}>
            <div className={styles.words} >
                <img className={styles['saying']} src={allSaying[index]} />
                <img className={styles['change-saying-btn']} onClick={changeSaying} src={change} />
                <Link to="/history"><img className={styles['return-btn']} src={back} /></Link>
            </div>
        </main>
    </>)
}
