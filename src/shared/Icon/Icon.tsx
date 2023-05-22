import React from 'react';
import styles from './icon.css';
// import classNames from 'classnames';
import MenuIcon from '../Icons/MenuIcon';
import BlockIcon from '../Icons/BlockIcon';
import WarnIcon from '../Icons/WarnIcon';
import ShareIcon from '../Icons/ShareIcon';
import SaveIcon from '../Icons/SaveIcon';
import CommentIcon from '../Icons/CommentIcon';
import DeskShareIcon from '../Icons/DeskShareIcon';
import DeskSaveIcon from '../Icons/DeskSaveIcon';
import AnonymIcon from '../Icons/AnonymIcon';

export enum EIcons {
  block = 'BlockIcon',
  menu = 'MenuIcon',
  warn = 'WarnIcon',
  share = 'ShareIcon',
  save = 'SaveIcon',
  comment = 'CommentIcon',
  dshare = 'DeskShareIcon',
  dsave = 'DeskSaveIcon',
  anon = 'AnonymIcon'
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface IIconProps {
  name: EIcons;
  size?: TSizes;
}

function getComponent(name: EIcons) {
  switch(name){
    case EIcons.menu: return <MenuIcon />
    case EIcons.block: return <BlockIcon />
    case EIcons.warn: return <WarnIcon />
    case EIcons.share: return <ShareIcon />
    case EIcons.save: return <SaveIcon />
    case EIcons.comment: return <CommentIcon />
    case EIcons.dshare: return <DeskShareIcon />
    case EIcons.dsave: return <DeskSaveIcon />
    case EIcons.anon: return <AnonymIcon />
  }
}



export function Icon({ name, size }: IIconProps) {
  return (
  <span className={styles.icon}>{getComponent(name)}</span>
  );
}
