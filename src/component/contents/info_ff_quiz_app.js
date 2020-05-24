import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub, FaLink, FaWikipediaW } from 'react-icons/fa';
import InfoWrapper from '../common/info_wrapper';

const InfoFFQuizApp = () => {
  return (
    <InfoWrapper>
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
            ff_quiz_app
          </Typography>
          <Typography color="textSecondary">
            <span>4-Choice Quiz Application about Final Fantasy IX.<br/></span>
            <span>Language: English, Japanese<br/></span>
            <span>Level: 3 pattern<br/></span>
            <span>Other: Story Overview...<br/></span>
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
          <Divider/>
          <div style={{ padding: 5 }}>
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
          </div>
        </CardContent>
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
      </Card>
    </InfoWrapper>
  );
}

export default InfoFFQuizApp;