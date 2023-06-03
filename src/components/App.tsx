import { useState } from 'react';
import Letter from './Letter';
import { vowels, consonants } from '../constants';

function App() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <>
      <header>
        <h1>Wordle Letter Tracker</h1>
      </header>
      <main>
        <h2>Vowels</h2>
        {vowels.map((letter) => (
          <Letter letter={letter} key={letter + resetKey} />
        ))}
        <h2>Consonants</h2>
        {consonants.map((letter) => (
          <Letter letter={letter} key={letter + resetKey} />
        ))}
        <button onClick={() => setResetKey((key) => key + 1)} className="reset">
          RESET ALL
        </button>
      </main>
    </>
  );
}

export default App;
