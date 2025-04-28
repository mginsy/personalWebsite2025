import { motion, useInView } from 'motion/react';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Element } from 'react-scroll';

import { Skill, SkillMobile, SkillProps } from './components/Skill';
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
  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
};

// ------------------------- DESKTOP ------------------------------

const SkillsDesktop = () => {
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

// ------------------------- MOBILE ------------------------------

const SkillsMobile = () => {
  const ref = React.useRef(null);
  const isSkillSectionInView = useInView(ref, { once: true, margin: '0px 0px -30% 0px' });
  return (
    <Element name="skills">
      <section className={css.skillsSection}>
        <motion.h1 ref={ref} className={css.sectionTitleMobile} {...TITLE_ANIMATION}>
          Skills
        </motion.h1>
        <div className={css.skillsContainerMobile}>
          {SKILLS.map((skill, idx) => (
            <SkillMobile
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

export default Skills;
