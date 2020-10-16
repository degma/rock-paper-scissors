import styles from "../styles/Score.module.scss";

const Score = ({ score }) => (
    <div className={styles.container}>
        <h1 className={styles.title}>SCORE</h1>
        <p className={styles.score}>{score}</p>
    </div>
)

export default Score;