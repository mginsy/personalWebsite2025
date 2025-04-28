import { motion, useInView } from 'motion/react';
import React from 'react';
import { Element } from 'react-scroll';

import AWSLogo from './images/AWS.png';
import GCPLogo from './images/GCP.png';
import GraphQLLogo from './images/GraphQL.png';
import JavaLogo from './images/Java.png';
import JavascriptLogo from './images/Javascript.png';
import NextJSLogo from './images/NextJS.png';
import NodeJSLogo from './images/NodeJS.png';
import PythonLogo from './images/Python.png';
import ReactLogo from './images/React.png';
import SQLLogo from './images/SQL.png';
import TypescriptLogo from './images/Typescript.png';
import css from './Skills.module.scss';

const SKILLS: Omit<SkillProps, 'idx' | 'startAnimation'>[] = [
  { name: 'ReactJS', image: ReactLogo },
  { name: 'Typescript', image: TypescriptLogo },
  { name: 'Java', image: JavaLogo },
  { name: 'GraphQL', image: GraphQLLogo },
  { name: 'Python', image: PythonLogo },
  { name: 'React Native', image: ReactLogo },
  { name: 'Javascript', image: JavascriptLogo },
  { name: 'SQL', image: SQLLogo },
  { name: 'AWS', image: AWSLogo },
  { name: 'GCP', image: GCPLogo },
  { name: 'NextJS', image: NextJSLogo },
  { name: 'NodeJS', image: NodeJSLogo },
];

const TITLE_ANIMATION = {
  initial: { y: '-3vw', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

const Skills = () => {
  const ref = React.useRef(null);
  const isSkillSectionInView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });
  return (
    <Element name="skills">
      <section className={css.skillsSection}>
        <motion.h1 ref={ref} className={css.sectionTitle} {...TITLE_ANIMATION}>
          Skills
        </motion.h1>
        <div className={css.skillsContainer}>
          {SKILLS.map((skill, idx) => (
            <Skill
              key={idx}
              idx={idx}
              name={skill.name}
              image={skill.image}
              startAnimation={isSkillSectionInView}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

function getSkillAnimation(startAnimation: boolean, idx: number) {
  return {
    initial: { y: '3vw', opacity: 0 },
    animate: startAnimation ? { y: 0, opacity: 1 } : {},
    transition: { delay: 0.05 * idx, duration: 0.4, ease: 'easeOut' },
  };
}

interface SkillProps {
  name: string;
  image: string;
  idx: number;
  startAnimation: boolean;
}

const Skill = ({ name, image, idx, startAnimation }: SkillProps) => {
  const skillAnimation = React.useMemo(
    () => getSkillAnimation(startAnimation, idx),
    [getSkillAnimation, startAnimation, idx]
  );
  return (
    <motion.div className={css.skillContainer} {...skillAnimation}>
      <p className={css.skillName}>{name}</p>
      <div className={css.skillImageContainer}>
        <img className={css.skillImage} src={image} alt={name} />
      </div>
    </motion.div>
  );
};

export default Skills;
