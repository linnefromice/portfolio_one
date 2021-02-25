import React, { FC } from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub, FaLink, FaWikipediaW } from 'react-icons/fa';
import InfoBase from './info_base';

const Sentences: FC = () => {
  return (
    <>
      <Typography variant="h6">
        ff_quiz_app
      </Typography>
      <Typography color="textSecondary">
        <span>4-Choice Quiz Application about Final Fantasy IX.<br/></span>
        <span>Language: English, Japanese<br/></span>
        <span>Level: 3 pattern<br/></span>
        <span>Other: Story Overview...<br/></span>
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
    </>
  );
}

const Links: FC = () => {
  return (
    <>
      <IconButton
        style={{ margin: 1 }}
        href="https://github.com/linnefromice/study_record_app_01"
      >
        <FaGithub/>
      </IconButton>
      <IconButton
        style={{ margin: 1 }}
        href="https://www.jp.square-enix.com/ff9/"
      >
        <FaLink/>
      </IconButton>
      <IconButton
        style={{ margin: 1 }}
        href="https://en.wikipedia.org/wiki/Final_Fantasy_IX"
      >
        <FaWikipediaW/>
      </IconButton>
    </>
  );
}

const Images: FC = () => {
  return (
    <>
      <CardMedia
        style={{
          padding: 1,
          width: "20vw",
          height: "50vh"
        }}
        image="/contents/ff_quiz_ver1.png"
        title="sample_one"
      />
      <CardMedia
        style={{
          padding: 1,
          width: "20vw",
          height: "50vh"
        }}
        image="/contents/ff_quiz_ver2.png"
        title="sample_two"
      />
    </>
  );
}

const InfoFFQuizApp: FC = () => {
  return (
    <InfoBase
      sentences={<Sentences/>}
      technologies={<Technologies/>}
      links={<Links/>}
      images={<Images/>}
    />
  );
}

export default InfoFFQuizApp;