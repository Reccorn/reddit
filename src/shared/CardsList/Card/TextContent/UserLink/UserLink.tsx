import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  userAvatar: string | undefined
  userName: string | undefined
}

export function UserLink({ userAvatar, userName }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
        <img className={styles.avatar} src={userAvatar} alt="Аватар"/>
        <a href="#user-url" className={styles.username}>{userName}</a>
    </div>
  );
}
