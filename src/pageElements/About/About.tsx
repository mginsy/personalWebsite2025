import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { motion } from 'motion/react';
import { Element } from 'react-scroll';

import css from './About.module.scss';
import fullBody from './images/fullBody.png';

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

const PHOTO_ANIMATION = {
  initial: { x: '-3vw', y: '8vw', opacity: 0.5 },
  animate: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const NAME_ANIMATION = {
  initial: { x: '6vw', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const PhotoAndNameText = () => {
  return (
    <>
      <motion.img src={fullBody} className={css.photo} {...PHOTO_ANIMATION} />
      <motion.h1 className={css.nameText} {...NAME_ANIMATION}>
        Max
        <br />
        Ginsberg
      </motion.h1>
    </>
  );
};

const LINK_ICON_BASE_TRANSITION = { duration: 0.5, ease: 'easeOut' };

const LINK_ICON_ANIMATION_1 = {
  initial: { x: '4vw', scale: 0.2, opacity: 0 },
  animate: { x: 0, scale: 1, opacity: 1 },
  transition: LINK_ICON_BASE_TRANSITION,
};

const LINK_ICON_ANIMATION_2 = {
  initial: { x: '4vw', scale: 0.2, opacity: 0 },
  animate: { x: 0, scale: 1, opacity: 1 },
  transition: { delay: 0.1, ...LINK_ICON_BASE_TRANSITION },
};

const LinkIcons = () => {
  return (
    <div className={css.linkIconsContainer}>
      <motion.div {...LINK_ICON_ANIMATION_1}>
        <a href={'https://github.com/mginsy'} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className={classNames(css.linkIcon, css.githubIcon)}
            icon={faGithub}
            size="2x"
          />
        </a>
      </motion.div>
      <motion.div {...LINK_ICON_ANIMATION_2}>
        <a
          href={'https://www.linkedin.com/in/max-ginsberg-729215159/'}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className={classNames(css.linkIcon, css.linkedInIcon)}
            icon={faLinkedin}
            size="2x"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default About;
