import Element from './Element';
import styles from '../styles/Match.module.scss';
import { useState, useEffect } from "react";
import Result from './Result';

const Match = ({ game, again }) => {

    const [result, setResult] = useState(false)
    let { user, cpu, winner } = game


    useEffect(() => {
        const timer = setTimeout(() => {
            setResult(true);
            console.log(game)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.choice}>
                <h1>YOU PICKED</h1>
                <Element name={user} onSelect={() => { }} size="big"/>
            </div>
            <div className={styles.result}>
            {result===true? {
                'user': <Result text="YOU WIN" playagain={again}/>,
                'house':<Result text="YOU LOSE" playagain={again}/>,
                'even':<Result text="YOU DRAW" playagain={again}/>,
            }[winner] : <div></div>}
            </div>
            <div className={styles.choice}>
                <h1>THE HOUSE PICKED</h1>
                {result === false ?
                    <div className={styles.blank}></div> :
                    <Element name={cpu} onSelect={() => { }} size="big" />
                }
            </div>
        </div>
    )
}

export default Match;