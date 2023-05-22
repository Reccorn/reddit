import React from 'react';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import { Counter } from './Counter';
import styles from './controls.css';

interface IControlsProps {
  rating: string | undefined;
  comments: string | undefined;
}

export function Controls({ rating, comments }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <Counter rating={rating} />
      <CommentsButton commentsCount={comments} />
      <Actions />
    </div>
  );
}
