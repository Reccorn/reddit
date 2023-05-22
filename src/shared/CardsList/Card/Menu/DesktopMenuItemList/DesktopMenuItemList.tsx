import React from 'react';
import styles from './desktopmenuitemlist.css';
import { EIcons, Icon } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';

interface IMenuItemsListProps {
  postId: string;
}

export function DesktopMenuItemList({postId}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={()=>console.log(postId)}>
        <Icon name={EIcons.comment} />
        <Text size={12} color={EColor.grey99}>Комментарии</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={()=>console.log(postId)}>
        <Icon name={EIcons.dshare} />
        <Text size={12} color={EColor.grey99}>Поделиться</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcons.block} />
        <Text size={12} color={EColor.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={()=>console.log(postId)}>
        <Icon name={EIcons.dsave} />
        <Text size={12} color={EColor.grey99}>Сохранить</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcons.warn} />
        <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>
  </ul>
  );
}
