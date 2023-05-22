import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  image?: string | undefined
}

export function Preview({ image }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={image} alt="preview_picture"/>
    </div>
  );
}
