import React, { FC } from 'react';
import { Avatar, Card, CardContent, Chip, Typography } from "@material-ui/core";
import { animated, useSpring } from 'react-spring';

const Wrapper: FC = ({ children }) => {
  const animatedStyle = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    opacity: "1",
    from: { opacity: "0" },
  });

  return (
    <animated.div style={animatedStyle}>
      {children}
    </animated.div>
  );
}

const Profile: FC = () => {
  return (
    <Wrapper>
      <Card
        style={{
          backgroundColor: "transparent",
          borderRadius: "2rem",
        }}
      >
        <CardContent>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
              <Typography variant={"h6"}>About Me</Typography>
              <Avatar
                style={{ width: "6vw", height: "100%"}}
                src="/contents/icon_account_resize.jpg"
              />
              <Typography variant={"h6"}>Linnefromice</Typography>
              <Typography variant={"body2"}>Hello, I&#39;m a Web Developer from Japan.</Typography>
            </div>
            <div style={{ width: 2 }}/>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
              <Typography>SKILLS</Typography>
              <Typography variant="overline">Work</Typography>
              <div style={{ padding: 0.25 }}>
                <div>
                  <Chip style={{ margin: 0.25 }} label="JavaScript" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="TypeScript" disabled color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="React" color="secondary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Next.js" disabled color="primary" variant="outlined"/>
                </div>
                <div>
                  <Chip style={{ margin: 0.25 }} label="Java" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Ruby" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Spring" color="secondary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Ruby on Rails" color="secondary" variant="outlined"/>
                </div>
                <div>
                  <Chip style={{ margin: 0.25 }} label="Oracle" color="secondary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="MySQL" color="secondary" variant="outlined"/>
                </div>
                <div>
                  <Chip style={{ margin: 0.25 }} label="Docker" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Kubernetes" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Terraform" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="AWS" disabled color="primary" variant="outlined"/>
                </div>
              </div>
              <Typography variant="overline">Private</Typography>
              <div style={{ padding: 0.25 }}>
                <div>
                  <Chip style={{ margin: 0.25 }} label="Dart" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Vue" color="secondary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Kotlin" disabled color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Flutter" color="secondary" variant="outlined"/>
                </div>
                <div>
                  <Chip style={{ margin: 0.25 }} label="Go" color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Spring Boot" color="secondary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="Firebase" disabled color="primary" variant="outlined"/>
                  <Chip style={{ margin: 0.25 }} label="GCP" disabled color="primary" variant="outlined"/>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  );
}

export default Profile;
