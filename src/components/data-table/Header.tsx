import React, { FC } from 'react';
import styles from './Header.module.scss';
import Button from '../button/Button';

interface IHeader {
  onFilterClick: () => void;
}

const Header: FC<IHeader> = ({ onFilterClick }) => {
  return (
    <div className={styles.container}>
      <Button onClick={onFilterClick} text="Filters" />
    </div>
  );
};

export default Header;
