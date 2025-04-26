import {
  AnimationControls,
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'motion/react';

interface animateWordProps {
  str: string;
  initial?: TargetAndTransition | VariantLabels | boolean;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  transition?: Transition;
  delayPerChar: number;
}

export function animateWord({
  str,
  initial,
  animate,
  transition,
  delayPerChar,
}: animateWordProps): React.JSX.Element {
  return (
    <span>
      {str.split('').map((char, i) =>
        char === '\n' ? (
          <br key={i} />
        ) : (
          <motion.span
            key={i}
            initial={initial}
            animate={animate}
            transition={{ delay: delayPerChar * i, ...transition }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      )}
    </span>
  );
}
