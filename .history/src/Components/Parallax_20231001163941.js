import React from 'react';
import { useSpring, animated } from 'react-spring';
import s from './ParallaxStyle.module.css';

const Parallax = () => {
  const [{ scrollY }, set] = useSpring(() => ({ scrollY: 0 }));

  const calc = (y) => {
    return -(y - window.innerHeight / 2) / 10;
  };

  const handleScroll = () => {
    set({ scrollY: window.scrollY });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <animated.div
        className={s.parallax}
        style={{
          transform: scrollY.interpolate((y) => `translate3d(0, ${calc(y)}px, 0)`),
        }}>
        <p>fdfdfsdfsefds</p>
      </animated.div>
    </div>
  );
};

export default Parallax;
