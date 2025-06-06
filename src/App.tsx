import css from './App.module.scss';
import { Header } from './components';
import useImagePreloader from './hooks/useImagePreloader';
import accenture from './images/accenture.png';
import edwards from './images/edwards.png';
import fullBody from './images/fullBody.png';
import headshot from './images/headshot.png';
import lafoodlist from './images/lafoodlist.png';
import nature from './images/nature.gif';
import palantir from './images/palantir.png';
import seattlespurs from './images/seattlespurs.png';
import wordle from './images/wordle.png';
import { About, Experience, Skills, Portfolio } from './pages';

const preloadImageList: string[] = [
  accenture,
  edwards,
  fullBody,
  headshot,
  lafoodlist,
  nature,
  palantir,
  seattlespurs,
  wordle,
];

const App = () => {
  const { imagesPreloaded } = useImagePreloader(preloadImageList);

  return (
    <div className={css.container}>
      <div className={css.backgroundImage} />
      {imagesPreloaded && (
        <>
          <Header />
          <About />
          <Experience />
          <Skills />
          <Portfolio />
        </>
      )}
    </div>
  );
};

export default App;
