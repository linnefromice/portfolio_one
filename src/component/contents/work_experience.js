import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";

import { animated, useSpring } from 'react-spring';

const Wrapper = (props) => {
  const animatedStyle = useSpring({
    from: { opacity: "0" },
    to: { opacity: "1" },
  });

  return (
    <animated.div
      style={animatedStyle}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        {props.children}
      </div>
    </animated.div>
  );
}

const WorkExperience = () => {
  return (
    <Wrapper>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Simplex Inc."
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body1">2016.4 - 2020.4<br/></Typography>
                <Typography component="span" variant="body2">- Experienced from leading in to O&M / from player to manager.<br/></Typography>
                <Typography component="span" variant="body2">- Financial(CryptoAssets/FX) trade system for individuals & security company.<br/></Typography>
                <Typography component="span" variant="body2">- Java(Spring), HTML/CSS, JavaScript(React), AWS, Apache Cordova, Oracle, Tomcat, Github, Jenkins ...<br/></Typography>
                <Typography component="span" variant="body2">18.4-18.7: Mentor / Training for 150 new graduates<br/></Typography>
                <Typography component="span" variant="body2">19.7-20.4: Dev lead (having 30 members) / New development of hybrid application & back system in leading<br/></Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="New employment"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body1">2020.6 -</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default WorkExperience;