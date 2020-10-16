import styles from '../styles/Result.module.scss'


const Result = ({ text, playagain }) => {

    function handleClick() {
        playagain()
    }

    return (
        <div className={styles.container}>
            <div className={styles.result}>{text}</div>
            <button className={styles.playagain} onClick={handleClick}>PLAY AGAIN</button>
        </div>
    )

}

export default Result