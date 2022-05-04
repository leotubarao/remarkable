import React from 'react';

import styles from './styles.module.scss';

interface ImageProps {
  src: string;
  alt?: string;
}

export const ImageCover: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.container} />;
};
