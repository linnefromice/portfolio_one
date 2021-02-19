import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { config } from 'react-spring/renderprops';
// import './sub_menu.scss';

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
const SubMenu: FC<Props> = ({icon, name, onClick}) => {
  return (
    <button
      onClick={onClick}
      className="subMenu"
      style={{ opacity: "0.5", color: "silver" }}
    >
      <div className="subMenuIcon">
        {icon}
      </div>
      <div className="subMenuName">{name}</div>
    </button>
  )
}

const FocusedSubMenu: FC<Props> = ({icon, name, onClick}) => {
  const focusedMenuStyle = useSpring(focusedMenuAnimationStyle);

  return (
    <animated.button
      onClick={onClick}
      className="subMenu"
      style={focusedMenuStyle}
    >
      <div className="subMenuIcon">
        {icon}
      </div>
      <div className="subMenuName">{name}</div>
    </animated.button>
  )
}

export { SubMenu, FocusedSubMenu };
