import { motion } from 'motion/react';

import css from './PhotoAndNameText.module.scss';
import fullBody from '../../../images/fullBody.png';

const PHOTO_ANIMATION = {
  initial: { x: '-3vw', y: '8vw', opacity: 0.5 },
  animate: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const NAME_ANIMATION = {
  initial: { x: '6vw', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// ------------------------- DESKTOP ------------------------------

export const PhotoAndNameText = () => {
  return (
    <>
      <motion.img src={fullBody} className={css.photo} {...PHOTO_ANIMATION} />
      <motion.h1 className={css.nameText} {...NAME_ANIMATION}>
        Max
        <br />
        Ginsberg
      </motion.h1>
    </>
  );
};

// ------------------------- MOBILE ------------------------------

export const PhotoAndNameTextMobile = () => {
  return (
    <>
      <motion.img src={fullBody} className={css.photoMobile} {...PHOTO_ANIMATION} />
      <motion.h1 className={css.nameTextMobile} {...NAME_ANIMATION}>
        Max
        <br />
        Ginsberg
      </motion.h1>
    </>
  );
};
