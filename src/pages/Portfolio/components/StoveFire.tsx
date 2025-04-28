import { motion } from 'motion/react';
import { HTMLProps } from 'react';
import React from 'react';

import css from './StoveFire.module.scss';

interface StoveFireProps {
  isInView: boolean;
  idx: number;
}

function getStoveFireAnimation(isInView: boolean, idx: number) {
  return {
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : {},
    transition: { delay: 0.15 * idx + 0.3, duration: 1, ease: 'easeOut' },
  };
}

// ------------------------- DESKTOP ------------------------------

export const StoveFire = ({ isInView, idx }: StoveFireProps) => {
  const stoveFireAnimation = React.useMemo(
    () => getStoveFireAnimation(isInView, idx),
    [getStoveFireAnimation, isInView, idx]
  );

  return (
    <motion.div {...stoveFireAnimation}>
      {Array(18)
        .fill(1)
        .map((_, idx) => (
          <Fire
            key={idx}
            style={{ rotate: `${idx * 10}deg`, animationDelay: `${Math.random()}s` }}
          />
        ))}
    </motion.div>
  );
};

const Fire = ({ ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={css.fireDesktop} {...props} />;
};

// ------------------------- MOBILE ------------------------------

export const StoveFireMobile = ({ isInView, idx }: StoveFireProps) => {
  const stoveFireAnimation = React.useMemo(
    () => getStoveFireAnimation(isInView, idx),
    [getStoveFireAnimation, isInView, idx]
  );

  return (
    <motion.div {...stoveFireAnimation}>
      {Array(18)
        .fill(1)
        .map((_, idx) => (
          <FireMobile
            key={idx}
            style={{ rotate: `${idx * 10}deg`, animationDelay: `${Math.random()}s` }}
          />
        ))}
    </motion.div>
  );
};

const FireMobile = ({ ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={css.fireMobile} {...props} />;
};
