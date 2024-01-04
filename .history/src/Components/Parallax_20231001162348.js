import React, { useState, useEffect } from 'react';

const Parallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={s.parallax} style={{ transform: `translateY(${offset * 0.5}px)` }}>
      {/* Ваш контент для параллакс-эффекта здесь */}
    </div>
  );
};

export default Parallax;
