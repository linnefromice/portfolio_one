import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { config } from 'react-spring/renderprops';
import { styled } from "@material-ui/core";
// import './main_menu.scss';

const focusedMenuAnimationStyle = {
  from: { opacity: "0.5", color: "silver" },
  to: async (next) => {
    await next({ opacity: "0.75", color: "#64f38c" });
    await next({ opacity: "1", color: "#45B649" });
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
      <div className="mainMenuIcon">
        {icon}
      </div>
      <div className="mainMenuName">{name}</div>
    </>
  )
}

const StyledButton = styled('button')({
  opacity: "0.5",
  color: "silver",
});
type Props = ContentsProps & {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const MainMenu: FC<Props> = ({icon, name, onClick}) => {
  return (
    <StyledButton
      onClick={onClick}
      className="mainMenu"
    >
      <Contents
        icon={icon}
        name={name}
      />
    </StyledButton>
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
      <Contents
        icon={icon}
        name={name}
      />
    </animated.button>
  )
}

export { MainMenu, FocusedMainMenu };
