import styles from '../styles/Element.module.scss';

import cn from 'classnames'


const Element = ({ name, onSelect, size }) => {

    function selectElement() {
        onSelect(name)
    }

    return (

            <div
                className={cn(styles.circle,{
                    [styles.paper]: name === 'paper',
                    [styles.rock]: name === 'rock',
                    [styles.scissors]: name === 'scissors',
                    [styles.lizard]: name === 'lizard',
                    [styles.spock]: name === 'spock',
                },{[styles.bigger]: size=== 'big'},{[styles.smaller]: size=== 'small'})}
                onClick={selectElement}
            >
                <div className={cn(styles.element,{[styles.bigimg]: size==='big'},{[styles.smallimg]: size=== 'small'})}>
                    <img src={`/images/icon-${name}.svg`} />
                </div>
            </div>

    )
}

export default Element