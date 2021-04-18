import React, { FC } from 'react';
import { Box, Chip, IconButton, Typography } from "@material-ui/core";
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import InfoBase from './info_base';

const Sentences: FC = () => {
  return (
    <>
      <Typography variant="h6">
        slide-vue
      </Typography>
      <Typography color="textSecondary">
        <span>You can make slides with Vue Framework.<br/></span>
        <span>Core function provided by marp plugin.<br/></span>
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
    </>
  );
}

const Links: FC = () => {
  return (
    <>
      <IconButton
        style={{ margin: 1 }}
        href="https://github.com/linnefromice/slide-vue"
      >
        <FaGithub/>
      </IconButton>
      <IconButton
        style={{ margin: 1 }}
        href="https://linnefromice.github.io/slide-vue/"
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

const InfoSlideVue: FC = () => {
  return (
    <InfoBase
      sentences={<Sentences/>}
      technologies={<Technologies/>}
      links={<Links/>}
      images={<Images/>}
    />
  )
}

export default InfoSlideVue;