import React from 'react';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';
import styles from './actions.css';

export function Actions() {
  return (
    <div className={styles.actions}>
      <ShareButton />
      <SaveButton />
    </div>

  );
}
