import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { motion } from 'motion/react';
import { Element } from 'react-scroll';

import css from './About.module.scss';
import fullBody from './images/fullBody.png';

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
            <motion.h1
              className={css.aboutTextTitle}
              initial={{ x: '6vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {'Full stack software developer based in Seattle'}
            </motion.h1>
            <motion.p
              className={css.aboutTextDescription}
              initial={{ x: '6vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
            >
              {'Also an expert gardener, cook, and a very ameteur soccer player'}
            </motion.p>
          </div>
        </div>
      </div>
    </Element>
  );
};

const PhotoAndNameText = () => {
  return (
    <>
      <motion.img
        src={fullBody}
        className={css.photo}
        initial={{ x: '-3vw', y: '8vw', opacity: 0.5 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <motion.h1
        className={css.nameText}
        initial={{ x: '6vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Max
        <br />
        Ginsberg
      </motion.h1>
    </>
  );
};

const LinkIcons = () => {
  return (
    <div className={css.linkIconsContainer}>
      <motion.div
        initial={{ x: '4vw', scale: 0.2, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <a href={'https://github.com/mginsy'} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className={classNames(css.linkIcon, css.githubIcon)}
            icon={faGithub}
            size="2x"
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ x: '4vw', scale: 0.2, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
      >
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
