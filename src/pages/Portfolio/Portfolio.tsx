import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { Element } from 'react-scroll';

import { StoveTop, StoveTopMobile, StoveTopProps } from './components/StoveTop';
import css from './Portfolio.module.scss';
import lafoodlistPhoto from '../../images/lafoodlist.png';
import seattleSpursPhoto from '../../images/seattlespurs.png';
import wordlePhoto from '../../images/wordle.png';

const PORTFOLIO: Omit<StoveTopProps, 'idx'>[] = [
  {
    name: 'Seattle Spurs',
    image: seattleSpursPhoto,
    link: 'https://www.seattlespurs.com',
  },
  {
    name: 'LA Food List',
    image: lafoodlistPhoto,
    link: 'https://www.lafoodlist.com',
  },
  {
    name: 'Wordle Bot',
    image: wordlePhoto,
    link: '/WordleBot.pdf',
  },
];

const TITLE_ANIMATION = {
  initial: { y: '-3vw', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

const Portfolio = () => {
  return isMobile ? <PortfolioMobile /> : <PortfolioDesktop />;
};

// ------------------------- DESKTOP ------------------------------

const PortfolioDesktop = () => {
  return (
    <Element name="portfolio">
      <section className={css.portfolioSection}>
        <motion.h1 className={css.sectionTitle} {...TITLE_ANIMATION}>
          Portfolio
        </motion.h1>
        <div className={css.portfolioContainer}>
          {PORTFOLIO.map((project, idx) => (
            <StoveTop
              key={idx}
              idx={idx}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

// ------------------------- MOBILE ------------------------------

const PortfolioMobile = () => {
  return (
    <Element name="portfolio">
      <section className={css.portfolioSection}>
        <motion.h1 className={css.sectionTitleMobile} {...TITLE_ANIMATION}>
          Portfolio
        </motion.h1>
        <div className={css.portfolioContainerMobile}>
          {PORTFOLIO.map((project, idx) => (
            <StoveTopMobile
              key={idx}
              idx={idx}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Portfolio;
