import React, { useState } from 'react';
import styles from './counter.css';

interface ICounterProps {
  rating: string | undefined
}

export function Counter({ rating }: ICounterProps) {
  const [count, setCount] = useState(0);

  const handleClickUp = () => setCount(count+1)
  const handleClickDown = () => setCount((count === 0) ? count : count - 1)

  return (
    <div className={styles.karmaCounter}>
    <button className={styles.up} onClick={handleClickUp}>
      <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
      </svg>
    </button>
  <span className={styles.karmaValue}>{rating}</span>
    <button className={styles.down} onClick={handleClickDown}>
      <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9"/>
      </svg>
    </button>
  </div>
  );
}
