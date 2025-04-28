import classNames from 'classnames';
import { motion, useInView } from 'motion/react';
import { HTMLProps } from 'react';
import React from 'react';
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
  return <div className={css.fire} {...props} />;
};

export default Portfolio;
