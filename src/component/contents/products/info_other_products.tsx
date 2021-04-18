import React, { FC } from 'react';
import { Card, CardContent, Chip, Divider, IconButton, Typography } from "@material-ui/core";
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import { animated, useSpring } from 'react-spring';

const Wrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    opacity: "1",
    from: { opacity: "0" },
  });

  return (
    <animated.div style={animatedStyle}>
      {children}
    </animated.div>
  );
}

const AppTweet: FC = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "transparent",
        borderRadius: "2rem",
        minHeight: "100%"
      }}
    >
      <CardContent>
        <Typography variant="h6">
          app_tweet
        </Typography>
        <Typography color="textSecondary">
          <span>client/server app like twitter.<br/></span>
          <span>Use react/rails/docker etc...<br/></span>
        </Typography>
        <Divider/>
        <div style={{ padding: 5 }}>
          <Chip
            style={{ margin: 1 }}
            label="React"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="Ruby on Rails"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="Docker"
            color="primary"
            variant="outlined"
          />
        </div>
        <Divider/>
        <div style={{ padding: 5 }}>
          <IconButton
            style={{ margin: 1 }}
            href="https://github.com/linnefromice/app_tweet_01"
          >
            <FaGithub/>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

const CreditCardForm: FC = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "transparent",
        borderRadius: "2rem",
        minHeight: "100%"
      }}
    >
      <CardContent>
        <Typography variant="h6">
          credit_card_form
        </Typography>
        <Typography color="textSecondary">
          <span>Credit card form using Nextjs.<br/></span>
          <span>Idea from medium &apos;Here Are 6 Front-End Challenges to Code&apos;.<br/></span>
        </Typography>
        <Divider/>
        <div style={{ padding: 5 }}>
          <Chip
            style={{ margin: 1 }}
            label="Next.js"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="css modules"
            color="secondary"
            variant="outlined"
          />
          <Chip
            style={{ margin: 1 }}
            label="sass"
            color="secondary"
            variant="outlined"
          />
        </div>
        <Divider/>
        <div style={{ padding: 5 }}>
          <IconButton
            style={{ margin: 1 }}
            href="https://github.com/linnefromice/credit_card_form_nextjs_01"
          >
            <FaGithub/>
          </IconButton>
          <IconButton
            style={{ margin: 1 }}
            href="https://linnefromice.github.io/credit_card_form_nextjs_01/"
          >
            <GrDeploy/>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

const InfoOtherProducts: FC = () => {
  return (
    <Wrapper>
      <AppTweet/>
      <CreditCardForm/>
    </Wrapper>
  );
}

export default InfoOtherProducts;
