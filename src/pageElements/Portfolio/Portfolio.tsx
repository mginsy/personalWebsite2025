import classNames from 'classnames';
import { motion, useInView } from 'motion/react';
import { HTMLProps } from 'react';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Element } from 'react-scroll';

import lafoodlistPhoto from './images/lafoodlist.png';
import seattleSpursPhoto from './images/seattlespurs.png';
import wordlePhoto from './images/wordle.png';
import css from './Portfolio.module.scss';

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

interface StoveTopProps {
  name: string;
  image: string;
  link: string;
  idx: number;
}

const StoveTop = ({ ...props }: StoveTopProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

  const [isFireOn, setIsFireOn] = React.useState(Math.random() < 0.6);

  return (
    <div ref={ref} className={css.stove}>
      <OnOffButton isFireOn={isFireOn} setIsFireOn={setIsFireOn} />
      <div className={css.spoke1} />
      <div className={css.spoke2} />
      <div className={css.spoke3} />
      <div className={css.spoke4} />
      <Pan {...props} isInView={isInView} />
      {isFireOn && <StoveFire idx={props.idx} isInView={isInView} />}
    </div>
  );
};

interface OnOffButtonProps {
  isFireOn: boolean;
  setIsFireOn: (isFireOn: boolean) => void;
}

const OnOffButton = ({ isFireOn, setIsFireOn }: OnOffButtonProps) => {
  const fireOnClassName = React.useMemo(
    () => classNames(css.button, { [css.buttonOn]: isFireOn }),
    [isFireOn]
  );
  return <button onClick={() => setIsFireOn(!isFireOn)} className={fireOnClassName} />;
};

interface PanProps extends StoveTopProps {
  isInView: boolean;
}

const Pan = ({ name, image, link, isInView, idx }: PanProps) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const panAnimation = React.useMemo(
    () => getPanAnimation(isInView, idx),
    [getPanAnimation, isInView, idx]
  );

  return (
    <motion.div className={css.panContainer} onClick={handleClick} {...panAnimation}>
      <div className={css.pan}>
        <div className={css.innerPan}>
          <p className={css.panText}>{name}</p>
          <img className={css.panPhoto} src={image} alt={name} />
        </div>
      </div>
      <div className={css.handle} />
    </motion.div>
  );
};

function getPanAnimation(isInView: boolean, idx: number) {
  return {
    initial: { opacity: 0 },
    animate: isInView ? { rotate: 100, opacity: 1 } : {},
    transition: { delay: 0.15 * idx, duration: 0.7, ease: 'easeOut' },
  };
}

interface StoveFireProps {
  isInView: boolean;
  idx: number;
}

const StoveFire = ({ isInView, idx }: StoveFireProps) => {
  const stoveFireAnimation = React.useMemo(
    () => getStoveFireAnimation(isInView, idx),
    [getStoveFireAnimation, isInView, idx]
  );

  return (
    <motion.div {...stoveFireAnimation}>
      {Array(18)
        .fill(1)
        .map((_, idx) => (
          <Fire
            key={idx}
            style={{ rotate: `${idx * 10}deg`, animationDelay: `${Math.random()}s` }}
          />
        ))}
    </motion.div>
  );
};

function getStoveFireAnimation(isInView: boolean, idx: number) {
  return {
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : {},
    transition: { delay: 0.15 * idx + 0.3, duration: 1, ease: 'easeOut' },
  };
}

const Fire = ({ ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={css.fireDesktop} {...props} />;
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

interface StoveTopMobileProps {
  name: string;
  image: string;
  link: string;
  idx: number;
}

const StoveTopMobile = ({ ...props }: StoveTopMobileProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

  const [isFireOn, setIsFireOn] = React.useState(Math.random() < 0.6);

  return (
    <div ref={ref} className={css.stoveMobile}>
      <OnOffButtonMobile isFireOn={isFireOn} setIsFireOn={setIsFireOn} />
      <div className={css.spoke1Mobile} />
      <div className={css.spoke2Mobile} />
      <div className={css.spoke3Mobile} />
      <div className={css.spoke4Mobile} />
      <PanMobile {...props} isInView={isInView} />
      {isFireOn && <StoveFireMobile idx={props.idx} isInView={isInView} />}
    </div>
  );
};

interface OnOffButtonMobileProps {
  isFireOn: boolean;
  setIsFireOn: (isFireOn: boolean) => void;
}

const OnOffButtonMobile = ({ isFireOn, setIsFireOn }: OnOffButtonMobileProps) => {
  const fireOnClassName = React.useMemo(
    () => classNames(css.buttonMobile, { [css.buttonOn]: isFireOn }),
    [isFireOn]
  );
  return <button onClick={() => setIsFireOn(!isFireOn)} className={fireOnClassName} />;
};

interface PanMobileProps extends StoveTopMobileProps {
  isInView: boolean;
}

const PanMobile = ({ name, image, link, isInView, idx }: PanMobileProps) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const panAnimation = React.useMemo(
    () => getPanAnimation(isInView, idx),
    [getPanAnimation, isInView, idx]
  );

  return (
    <motion.div className={css.panContainerMobile} onClick={handleClick} {...panAnimation}>
      <div className={css.panMobile}>
        <div className={css.innerPanMobile}>
          <p className={css.panTextMobile}>{name}</p>
          <img className={css.panPhotoMobile} src={image} alt={name} />
        </div>
      </div>
      <div className={css.handleMobile} />
    </motion.div>
  );
};

interface StoveFireMobileProps {
  isInView: boolean;
  idx: number;
}

const StoveFireMobile = ({ isInView, idx }: StoveFireMobileProps) => {
  const stoveFireAnimation = React.useMemo(
    () => getStoveFireAnimation(isInView, idx),
    [getStoveFireAnimation, isInView, idx]
  );

  return (
    <motion.div {...stoveFireAnimation}>
      {Array(18)
        .fill(1)
        .map((_, idx) => (
          <FireMobile
            key={idx}
            style={{ rotate: `${idx * 10}deg`, animationDelay: `${Math.random()}s` }}
          />
        ))}
    </motion.div>
  );
};

const FireMobile = ({ ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={css.fireMobile} {...props} />;
};

export default Portfolio;
