import { motion } from 'motion/react';
import React from 'react';

import css from './Pan.module.scss';
import { StoveTopProps } from './StoveTop';

interface PanProps extends StoveTopProps {
  isInView: boolean;
}

function getPanAnimation(isInView: boolean, idx: number) {
  return {
    initial: { opacity: 0 },
    animate: isInView ? { rotate: 100, opacity: 1 } : {},
    transition: { delay: 0.15 * idx, duration: 0.7, ease: 'easeOut' },
  };
}

// ------------------------- DESKTOP ------------------------------

export const Pan = ({ name, image, link, isInView, idx }: PanProps) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const panAnimation = React.useMemo(
    () => getPanAnimation(isInView, idx),
    [getPanAnimation, isInView, idx]
  );

  return (
    <motion.div className={css.panContainer} onClick={handleClick} {...panAnimation}>
      <div className={css.pan}>
        <div className={css.innerPan}>
          <p className={css.panText}>{name}</p>
          <img className={css.panPhoto} src={image} alt={name} />
        </div>
      </div>
      <div className={css.handle} />
    </motion.div>
  );
};

// ------------------------- MOBILE ------------------------------

export const PanMobile = ({ name, image, link, isInView, idx }: PanProps) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const panAnimation = React.useMemo(
    () => getPanAnimation(isInView, idx),
    [getPanAnimation, isInView, idx]
  );

  return (
    <motion.div className={css.panContainerMobile} onClick={handleClick} {...panAnimation}>
      <div className={css.panMobile}>
        <div className={css.innerPanMobile}>
          <p className={css.panTextMobile}>{name}</p>
          <img className={css.panPhotoMobile} src={image} alt={name} />
        </div>
      </div>
      <div className={css.handleMobile} />
    </motion.div>
  );
};
