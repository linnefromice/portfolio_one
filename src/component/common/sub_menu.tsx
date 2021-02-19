import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { config } from 'react-spring/renderprops';
import { IconType } from 'react-icons'
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
  icon: IconType,
  name: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const SubMenu: FC<Props> = ({icon, name, onClick}) => {
  return (
    <button onClick={onClick}>
      <div
        className="subMenu"
        style={{ opacity: "0.5", color: "silver" }}
      >
        <div className="subMenuIcon">
          {icon}
        </div>
        <div className="subMenuName">{name}</div>
      </div>
    </button>
  )
}

const FocusedSubMenu: FC<Props> = ({icon, name, onClick}) => {
  const focusedMenuStyle = useSpring(focusedMenuAnimationStyle);

  return (
    <animated.div
      className="subMenu"
      style={focusedMenuStyle}
      onClick={onClick}
    >
      <div className="subMenuIcon">
        {icon}
      </div>
      <div className="subMenuName">{name}</div>
    </animated.div>
  )
}

export { SubMenu, FocusedSubMenu };
