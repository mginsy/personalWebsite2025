import { motion, useInView } from 'motion/react';
import React from 'react';

import { ConnectingLine } from './ConnectingLine';
import css from './ExperienceBox.module.scss';

export interface ExperienceBoxProps {
  title: string;
  image: string;
  dates: string;
  link: string;
  numExperiences: number;
  idx: number;
}

// ------------------------- DESKTOP ------------------------------

export const ExperienceBox = ({
  title,
  image,
  dates,
  link,
  numExperiences,
  idx,
}: ExperienceBoxProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });
  const isEven = idx % 2 == 0;
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const experienceBoxAnimation = React.useMemo(
    () => getExperienceBoxAnimation(isEven, isInView),
    [isEven, isInView, getExperienceBoxAnimation]
  );

  const experienceBox = (
    <motion.div
      ref={ref}
      className={css.experienceBoxContainer}
      onClick={handleClick}
      {...experienceBoxAnimation}
    >
      <p className={css.experienceBoxDates}>{dates}</p>
      <div className={css.experienceBoxImageTitle}>
        <img className={css.experienceBoxImage} src={image} alt={'experience image'} />
        <p className={css.experienceBoxTitle}>{title}</p>
      </div>
    </motion.div>
  );

  return (
    <div className={css.experienceBoxLineContainer}>
      {isEven ? (
        <>
          {experienceBox}
          <ConnectingLine idx={idx} numExperiences={numExperiences} />
        </>
      ) : (
        <>
          <ConnectingLine idx={idx} numExperiences={numExperiences} />
          {experienceBox}
        </>
      )}
    </div>
  );
};

function getExperienceBoxAnimation(isEven: boolean, isInView: boolean) {
  return {
    initial: { x: isEven ? '-12vw' : '12vw', opacity: 0 },
    animate: isInView ? { x: 0, opacity: 1 } : {},
    transition: { delay: 0.3, duration: 0.4, ease: 'easeOut' },
  };
}

// ------------------------- MOBILE ------------------------------

export const ExperienceBoxMobile = ({ title, image, dates, link, idx }: ExperienceBoxProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });
  const isEven = idx % 2 == 0;
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const experienceBoxAnimation = React.useMemo(
    () => getExperienceBoxAnimation(isEven, isInView),
    [isEven, isInView, getExperienceBoxAnimation]
  );

  return (
    <div className={css.experienceBoxLineContainerMobile}>
      <motion.div
        ref={ref}
        className={css.experienceBoxContainerMobile}
        onClick={handleClick}
        {...experienceBoxAnimation}
      >
        <p className={css.experienceBoxDatesMobile}>{dates}</p>
        <div className={css.experienceBoxImageTitleMobile}>
          <img className={css.experienceBoxImageMobile} src={image} alt={'experience image'} />
          <p className={css.experienceBoxTitleMobile}>{title}</p>
        </div>
      </motion.div>
    </div>
  );
};
