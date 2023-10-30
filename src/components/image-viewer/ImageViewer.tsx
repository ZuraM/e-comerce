import React, { FC } from 'react';

import styles from './ImageViewer.module.scss';

interface IImageViewer {
  imageUrl: string | undefined;
}

const ImageViewer: FC<IImageViewer> = ({ imageUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="product" />
    </div>
  );
};

export default ImageViewer;
