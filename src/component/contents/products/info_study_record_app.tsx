import React, { FC } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub } from 'react-icons/fa';
import InfoWrapper from '../../common/info_wrapper';

const InfoStudyRecordApp: FC = () => {
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
            study_record_app
          </Typography>
          <Typography color="textSecondary">
            <span>We can save study record.<br/></span>
            <span>Record summary is displayed with graph.<br/></span>
            <span>Mobile Application / ios & android<br/></span>
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
          <div style={{ padding: 5 }}>
            <Chip
              style={{ margin: 1 }}
              label="sqflite"
              color="secondary"
              variant="outlined"
            />
          </div>
          <Divider/>
          <div style={{ padding: 5 }}>
            <IconButton
              href="https://github.com/linnefromice/study_record_app_01"
            >
              <FaGithub/>
            </IconButton>
          </div>
        </CardContent>
        <CardMedia
          style={{ padding: 1, width: "20vw", height: "50vh" }}
          image="/contents/study_record_app_one.gif"
          title="Sample"
        />
      </Card>
    </InfoWrapper>
  );
}

export default InfoStudyRecordApp;