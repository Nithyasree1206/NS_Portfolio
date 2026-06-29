import { useEffect, useState } from 'react';

const InteractiveCursorGlow = () => {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const moveGlow = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <div
      className="cursor-glow-3d"
      style={{
        transform: `translate3d(${cursor.x - 180}px, ${cursor.y - 180}px, 0)`,
      }}
    />
  );
};

export default InteractiveCursorGlow;
