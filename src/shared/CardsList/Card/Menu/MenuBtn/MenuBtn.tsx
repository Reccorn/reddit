import React from 'react';
import MenuIcon from '../../../../Icons/MenuIcon';
import styles from './menubtn.css';

export function MenuBtn({ onClick = (e: HTMLButtonElement) => {e} }) {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onClick(e.currentTarget);
  }

  return (
    <button className={styles.menuButton} onClick={clickHandler}>
      <MenuIcon />
    </button>
  );
}
