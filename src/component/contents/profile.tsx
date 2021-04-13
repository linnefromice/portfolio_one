import React, { FC } from 'react';
import { Avatar, Box, Chip, Divider, makeStyles, Typography } from "@material-ui/core";
import { FaIdCardAlt, FaMapMarkerAlt, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import { animated, useSpring } from 'react-spring';

const Wrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    opacity: "1",
    width: "100%",
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
            <Avatar
              src="/contents/icon_account_resize.jpg"
              className={classes.avatar}
            />
            <Typography variant={"h6"}>Arata</Typography>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              flexDirection="row"
              margin={0.25}
            >
              <Box margin={0.25}>
                <FiAtSign />
              </Box>
              <Box margin={0.25}>
                <Typography variant={"body2"}>linnefromice</Typography>
              </Box>
            </Box>
            <Box width="100%">
              <Divider/>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              flexDirection="row"
              margin={0.25}
            >
              <Box margin={0.25}>
                <FaIdCardAlt />
              </Box>
              <Box margin={0.25}>
                <Typography variant={"body2"}>Web Developer</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              flexDirection="row"
              margin={0.25}
            >
              <Box margin={0.25}>
                <FaMapMarkerAlt />
              </Box>
              <Box margin={0.25}>
                <Typography variant={"body2"}>Tokyo, Japan</Typography>
              </Box>
            </Box>
            <Box width="100%">
              <Divider/>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              flexDirection="row"
              margin={0.25}
            >
              <Typography>I also like Flutter.</Typography>
            </Box>
            <Box width="100%">
              <Divider/>
            </Box>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              flexDirection="row"
              margin={0.25}
            >
              <Box margin={0.5}>
                <FaGithub size={28}/>
              </Box>
              <Box margin={0.5}>
                <FaTwitter size={28}/>
              </Box>
            </Box>
          </div>
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
