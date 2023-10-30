import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface IButton {
  onClick: () => void;
  text: string;
  fitContent?: boolean;
  disabled?: boolean;
}

const Button: FC<IButton> = ({ onClick, text, fitContent, disabled }) => {
  const container = cn({
    [styles.container]: true,
    [styles.fitContent]: fitContent,
    [styles.disabled]: disabled,
  });

  return (
    <div className={container} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
