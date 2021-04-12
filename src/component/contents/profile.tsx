import React, { FC } from 'react';
import { Avatar, Box, Chip, makeStyles, Typography } from "@material-ui/core";
import { animated, useSpring } from 'react-spring';

const Wrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    opacity: "1",
    from: { opacity: "0" },
  });

  return (
    <animated.div style={animatedStyle}>
      {children}
    </animated.div>
  );
}

const useStyles = makeStyles({
  avatar: {
    width: '6vw',
    height: '100%'
  },
  chip: {
    margin: '0.25px'
  }
});
const Profile: FC = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <div className="wrapper-profile-card">
        <div className="wrapper-profile-card-content">
          <div className="profile-content">
            <Typography variant={"h6"}>About Me</Typography>
            <Avatar
              src="/contents/icon_account_resize.jpg"
              className={classes.avatar}
            />
            <Typography variant={"h6"}>Linnefromice</Typography>
            <Typography variant={"body2"}>Hello, I&#39;m a Web Developer from Japan.</Typography>
          </div>
          <Box width={2}/>
          <div className="skills-content">
            <Typography>SKILLS</Typography>
            <Typography variant="overline">Work</Typography>
            <Box padding={0.25}>
              <Box>
                <Chip className={classes.chip} label="JavaScript" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="TypeScript" disabled color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="React" color="secondary" variant="outlined"/>
                <Chip className={classes.chip} label="Next.js" disabled color="primary" variant="outlined"/>
              </Box>
              <Box>
                <Chip className={classes.chip} label="Java" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="Ruby" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="Spring" color="secondary" variant="outlined"/>
                <Chip className={classes.chip} label="Ruby on Rails" color="secondary" variant="outlined"/>
              </Box>
              <Box>
                <Chip className={classes.chip} label="Oracle" color="secondary" variant="outlined"/>
                <Chip className={classes.chip} label="MySQL" color="secondary" variant="outlined"/>
              </Box>
              <Box>
                <Chip className={classes.chip} label="Docker" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="Kubernetes" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="Terraform" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="AWS" disabled color="primary" variant="outlined"/>
              </Box>
            </Box>
            <Typography variant="overline">Private</Typography>
            <Box padding={0.25}>
              <Box>
                <Chip className={classes.chip} label="Dart" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="Vue" color="secondary" variant="outlined"/>
                <Chip className={classes.chip} label="Kotlin" disabled color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="Flutter" color="secondary" variant="outlined"/>
              </Box>
              <Box>
                <Chip className={classes.chip} label="Go" color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="Spring Boot" color="secondary" variant="outlined"/>
                <Chip className={classes.chip} label="Firebase" disabled color="primary" variant="outlined"/>
                <Chip className={classes.chip} label="GCP" disabled color="primary" variant="outlined"/>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Profile;
