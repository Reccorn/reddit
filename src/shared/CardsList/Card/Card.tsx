import React from 'react';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import styles from './card.css';

interface ICardProps {
  children?: React.ReactNode;
  itemId: string | undefined;
  image?: string | undefined;
  title?: string | undefined;
  avatar?: string | undefined;
  userName?: string | undefined;
  rating?: string | undefined;
  comments?: string | undefined;
  createDate: string | undefined;
}

export function Card(props: ICardProps) {
  const {
    children,
    itemId,
    image,
    title,
    avatar,
    userName,
    rating,
    comments,
    createDate
  } = props;

  return (
    <li className={styles.card}>
      <TextContent userAvatar={avatar} userName={userName} title={title} createDate={createDate} postId={itemId} />
      <Preview image={image}/>
      <Menu />
      <Controls comments={comments} rating={rating} />
    </li>
  );
}
