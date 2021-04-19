import React, { FC } from 'react';
import { Box, CardMedia, Chip, IconButton, Typography } from "@material-ui/core";
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import { SiNewyorktimes } from 'react-icons/si';
import InfoBase from './info_base';

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
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CardMedia
        style={{ padding: 1, width: "30vw", height: "20vh" }}
        image="/contents/vuetify_news_app_ver1.png"
        title="Sample"
      />
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
