import React, { FC } from 'react';
import { Box, Chip, IconButton, Typography } from "@material-ui/core";
import { FaGithub, FaLink } from 'react-icons/fa';
import InfoBase from './info_base';

const Sentences: FC = () => {
  return (
    <>
      <Typography variant="h6">
        zenn_rss_feeder
      </Typography>
      <Typography color="textSecondary">
        <span>Rss feeder for zenn.dev<br/></span>
        <span>Select topic (techonology & theme) & display articles.<br/></span>
        <span>Also, you can save favorite articles.<br/></span>
      </Typography>
    </>
  )
}

const Technologies: FC = () => {
  return (
    <>
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
      <Chip
        style={{ margin: 1 }}
        label="sqflite"
        color="secondary"
        variant="outlined"
      />
      <Chip
        style={{ margin: 1 }}
        label="xml2json"
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
        href="https://github.com/linnefromice/zenn_rss_feeder"
      >
        <FaGithub/>
      </IconButton>
      <IconButton
        style={{ margin: 1 }}
        href="https://zenn.dev/zenn/articles/zenn-feed-rss"
      >
        <FaLink/>
      </IconButton>
    </>
  );
}

const Images: FC = () => {
  return (
    <Box m={1} display="flex" justifyContent="center" alignItems="center">
      <Typography>Please wait...</Typography>
    </Box>
  );
}

const InfoZennRssFeeder: FC = () => {
  return (
    <InfoBase
      sentences={<Sentences/>}
      technologies={<Technologies/>}
      links={<Links/>}
      images={<Images/>}
    />
  );
}

export default InfoZennRssFeeder;
