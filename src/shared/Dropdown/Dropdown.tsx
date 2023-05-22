import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';


interface IDropdownProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  top: number;
  left: number;
  size?: number | undefined;
}

const NOOP = () => {};

export function Dropdown({children, isOpen, onOpen = NOOP, onClose = NOOP, top, left, size}: IDropdownProps) {
  const node = document.getElementById('dropdown_root');
  if(!node) return null;
  const dropRef = useRef<HTMLDivElement>(null);

  const posStyles = {
    top: top + 30,
    left: size !== undefined && size > 1023 ? left + 85 : left + 30
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if(e.target instanceof Node && !dropRef.current?.contains(e.target))
      onClose?.();
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return ReactDOM.createPortal((
    <div className={styles.container} ref={dropRef} style={posStyles}>
      <div className={styles.listContainer}>
        <div className={styles.list} onClick={() => {}}>
          {children}
        </div>
      </div>
    </div>
  ), node);
}
