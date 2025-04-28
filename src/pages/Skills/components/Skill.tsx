import { motion } from 'motion/react';
import React from 'react';

import css from './Skill.module.scss';

export interface SkillProps {
  name: string;
  image: string;
  idx: number;
  startAnimation: boolean;
}

function getSkillAnimation(startAnimation: boolean, idx: number) {
  return {
    initial: { y: '3vw', opacity: 0 },
    animate: startAnimation ? { y: 0, opacity: 1 } : {},
    transition: { delay: 0.05 * idx, duration: 0.4, ease: 'easeOut' },
  };
}

// ------------------------- DESKTOP ------------------------------

export const Skill = ({ name, image, idx, startAnimation }: SkillProps) => {
  const skillAnimation = React.useMemo(
    () => getSkillAnimation(startAnimation, idx),
    [getSkillAnimation, startAnimation, idx]
  );
  return (
    <motion.div className={css.skillContainer} {...skillAnimation}>
      <p className={css.skillName}>{name}</p>
      <div className={css.skillImageContainer}>
        <img className={css.skillImage} src={image} alt={name} />
      </div>
    </motion.div>
  );
};

// ------------------------- MOBILE ------------------------------

export const SkillMobile = ({ name, image, idx, startAnimation }: SkillProps) => {
  const skillAnimation = React.useMemo(
    () => getSkillAnimation(startAnimation, idx),
    [getSkillAnimation, startAnimation, idx]
  );
  return (
    <motion.div className={css.skillContainerMobile} {...skillAnimation}>
      <p className={css.skillNameMobile}>{name}</p>
      <div className={css.skillImageContainerMobile}>
        <img className={css.skillImageMobile} src={image} alt={name} />
      </div>
    </motion.div>
  );
};
