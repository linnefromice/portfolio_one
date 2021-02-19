import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
// import './info_wrapper.scss';

const InfoWrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });

  return (
    <animated.div
      style={animatedStyle}
    >
      <div className="info_wrapper">
        {children}
      </div>
    </animated.div>
  );
}

export default InfoWrapper;