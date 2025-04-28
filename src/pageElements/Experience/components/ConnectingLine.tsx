import { motion, useInView } from 'motion/react';
import React from 'react';

import css from './ConnectingLine.module.scss';

interface ConnectingLineProps {
  idx: number;
  numExperiences: number;
}

// ------------------------- DESKTOP ------------------------------

export const ConnectingLine = ({ idx, numExperiences }: ConnectingLineProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -55% 0px' });
  if (idx == numExperiences - 1) {
    return null;
  }
  const isEven = idx % 2 == 0;
  const connectingLineAnimation = React.useMemo(
    () => getConnectingLineAnimation(isEven, isInView),
    [isEven, isInView, getConnectingLineAnimation]
  );
  return (
    <div className={css.maskContainer}>
      <div className={isEven ? css.connectingLineRight : css.connectingLineLeft} />
      <motion.div ref={ref} className={css.maskOverlay} {...connectingLineAnimation} />
    </div>
  );
};

function getConnectingLineAnimation(isEven: boolean, isInView: boolean) {
  return {
    initial: { x: 0 },
    animate: isInView ? { x: isEven ? '100%' : '-100%' } : {},
    transition: { duration: 0.5 },
  };
}
