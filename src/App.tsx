import React from 'react';

import css from './App.module.scss';
import { Header } from './components';
import { About, Experience, Skills, Portfolio } from './pages';

const App = () => {
  return (
    <div className={css.container}>
      <div className={css.backgroundImage} />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default App;
