import { useInView } from 'motion/react';
import React from 'react';

import { OnOffButton, OnOffButtonMobile } from './OnOffButton';
import { Pan, PanMobile } from './Pan';
import { StoveFire, StoveFireMobile } from './StoveFire';
import css from './StoveTop.module.scss';

export interface StoveTopProps {
  name: string;
  image: string;
  link: string;
  idx: number;
}

// ------------------------- DESKTOP ------------------------------

export const StoveTop = ({ ...props }: StoveTopProps) => {
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

// ------------------------- MOBILE ------------------------------

export const StoveTopMobile = ({ ...props }: StoveTopProps) => {
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
