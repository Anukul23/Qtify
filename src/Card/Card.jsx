import React from 'react';
import styles from './Card.module.css';
import { Tooltip, Chip } from '@mui/material';

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        return data.map(({ image, follows, title, songs }, index) => (
          <Tooltip key={index} title={`${songs.length} songs`} placement='top' arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt='album' />
                <div className={styles.banner}>
                  <Chip label={`${follows} Follows`} size='small' className={styles.chip} />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        ));
      }

      case "song": {
        return data.map(({ image, likes, title, songs }, index) => (
          <Tooltip key={index} title={`${songs?.length} songs`} placement='top' arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt='song' loading='lazy' />
                <div className={styles.banner}>
                  <Chip label={`${likes} Likes`} size='small' className={styles.chip} />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        ));
      }

      case 'songFilter': {
        return data.map(({ image, likes, title }, index) => (
          <div key={index} className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt='song' loading='lazy' />
              <div className={styles.banner}>
                <Chip label={`${likes} Likes`} size='small' className={styles.chip} />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        ));
      }

      default:
        return <></>;
    }
  };

  return <>{getCard(type)}</>;
};

export default Card;
