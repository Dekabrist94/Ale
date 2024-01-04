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
          <h2>ROEMA PARALLAX EFFECT</h2>
          <p>
            The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. The standard Lorem Ipsum passage, used since the 1500s
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  }
}

export default ParallaxEffect;
