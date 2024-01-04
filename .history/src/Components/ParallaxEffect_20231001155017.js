import React, { Component } from 'react';
import './ParallaxEffect.css';

class ParallaxEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  render() {
    const { scrollY } = this.state;

    return (
      <div className="parallax-container">
        <div className="parallax" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          {/* Ваш контент для параллакс-эффекта здесь */}
        </div>
      </div>
    );
  }
}

export default ParallaxEffect;
