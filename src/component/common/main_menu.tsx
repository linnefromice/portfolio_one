import React from 'react';
import { animated, useSpring } from 'react-spring';
import { config } from 'react-spring/renderprops';
// import './main_menu.scss';

const focusedMenuAnimationStyle = {
  from: { opacity: "0.5", color: "silver" },
  to: async (next, cancel) => {
    await next({ opacity: "0.75", color: "#64f38c" });
    await next({ opacity: "1", color: "#45B649" });
  },
  config: config.gentle
};

const MainMenu: React.FC = ({icon, name, onClick}) => {
  return (
    <div
      className="mainMenu"
      style={{ opacity: "0.5", color: "silver" }}
      onClick={onClick}
    >
      <div className="mainMenuIcon">
        {icon}
      </div>
      <div className="mainMenuName">
        <center>{name}</center>
      </div>
    </div>
  )
}

const FocusedMainMenu: React.FC = ({icon, name, onClick}) => {
  const focusedMenuStyle = useSpring(focusedMenuAnimationStyle);

  return (
    <animated.div
      className="mainMenu"
      style={focusedMenuStyle}
      onClick={onClick}
    >
      <div className="mainMenuIcon">
        {icon}
      </div>
      <div className="mainMenuName">
        <center >{name}</center>
      </div>
    </animated.div>
  )
}


export { MainMenu, FocusedMainMenu };