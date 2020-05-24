import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
        }}
      >
        {props.children}
      </div>
    </animated.div>
  );
}

const VuetifyNewsAppCard = () => {
  return (
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
          vuetify-news-app
        </Typography>
        <Typography color="textSecondary">
          <span>We can get global news information, using NewYork Times API.<br/></span>
          <span>Designed by Vuetify.<br/></span>
        </Typography>
        <Divider/>
        <div style={{ padding: 5 }}>
          <Chip
            style={{ margin: 1 }}
            label="Vue"
            color="primary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="vuetify"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="vue-router"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="axios"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="fortawesome"
            color="secondary"
            variant="outlined"
          />
        </div>
        <Divider/>
        <div style={{ padding: 5 }}>
          <IconButton
            style={{ margin: 1 }}
            href="https://github.com/linnefromice/vuetify-news-app"
          >
            <FaGithub/>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

const SlideVueCard = () => {
  return (
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
          slide-vue
        </Typography>
        <Typography color="textSecondary">
          <span>You can make slides with Vue Framework..<br/></span>
          <span>Core function provided by marp plugin.<br/></span>
        </Typography>
        <Divider/>
        <div style={{ padding: 5 }}>
          <Chip
            style={{ margin: 1 }}
            label="Vue"
            color="primary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="vuetify"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="marp-vue"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="marp-core"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="vue-awesome-swiper"
            color="secondary"
            variant="outlined"
          />
        </div>
        <Divider/>
        <div style={{ padding: 5 }}>
          <IconButton
            style={{ margin: 1 }}
            href="https://github.com/linnefromice/slide-vue"
          >
            <FaGithub/>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

const InfoOtherProducts = () => {
  return (
    <Wrapper>
      <VuetifyNewsAppCard/>
      <SlideVueCard/>
    </Wrapper>
  );
}

export default InfoOtherProducts;