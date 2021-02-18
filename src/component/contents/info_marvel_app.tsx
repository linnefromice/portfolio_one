import React, { FC } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub } from 'react-icons/fa';
import InfoWrapper from '../common/info_wrapper';

const InfoMarvelApp: FC = () => {
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
            marvel_app
          </Typography>
          <Typography color="textSecondary">
            <span>We can get marvel&#39;s movies information, using Marvel Developer API.<br/></span>
            <span>Architecture: Using bloc (& provider)<br/></span>
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
          </div>
          <Divider/>
          <div style={{ padding: 5 }}>
            <IconButton
              style={{ margin: 1 }}
              href="https://github.com/linnefromice/marvel_flutter"
            >
              <FaGithub/>
            </IconButton>
          </div>
        </CardContent>
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
      </Card>
    </InfoWrapper>
  );
}

export default InfoMarvelApp;