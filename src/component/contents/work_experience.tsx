import React, { FC, Fragment } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";

import { animated, useSpring } from 'react-spring';

const Wrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
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

const WorkExperience: FC = () => {
  return (
    <Wrapper>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Simplex Inc."
            secondary={
              <Fragment>
                <Typography display="block" variant="body1">2016.4 - 2020.4</Typography>
                <Typography display="block" variant="body2">- Experienced from leading in to O&M / from player to manager.</Typography>
                <Typography display="block" variant="body2">- Financial(CryptoAssets/FX) trade system for individuals & security company.</Typography>
                <Typography display="block" variant="body2">- Java(Spring), HTML/CSS, JavaScript(React), AWS, Apache Cordova, Oracle, Tomcat, Github, Jenkins ...</Typography>
                <Typography display="block" variant="body2">18.4-18.7: Mentor / Training for 150 new graduates</Typography>
                <Typography display="block" variant="body2">19.7-20.4: Dev lead (having 30 members) / New development of hybrid application & back system in leading</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Money Forward, Inc."
            secondary={
              <Fragment>
                <Typography display="block" variant="body1">2020.6 -</Typography>
                <Typography display="block" variant="body2">20.6-20.12: Crosscutting product improvement/development for BtoB Services.</Typography>
                <Typography display="block" variant="body2">20.12-XX.XX: Renewal project for BtoB Services.</Typography>
                <Typography display="block" variant="body2">- Ruby(Rails), MySQL, Redis, TypeScript, Next.js, Docker, AWS, Kubernetes, Terraform...</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Alterbo, Inc."
            secondary={
              <Fragment>
                <Typography display="block" variant="body1">2020.12 -</Typography>
                <Typography display="block" variant="body2">In-house system improvement</Typography>
                <Typography display="block" variant="body2">- JavaScript, GoogleAppScript, BigQuery, Kintone...</Typography>
              </Fragment>
            }
          />
        </ListItem>

      </List>
    </Wrapper>
  );
}

export default WorkExperience;