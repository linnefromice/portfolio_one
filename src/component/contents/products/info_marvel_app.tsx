import React, { FC } from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub } from 'react-icons/fa';
import InfoBase from './info_base';

const Sentences: FC = () => {
  return (
    <>
      <Typography variant="h6">
        marvel_app
      </Typography>
      <Typography color="textSecondary">
        <span>We can get marvel&#39;s movies information, using Marvel Developer API.<br/></span>
        <span>Architecture: Using bloc (& provider)<br/></span>
      </Typography>
    </>
  );
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
      <br/>
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
    </>
  );
}

const Links: FC = () => {
  return (
    <IconButton
      style={{ margin: 1 }}
      href="https://github.com/linnefromice/marvel_flutter"
    >
      <FaGithub/>
    </IconButton>
  );
}

const Images: FC = () => {
  return (
    <>
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
    </>
  );
}

const InfoMarvelApp: FC = () => {
  return (
    <InfoBase
      sentences={<Sentences/>}
      technologies={<Technologies/>}
      links={<Links/>}
      images={<Images/>}
    />
  );
}

export default InfoMarvelApp;
