import { FormEvent, ReactNode, useState } from 'react';

import css from './PasswordGate.module.scss';

const SITE_PASSWORD = 'ComeOnYouSpurs';
const STORAGE_KEY = 'site-unlocked';

type PasswordGateProps = {
  children: ReactNode;
};

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(STORAGE_KEY) === 'true');
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (input === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="site-password">This site is password protected</label>
        <input
          id="site-password"
          type="password"
          autoFocus
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
        />
        <button type="submit">Enter</button>
        {error && <span className={css.error}>Incorrect password</span>}
      </form>
    </div>
  );
};

export default PasswordGate;
