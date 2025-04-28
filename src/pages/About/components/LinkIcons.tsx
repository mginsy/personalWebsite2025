import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { motion } from 'motion/react';

import css from './LinkIcons.module.scss';

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

// ------------------------- DESKTOP ------------------------------

export const LinkIcons = () => {
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

// ------------------------- MOBILE ------------------------------

export const LinkIconsMobile = () => {
  return (
    <div className={css.linkIconsContainerMobile}>
      <motion.div {...LINK_ICON_ANIMATION_1}>
        <a href={'https://github.com/mginsy'} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className={classNames(css.linkIconMobile, css.githubIcon)}
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
            className={classNames(css.linkIconMobile, css.linkedInIcon)}
            icon={faLinkedin}
            size="2x"
          />
        </a>
      </motion.div>
    </div>
  );
};
