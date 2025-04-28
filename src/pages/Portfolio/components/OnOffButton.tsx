import classNames from 'classnames';
import React from 'react';

import css from './OnOffButton.module.scss';

interface OnOffButtonProps {
  isFireOn: boolean;
  setIsFireOn: (isFireOn: boolean) => void;
}

// ------------------------- DESKTOP ------------------------------

export const OnOffButton = ({ isFireOn, setIsFireOn }: OnOffButtonProps) => {
  const fireOnClassName = React.useMemo(
    () => classNames(css.button, { [css.buttonOn]: isFireOn }),
    [isFireOn]
  );
  return <button onClick={() => setIsFireOn(!isFireOn)} className={fireOnClassName} />;
};

// ------------------------- MOBILE ------------------------------

export const OnOffButtonMobile = ({ isFireOn, setIsFireOn }: OnOffButtonProps) => {
  const fireOnClassName = React.useMemo(
    () => classNames(css.buttonMobile, { [css.buttonOn]: isFireOn }),
    [isFireOn]
  );
  return <button onClick={() => setIsFireOn(!isFireOn)} className={fireOnClassName} />;
};
