import React, { FC } from 'react';
import { Box, Card, CardContent, Chip, Divider, IconButton, Typography } from "@material-ui/core";
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import { SiNewyorktimes } from 'react-icons/si';
import { animated, useSpring } from 'react-spring';
import InfoBase from './info_base';

const Wrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    opacity: "1",
    from: { opacity: "0" },
  });

  return (
    <animated.div style={animatedStyle}>
      {children}
    </animated.div>
  );
}

const VuetifyNewsAppCard: FC = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "transparent",
        borderRadius: "2rem",
        minHeight: "100%"
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

const SlideVueCard: FC = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "transparent",
        borderRadius: "2rem",
        minHeight: "100%"
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

const InfoOtherProducts: FC = () => {
  return (
    <Wrapper>
      <VuetifyNewsAppCard/>
      <SlideVueCard/>
    </Wrapper>
  );
}

const Sentences: FC = () => {
  return (
    <>
      <Typography variant="h6">
        vuetify-news-app
      </Typography>
      <Typography color="textSecondary">
        <span>We can get global news information, using NewYork Times API.<br/></span>
        <span>Designed by Vuetify.<br/></span>
      </Typography>
    </>
  )
}

const Technologies: FC = () => {
  return (
    <>
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
    </>
  );
}

const Links: FC = () => {
  return (
    <>
      <IconButton
        style={{ margin: 1 }}
        href="https://github.com/linnefromice/vuetify-news-app"
      >
        <FaGithub/>
      </IconButton>
      <IconButton
        style={{ margin: 1 }}
        href="https://developer.nytimes.com/"
      >
        <SiNewyorktimes/>
      </IconButton>
      <IconButton
        style={{ margin: 1 }}
        href="https://linnefromice.github.io/vuetify-news-app/#/"
      >
        <GrDeploy/>
      </IconButton>
    </>
  );
}

const Images: FC = () => {
  return (
    <Box
      m={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>NO IMAGE</Typography>
    </Box>
  )
}

const InfoVuetifyNewsApp: FC = () => {
  return (
    <InfoBase
      sentences={<Sentences/>}
      technologies={<Technologies/>}
      links={<Links/>}
      images={<Images/>}
    />
  )
}

export default InfoVuetifyNewsApp;
