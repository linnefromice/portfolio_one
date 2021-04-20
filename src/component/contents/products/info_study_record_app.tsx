import React, { FC } from 'react';
import { CardMedia, Chip, IconButton, Typography } from "@material-ui/core";
import { FaGithub } from 'react-icons/fa';
import InfoBase from './info_base';

const Sentences: FC = () => {
  return (
    <>
      <Typography variant="h6">
        study_record_app
      </Typography>
      <Typography color="textSecondary">
        <span>We can save study record.<br/></span>
        <span>Record summary is displayed with graph.<br/></span>
        <span>Mobile Application / ios & android<br/></span>
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
        color="secondary"
        variant="outlined"
      />
      <br/>
      <Chip
        style={{ margin: 1 }}
        label="sqflite"
        color="secondary"
        variant="outlined"
      />
    </>
  );
}

const Links: FC = () => {
  return (
    <IconButton
      href="https://github.com/linnefromice/study_record_app_01"
    >
      <FaGithub/>
    </IconButton>
  );
}

const Images: FC = () => {
  return (
    <CardMedia
      style={{ padding: 1, width: "20vw", height: "50vh" }}
      image="/contents/study_record_app_one.gif"
      title="Sample"
    />
  );
}

const InfoStudyRecordApp: FC = () => {
  return (
    <InfoBase
      sentences={<Sentences/>}
      technologies={<Technologies/>}
      links={<Links/>}
      images={<Images/>}
    />
  );
}

export default InfoStudyRecordApp;
