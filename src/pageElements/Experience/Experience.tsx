import { motion, useInView } from 'motion/react';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Element } from 'react-scroll';

import css from './Experience.module.scss';
import accentureLogo from './images/accenture.png';
import edwardsLogo from './images/edwards.png';
import palantirLogo from './images/palantir.png';

const EXPERIENCES: Omit<ExperienceBoxProps, 'idx'>[] = [
  {
    title: 'Full Stack Software Engineer',
    image: palantirLogo,
    link: 'https://www.palantir.com/',
    dates: '2024 - 2025',
  },
  {
    title: 'Software Engineer',
    image: accentureLogo,
    link: 'https://www.accenture.com/us-en',
    dates: '2023 - 2024',
  },
  {
    title: 'Software Engineering Intern',
    image: accentureLogo,
    link: 'https://www.accenture.com/us-en',
    dates: '2022',
  },
  {
    title: 'Algorithms Intern',
    image: edwardsLogo,
    link: 'https://www.edwards.com/',
    dates: '2021',
  },
];

const EXPERIENCE_TITLE_ANIMATION = {
  initial: { y: '-3vw', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

const Experience = () => {
  return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
};

// ------------------------- DESKTOP ------------------------------

const ExperienceDesktop = () => {
  return (
    <Element name="experience">
      <section className={css.experienceSection}>
        <motion.h1 className={css.sectionTitle} {...EXPERIENCE_TITLE_ANIMATION}>
          Experience
        </motion.h1>
        <div className={css.experiencesContainer}>
          {EXPERIENCES.map((experience, idx) => (
            <ExperienceBox key={idx} idx={idx} {...experience} />
          ))}
        </div>
      </section>
    </Element>
  );
};

interface ExperienceBoxProps {
  title: string;
  image: string;
  dates: string;
  link: string;
  idx: number;
}

const ExperienceBox = ({ title, image, dates, link, idx }: ExperienceBoxProps) => {
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
          <ConnectingLine idx={idx} />
        </>
      ) : (
        <>
          <ConnectingLine idx={idx} />
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

interface ConnectingLineProps {
  idx: number;
}

const ConnectingLine = ({ idx }: ConnectingLineProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -55% 0px' });
  if (idx == EXPERIENCES.length - 1) {
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

// ------------------------- MOBILE ------------------------------

const ExperienceMobile = () => {
  return (
    <Element name="experience">
      <section className={css.experienceSection}>
        <motion.h1 className={css.sectionTitleMobile} {...EXPERIENCE_TITLE_ANIMATION}>
          Experience
        </motion.h1>
        <div className={css.experiencesContainerMobile}>
          {EXPERIENCES.map((experience, idx) => (
            <ExperienceBoxMobile key={idx} idx={idx} {...experience} />
          ))}
        </div>
      </section>
    </Element>
  );
};

interface ExperienceBoxProps {
  title: string;
  image: string;
  dates: string;
  link: string;
  idx: number;
}

const ExperienceBoxMobile = ({ title, image, dates, link, idx }: ExperienceBoxProps) => {
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

export default Experience;
