import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { config } from 'react-spring/renderprops';
// import './main_menu.scss';

const focusedMenuAnimationStyle = {
  from: { opacity: "0.5", color: "silver" },
  to: async (next) => {
    await next({ opacity: "0.75", color: "#64f38c" });
    await next({ opacity: "1", color: "#45B649" });
  },
  config: config.gentle
};

type Props = {
  icon: JSX.Element, // IconType,
  name: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const MainMenu: FC<Props> = ({icon, name, onClick}) => {
  return (
    <button
      onClick={onClick}
      className="mainMenu"
      style={{ opacity: "0.5", color: "silver" }}
    >
      <div className="mainMenuIcon">
        {icon}
      </div>
      <div className="mainMenuName">{name}</div>
    </button>
  )
}

const FocusedMainMenu: FC<Props> = ({icon, name, onClick}) => {
  const focusedMenuStyle = useSpring(focusedMenuAnimationStyle);

  return (
    <animated.button
      onClick={onClick}
      className="mainMenu"
      style={focusedMenuStyle}
    >
      <div className="mainMenuIcon">
        {icon}
      </div>
      <div className="mainMenuName">{name}</div>
    </animated.button>
  )
}

export { MainMenu, FocusedMainMenu };
