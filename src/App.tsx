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

const preloadBackground: string[] = [nature];

const preloadImageList: string[] = [
  accenture,
  edwards,
  fullBody,
  headshot,
  lafoodlist,
  palantir,
  seattlespurs,
  wordle,
];

const App = () => {
  const { imagesPreloaded } = useImagePreloader(preloadBackground);

  return (
    <div className={css.container}>
      <div className={css.backgroundImage} />
      {imagesPreloaded && <Sections />}
    </div>
  );
};

const Sections = () => {
  const { imagesPreloaded } = useImagePreloader(preloadImageList);

  return imagesPreloaded ? (
    <>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
    </>
  ) : null;
};

export default App;
