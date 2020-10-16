import Score from "./Score"
import styles from "../styles/Header.module.scss";

const Header = ({score, changeMode, mode }) => (
    <div className={styles.container}>
        { mode ?
        (<img src='/images/logo.svg' alt='Rock Paper Scissors' className={styles.logo} onClick={changeMode}/>) : 
        (<img src='/images/logo-bonus.svg' alt='Rock Paper Scissors Lizard Spock' className={styles.logo} onClick={changeMode}/> )
        }
        <Score score={score}/>
    </div>
)
export default Header;