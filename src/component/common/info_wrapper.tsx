import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
// import './info_wrapper.scss';

const InfoWrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    opacity: "1",
    from: { opacity: "0" },
  });

  return (
    <animated.div style={animatedStyle}>
      {children}
    </animated.div>
  );
}

export default InfoWrapper;
