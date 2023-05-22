import React from 'react';
import styles from './layout.css';


interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;
