import classNames from 'classnames';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';

import css from './Header.module.scss';
import useScrollDirection from '../utils/useScrollDirection';

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={classNames(
        css.header,
        scrollDirection === 'down' ? css.headerHidden : css.headerVisible
      )}
    >
      <motion.nav
        className={css.nav}
        initial={{ y: '-6vw' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link>
        <a href="/ResumeMaxGinsberg.pdf" target="_blank">
          Resume
        </a>
      </motion.nav>
    </header>
  );
};

export default Header;
