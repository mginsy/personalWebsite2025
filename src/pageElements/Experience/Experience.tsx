import { motion, useInView } from 'motion/react';
import React from 'react';
import { Element } from 'react-scroll';

import css from './Experience.module.scss';
import accentureLogo from './images/accenture.png';
import edwardsLogo from './images/edwards.png';
import palantirLogo from './images/palantir.png';

const EXPERIENCES: Omit<ExperiencePointProps, 'idx'>[] = [
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

const Experience = () => {
  return (
    <Element name="experience">
      <section className={css.experienceSection}>
        <motion.h1
          className={css.sectionTitle}
          initial={{ y: '-3vw', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Experience
        </motion.h1>
        <div className={css.experiencesContainer}>
          {EXPERIENCES.map((experience, idx) => (
            <ExperiencePoint key={idx} idx={idx} {...experience} />
          ))}
        </div>
      </section>
    </Element>
  );
};

interface ExperiencePointProps {
  title: string;
  image: string;
  dates: string;
  link: string;
  idx: number;
}

const ExperiencePoint = ({ title, image, dates, link, idx }: ExperiencePointProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });
  const isLeft = idx % 2 == 0;
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const experiencePoint = (
    <motion.div
      ref={ref}
      className={css.experiencePointContainer}
      initial={{ x: isLeft ? '-12vw' : '12vw', opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
      onClick={handleClick}
    >
      <p className={css.experiencePointDates}>{dates}</p>
      <div className={css.experiencePointImageTitle}>
        <img className={css.experiencePointImage} src={image} alt={'experience image'} />
        <p className={css.experiencePointTitle}>{title}</p>
      </div>
    </motion.div>
  );

  return (
    <div className={css.experiencePointLineContainer}>
      {isLeft ? (
        <>
          {experiencePoint}
          <ConnectingLine idx={idx} />
        </>
      ) : (
        <>
          <ConnectingLine idx={idx} />
          {experiencePoint}
        </>
      )}
    </div>
  );
};

interface ConnectingLineProps {
  idx: number;
}

const ConnectingLine = ({ idx }: ConnectingLineProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -55% 0px' });
  console.log(isInView);
  if (idx == EXPERIENCES.length - 1) {
    return null;
  }
  return (
    <div className={css.maskContainer}>
      <div className={idx % 2 == 0 ? css.connectingLineRight : css.connectingLineLeft} />
      <motion.div
        ref={ref}
        initial={{ x: 0 }}
        animate={isInView ? { x: idx % 2 == 0 ? '100%' : '-100%' } : {}}
        transition={{ duration: 0.5 }}
        className={css.maskOverlay}
      />
    </div>
  );
};

export default Experience;
