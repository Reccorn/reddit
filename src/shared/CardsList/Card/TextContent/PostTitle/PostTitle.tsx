import React from 'react';
import { Link } from 'react-router-dom';
import styles from './posttitle.css';

interface IPostTitleProps {
  title: string | undefined;
  postId: string | undefined;
}

export function PostTitle({ title, postId }: IPostTitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postId}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}