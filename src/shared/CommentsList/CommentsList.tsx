import React from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { CommentsItem } from './CommentsItem';
import styles from './commentslist.css';

interface ICommentIdProps {
  postId: string | undefined;
}

export function CommentsList({ postId }: ICommentIdProps) {
  const data = useCommentsData(postId);

  return (
    <div className={styles.container}>
      <div className={styles.sorting}>
        <span className={styles.sortingText}>Сортировать по: <button className={styles.sortingBtn}>Лучшее</button></span>
      </div>
      <div className={styles.items}>
        {data.length === 0 && (
          <div>
            Загрузка...
          </div>
        )}
        
        {
          data.map(item => {
            if (typeof item.data.body === 'undefined') return;
            return (
              <CommentsItem key={item.data.id} author={item.data.author} created={item.data.created} body={item.data.body} replies={item.data.replies} />
            );
          })
        }
      </div>
    </div>
  );
}
