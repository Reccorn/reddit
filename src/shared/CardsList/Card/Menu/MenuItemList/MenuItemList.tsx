import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menuitemlist.css';
import { EColor, Text } from '../../../../Text';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemList({postId}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={()=>console.log(postId)}>
        <Icon name={EIcons.block} />
        <Text size={12} color={EColor.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcons.warn} />
        <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>
      <button className={styles.closeButton}>
        <Text mobileSize={12} size={14} color={EColor.grey66}>
                Закрыть
        </Text>
      </button>
  </ul>
  );
}
