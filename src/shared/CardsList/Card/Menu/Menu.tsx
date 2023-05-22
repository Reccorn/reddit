import React, { useState, useEffect, useRef } from 'react';
import { useIsSsr } from '../../../../hooks/useSsr';
import { Dropdown } from '../../../Dropdown';
import { EColor, Text } from '../../../Text';
import { DesktopMenuItemList } from './DesktopMenuItemList';
import { MenuBtn } from './MenuBtn/MenuBtn';
import { MenuItemList } from './MenuItemList';
import styles from './menu.css';

interface ISizeOptions {
  clientHeight: number,
  clientWidth: number
}

export function Menu() {
  const isSsr = useIsSsr();
  const width = (isSsr) ? undefined : window.innerWidth;
  const [size, setSize] = useState(width);
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [topPos, setTopPos] = useState(0);
  const [leftPos, setLeftPos] = useState(0); 

  const resizeHandler = () => {
    setSize(window.innerWidth);
  };

  const handleDropdownState = (e: HTMLButtonElement) => {
    if (!e) {
      return;
    } else {
      const rect = e.getBoundingClientRect();
      setTopPos(rect.top + document.documentElement.scrollTop);
      setLeftPos(rect.left);
      setIsOpenDrop(!isOpenDrop);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className={styles.menu}>
      <MenuBtn onClick={handleDropdownState} />
      {isOpenDrop && (
        <Dropdown onClose={() => setIsOpenDrop(false)} top={topPos} left={leftPos} size={size}>
          <div className={styles.dropdown}>
            {(size !== undefined && size < 1024)
              ?
              <MenuItemList postId='1234' />
              :
              <DesktopMenuItemList postId='12345' />
            }
          </div>
        </Dropdown>
      )
      }
    </div>
  );
}
