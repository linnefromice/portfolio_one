import React, { FC } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import { GiSoccerBall } from 'react-icons/gi';
import { MdRadio, MdMovie, MdMusicNote } from 'react-icons/md';
import { FaGamepad, FaHeart, FaBasketballBall, FaFootballBall, FaChessKing } from 'react-icons/fa';

import { animated, useSpring } from 'react-spring';
import { makeStyles } from '@material-ui/core';

const Wrapper: FC = ({ children }) => {
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

type Hobby = {
  icon: JSX.Element;
  primary: string;
  secondary: string;
}
const hobbyListOne: Hobby[] = [
  {
    icon: <GiSoccerBall/>,
    primary: "Soccer",
    secondary: "midfielder / since elementary school / I like barcelona FC."
  },
  {
    icon: <MdMovie/>,
    primary: "Movie",
    secondary: "Fav: The Trueman Show / The Family Man / Real Steel / Avengers ..."
  },
  {
    icon: <FaHeart/>,
    primary: "Japanese Idol",
    secondary: "Hinatazaka46, Miyuki Watanabe (Milky), Erika Ikuta (Nogizaka46) ..."
  },
  {
    icon: <FaBasketballBall/>,
    primary: "NBA Appreciation",
    secondary: "Fav: Stephan Curry, Rajon Rondo, Derrick Rose, Warriors, Celtics..."
  },
  {
    icon: <FaChessKing/>,
    primary: "Board Game",
    secondary: "Fav: Catan, Village (department of architecture) ..."
  },

];
const hobbyListTwo: Hobby[] = [
  {
    icon: <FaGamepad/>,
    primary: "TV Game",
    secondary: "Fav: DewPrism(PS), GunparadeMarch(PS), FinalFantasy..."
  },
  {
    icon: <MdMusicNote/>,
    primary: "Music",
    secondary: "Fav: Mrs. Green Apple, Carly Rae Jepsen, Hikaru Utada, Owl City ..."
  },
  {
    icon: <MdRadio/>,
    primary: "Radio",
    secondary: "All Night-NIPPON (Audrey)"
  },
  {
    icon: <FaFootballBall/>,
    primary: "NFL Appreciation",
    secondary: "I learned from Audrey NFL Club, no longer from Masayasu.W"
  },
]

const useStyles = makeStyles({
  listItemStyle: {
    padding: '0.5vh 0.5vw'
  },
  primaryTextStyle: {
    fontSize: '0.8em'
  },
  secondaryTextStyle: {
    fontSize: '0.6em'
  }
});

type HobbyListProps = {
  hobbyList: Hobby[]
}
const HobbyList: FC<HobbyListProps> = ({ hobbyList }) => {
  const classes = useStyles();
  return (
    <List>
      {hobbyList.map((value, index) => (
        <ListItem
          key={`hobbyList.${index}`}
          classes={{
            gutters: classes.listItemStyle
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>{value.icon}</ListItemAvatar>
          <ListItemText
            classes={{
              primary: classes.primaryTextStyle,
              secondary: classes.secondaryTextStyle,
            }}
            primary={value.primary}
            secondary={value.secondary}
          />
        </ListItem>
      ))}
    </List>
  )
}

const Hobby: FC = () => {
  return (
    <Wrapper>
      <HobbyList hobbyList={hobbyListOne} />
      <HobbyList hobbyList={hobbyListTwo} />
    </Wrapper>
  );
}

export default Hobby;
