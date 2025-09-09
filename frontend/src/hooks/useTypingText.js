import { useEffect, useState } from 'react';

export default function useTypingText(phrases, speed = 70, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    let mounted = true;
    let timeout;

    const current = phrases[index] || '';

    if (phase === 'typing') {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause);
      }
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), speed / 2);
      } else {
        setIndex((index + 1) % phrases.length);
        setPhase('typing');
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 800);
    }

    return () => { mounted = false; clearTimeout(timeout); };
  }, [display, phase, index, phrases, speed, pause]);

  return display;
}
