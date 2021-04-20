import React, { FC } from 'react';
import { Box, CardMedia, Chip, IconButton, Typography } from "@material-ui/core";
import { FaGithub } from 'react-icons/fa';
import InfoBase from './info_base';

const Sentences: FC = () => {
  return (
    <>
      <Typography variant="h6">
        app_tweet
      </Typography>
      <Typography color="textSecondary">
        <span>client/server app like twitter.<br/></span>
        <span>Use react for client, rails for server.<br/></span>
        <span>CRUD api for User/Tweet models & Authentication function.</span>
      </Typography>
    </>
  );
}

const Technologies: FC = () => {
  return (
    <>
      <div>
        <Chip
          style={{ margin: 1 }}
          label="React"
          color="secondary"
          variant="outlined"
        />
        <Chip
          style={{ margin: 1 }}
          label="TypeScript"
          color="primary"
          variant="outlined"
        />
        <Chip
          style={{ margin: 1 }}
          label="styled-component"
          color="primary"
          variant="outlined"
        />
      </div>
      <div>
        <Chip
          style={{ margin: 1 }}
          label="Ruby on Rails"
          color="secondary"
          variant="outlined"
        />
        <Chip
          style={{ margin: 1 }}
          label="RSpec"
          color="secondary"
          variant="outlined"
        />
      </div>
    </>
  );
}

const Links: FC = () => {
  return (
    <IconButton
      href="https://github.com/linnefromice/app_tweet_01"
    >
      <FaGithub/>
    </IconButton>
  );
}

const Images: FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      <CardMedia
        style={{ margin: 1, width: "20vw", height: "20vh" }}
        image="/contents/app_tweet_ver1.gif"
        title="Sample1"
      />
      <CardMedia
        style={{ margin: 1, width: "20vw", height: "20vh" }}
        image="/contents/app_tweet_ver2.gif"
        title="Sample2"
      />
    </Box>
  );
}

const InfoAppTweet: FC = () => {
  return (
    <InfoBase
      sentences={<Sentences/>}
      technologies={<Technologies/>}
      links={<Links/>}
      images={<Images/>}
    />
  );
}

export default InfoAppTweet;
