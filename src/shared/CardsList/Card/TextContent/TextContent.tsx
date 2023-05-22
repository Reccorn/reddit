import React from 'react';
import { UserLink } from './UserLink';
import { CreateDate } from './CreateDate';
import { PostTitle } from './PostTitle';
import styles from './textcontent.css';

interface ITextContentProps {
  userAvatar: string | undefined;
  userName: string | undefined;
  title: string | undefined;
  createDate: string | undefined;
  postId: string | undefined;
}

export function TextContent(props: ITextContentProps) {
  const {
    userAvatar,
    userName,
    title,
    createDate,
    postId
  } = props;


  return (
  <div className={styles.textContent}>
    <div className={styles.metaData}>
     <UserLink userAvatar={userAvatar} userName={userName} />
     <CreateDate createDate={createDate} />
    </div>
    <PostTitle title={title} postId={postId} />
  </div>
  );
}
