import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { Element } from 'react-scroll';

import { ExperienceBox, ExperienceBoxMobile, ExperienceBoxProps } from './components/ExperienceBox';
import css from './Experience.module.scss';
import accentureLogo from '../../images/accenture.png';
import edwardsLogo from '../../images/edwards.png';
import palantirLogo from '../../images/palantir.png';

const EXPERIENCES: Omit<ExperienceBoxProps, 'numExperiences' | 'idx'>[] = [
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
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Experience = () => {
  return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
};

// ------------------------- DESKTOP ------------------------------

const ExperienceDesktop = () => {
  return (
    <Element name="experience">
      <motion.section className={css.experienceSection} {...EXPERIENCE_TITLE_ANIMATION}>
        <h1 className={css.sectionTitle} {...EXPERIENCE_TITLE_ANIMATION}>
          Experience
        </h1>
        <div className={css.experiencesContainer}>
          {EXPERIENCES.map((experience, idx) => (
            <ExperienceBox
              key={idx}
              idx={idx}
              numExperiences={EXPERIENCES.length}
              {...experience}
            />
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

// ------------------------- MOBILE ------------------------------

const ExperienceMobile = () => {
  return (
    <Element name="experience">
      <motion.section className={css.experienceSection} {...EXPERIENCE_TITLE_ANIMATION}>
        <h1 className={css.sectionTitleMobile} {...EXPERIENCE_TITLE_ANIMATION}>
          Experience
        </h1>
        <div className={css.experiencesContainerMobile}>
          {EXPERIENCES.map((experience, idx) => (
            <ExperienceBoxMobile
              key={idx}
              idx={idx}
              numExperiences={EXPERIENCES.length}
              {...experience}
            />
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

export default Experience;
