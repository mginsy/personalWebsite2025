import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { Element } from 'react-scroll';

import css from './About.module.scss';
import { LinkIcons, LinkIconsMobile } from './components/LinkIcons';
import { PhotoAndNameText, PhotoAndNameTextMobile } from './components/PhotoAndNameText';

const DESCRIPTION_BASE_TRANSITION = { duration: 0.4, ease: 'easeOut' };

const DESCRIPTION_ANIMATION_1 = {
  initial: { x: '6vw', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: DESCRIPTION_BASE_TRANSITION,
};

const DESCRIPTION_ANIMATION_2 = {
  ...DESCRIPTION_ANIMATION_1,
  transition: { delay: 0.1, ...DESCRIPTION_BASE_TRANSITION },
};

const About = () => {
  return isMobile ? <AboutMobile /> : <AboutDesktop />;
};

// ------------------------- DESKTOP ------------------------------

const AboutDesktop = () => {
  return (
    <Element name="about">
      <div className={css.aboutContainer}>
        <LinkIcons />
        <div className={css.aboutColPhoto}>
          <PhotoAndNameText />
        </div>
        <div className={css.aboutInfoCol}>
          <div className={css.aboutInfoContainer}>
            <motion.h1 className={css.aboutTextTitle} {...DESCRIPTION_ANIMATION_1}>
              {'Full stack software developer based in Seattle'}
            </motion.h1>
            <motion.p className={css.aboutTextDescription} {...DESCRIPTION_ANIMATION_2}>
              {'Also an expert gardener, cook, and a very ameteur soccer player'}
            </motion.p>
          </div>
        </div>
      </div>
    </Element>
  );
};

// ------------------------- MOBILE ------------------------------

const AboutMobile = () => {
  return (
    <Element name="about">
      <div className={css.aboutContainerMobile}>
        <LinkIconsMobile />
        <div className={css.aboutPhotoContainerMobile}>
          <PhotoAndNameTextMobile />
          <div className={css.aboutInfoContainerMobile}>
            <motion.h1 className={css.aboutTextTitleMobile} {...DESCRIPTION_ANIMATION_1}>
              {'Full stack software developer based in Seattle'}
            </motion.h1>
            <motion.p className={css.aboutTextDescriptionMobile} {...DESCRIPTION_ANIMATION_2}>
              {'Also an expert gardener, cook, and a very ameteur soccer player'}
            </motion.p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
