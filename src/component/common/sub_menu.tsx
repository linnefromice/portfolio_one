import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { config } from 'react-spring/renderprops';
import { styled } from "@material-ui/core";
// import './sub_menu.scss';

const focusedMenuAnimationStyle = {
  from: {
    fontWeight: 400,
    fontSize: "100%",
    width: "6vw",
    opacity: "0.5",
    color: "silver",
  },
  to: async next => {
    await next({
      fontWeight: 800,
      fontSize: "110%",
      width: "8vw",
      opacity: "0.75",
      color: "#64f38c",
    });
    await next({
      fontWeight: 800,
      fontSize: "110%",
      width: "8vw",
      opacity: "1",
      color: "#45B649",
    });
  },
  config: config.gentle
};

type ContentsProps = {
  icon: JSX.Element, // IconType,
  name: string,
}
const Contents: FC<ContentsProps> = ({ icon, name }) => {
  return (
    <>
      <div className="subMenuIcon">
        {icon}
      </div>
      <div className="subMenuName">{name}</div>
    </>
  )
}

const StyledButton = styled('button')({
  width: "6vw",
  opacity: "0.5",
  color: "silver",
});
type Props = ContentsProps & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const SubMenu: FC<Props> = ({icon, name, onClick}) => {
  return (
    <StyledButton
      onClick={onClick}
      className="subMenu"
    >
      <Contents
        icon={icon}
        name={name}
      />
    </StyledButton>
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
      <Contents
        icon={icon}
        name={name}
      />
    </animated.button>
  )
}

export { SubMenu, FocusedSubMenu };
