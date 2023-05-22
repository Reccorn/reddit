import React, { useState } from 'react';
import { useAuthorAvatar } from '../../../hooks/useAuthorAvatar';
import { timestampToDate } from '../../../utils/react/timestampToDate';
import { CommentFormContainer } from '../../CommentFormContainer';
import { EIcons, Icon } from '../../Icon';
import styles from './commentsitem.css';

interface ICommentReplies {
  data: IReplyChildren
}

interface IReplyChildren {
  children: Array<IRepliesData>;
}

interface IRepliesData {
  data: ICommentsItemProps;
}

interface ICommentsItemProps {
  id?: string;
  author?: string | undefined;
  created?: number | undefined;
  body?: string;
  kind?: string | undefined;
  replies?: "" | ICommentReplies;
}

export function CommentsItem({ author, created, body, replies }: ICommentsItemProps) {
  const [toAnswer, setToAnswer] = useState(false);

  const commentDate = timestampToDate(created?.toString());
  const authorImage = useAuthorAvatar(author);

  return (
    <div className={styles.wrapper}>
      <div className={styles.counter}>
        <button className={styles.counterUp}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
          </svg>
        </button>
        <button className={styles.counterDown}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9" />
          </svg>
        </button>
      </div>
      <div className={styles.commentatorWrapper}>
        <div className={styles.avatarWrapper}>
          {authorImage
            ? <img src={authorImage} alt="authorImage" />
            : <Icon name={EIcons.anon} />
          }
        </div>
        <span className={styles.username}>{author} </span>
        <span className={styles.created}>{commentDate}</span>
      </div>
      <p className={styles.commentText}>
        {body}
      </p>
      <div className={styles.controls}>
        <ul className={styles.controlsList}>
          <li>
            <button className={styles.controlsBtn}
              onClick={() => { setToAnswer(!toAnswer) }}>
              <Icon name={EIcons.comment} />
              <span className={styles.buttonText}>Ответить</span>
            </button>
          </li>
          <li>
            <button className={styles.controlsBtn}>
              <Icon name={EIcons.share} />
              <span className={styles.buttonText}>Поделиться</span>
            </button>
          </li>
          <li>
            <button className={styles.controlsBtn}>
              <Icon name={EIcons.warn} />
              <span className={styles.buttonText}>Пожаловаться</span>
            </button>
          </li>
        </ul>
      </div>
      {toAnswer && <CommentFormContainer />}
      {
        replies !== "" &&
        replies?.data.children.map(answer => {
          if (typeof answer.data.body === "undefined") return;
          return (
            <div>
              <CommentsItem key={answer.data.id} author={answer.data.author} body={answer.data.body} created={answer.data.created} replies={answer.data.replies} />
            </div>
          )
        })
      }
    </div>
  );
}
