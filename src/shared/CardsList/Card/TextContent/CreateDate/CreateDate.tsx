import React from 'react';
import { timestampToDate } from '../../../../../utils/react/timestampToDate';
import styles from './createdate.css';

interface ICreateDateProps {
  createDate: string | undefined;
}

export function CreateDate({ createDate }: ICreateDateProps) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>Опубликовано</span>
       {timestampToDate(createDate)}
    </span>
  );
}
