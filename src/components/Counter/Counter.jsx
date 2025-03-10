import { useState } from 'react';
import styles from './styles.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const changeCountHandler = (newCount) => {
    setCount(Math.max(newCount, 0))
  }

  return (
    <div className={styles.counter}>
      <button
        type="button"
        disabled={count === 0}
        className={styles.button}
        onClick={() => { changeCountHandler(count - 1) }}
      >
        -
      </button>
      <p className={styles.value}>{count}</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => { setCount(count + 1) }}
      >
        +
      </button>
    </div>
  )
}