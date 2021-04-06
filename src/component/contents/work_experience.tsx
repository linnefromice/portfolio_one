import React, { FC, ReactNode } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";

import { animated, useSpring } from 'react-spring';

type Props = {
  children: ReactNode;
}
const Wrapper: FC<Props> = ({ children }) => {
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
            primary="Money Forward, Inc."
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body1">2020.6 -<br/></Typography>
                <Typography component="span" variant="body2">20.6-20.12: Crosscutting product improvement/development for BtoB Services.<br/></Typography>
                <Typography component="span" variant="body2">20.12-XX.XX: Renewal project for BtoB Services.<br/></Typography>
                <Typography component="span" variant="body2">- Ruby(Rails), MySQL, Redis, TypeScript, Next.js, Docker, AWS, Kubernetes, Terraform...</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Alterbo, Inc."
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body1">2020.12 -<br/></Typography>
                <Typography component="span" variant="body2">In-house system improvement<br/></Typography>
                <Typography component="span" variant="body2">- JavaScript, GoogleAppScript, BigQuery, Kintone...</Typography>
              </React.Fragment>
            }
          />
        </ListItem>

      </List>
    </Wrapper>
  );
}

export default WorkExperience;