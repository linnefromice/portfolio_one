import React, { FC } from 'react';
import { Card, CardContent, Chip, Divider, IconButton, Typography } from "@material-ui/core";
import { FaGithub } from 'react-icons/fa';
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

const SlideVueCard: FC = () => {
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
          slide-vue
        </Typography>
        <Typography color="textSecondary">
          <span>You can make slides with Vue Framework..<br/></span>
          <span>Core function provided by marp plugin.<br/></span>
        </Typography>
        <Divider/>
        <div style={{ padding: 5 }}>
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
        </div>
        <Divider/>
        <div style={{ padding: 5 }}>
          <IconButton
            style={{ margin: 1 }}
            href="https://github.com/linnefromice/slide-vue"
          >
            <FaGithub/>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

const InfoOtherProducts: FC = () => {
  return (
    <Wrapper>
      <SlideVueCard/>
    </Wrapper>
  );
}

export default InfoOtherProducts;
