import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub } from 'react-icons/fa';
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
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {props.children}
      </div>
    </animated.div>
  );
}

const InfoMarvelApp = () => {
  return (
    <Wrapper>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          borderRadius: "2rem"
        }}
      >
        <CardContent>
          <Typography variant="h6">
            marvel_app
          </Typography>
          <Typography color="textSecondary">
            <span>We can get marvel's movies information, using Marvel Developer API.<br/></span>
            <span>Architecture: Using bloc (& provider)<br/></span>
          </Typography>
          <Divider/>
          <div style={{ padding: 5 }}>
            <Chip
              style={{ margin: 1 }}
              label="Dart"
              color="primary"
              variant="outlined"
            />
            <Chip
              style={{ margin: 1 }}
              label="Flutter"
              color="primary"
              variant="outlined"
            />
          </div>
          <div style={{ padding: 5 }}>
            <Chip
              style={{ margin: 1 }}
              label="provider"
              color="secondary"
              variant="outlined"
            />
            <Chip
              style={{ margin: 1 }}
              label="crypto"
              color="secondary"
              variant="outlined"
            />
            <Chip
              style={{ margin: 1 }}
              label="http"
              color="secondary"
              variant="outlined"
            />
          </div>
          <Divider/>
          <div style={{ padding: 5 }}>
            <IconButton
              style={{ margin: 1 }}
              href="https://github.com/linnefromice/marvel_flutter"
            >
              <FaGithub/>
            </IconButton>
          </div>
        </CardContent>
        <CardMedia
          style={{ padding: 1, width: "20vw", height: "50vh" }}
          image="/contents/marvel_app_ver1.png"
          title="Sample"
        />
        <CardMedia
          style={{ padding: 1, width: "20vw", height: "50vh" }}
          image="/contents/marvel_app_ver2.png"
          title="Sample"
        />
      </Card>
    </Wrapper>
  );
}

export default InfoMarvelApp;