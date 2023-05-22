import React, {useContext} from 'react';
import { UserBlock } from './UserBlock';
import styles from './searchblock.css';
import { useUserData } from '../../../hooks/useUserData';


export function SearchBlock() {
  const { data, loading } = useUserData()

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
    </div>
  );
}
