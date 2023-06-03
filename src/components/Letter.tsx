import { useState } from 'react';
import { bgColors } from '../constants';

function Letter({ letter }: { letter: string }) {
  const [stateIndex, setStateIndex] = useState<number>(0);

  const onClick = () => setStateIndex((i) => (i === bgColors.length - 1 ? 0 : i + 1));

  return (
    <button onClick={onClick} className="letter" style={{ backgroundColor: bgColors[stateIndex] }}>
      {letter.toLocaleUpperCase()}
    </button>
  );
}

export default Letter;
