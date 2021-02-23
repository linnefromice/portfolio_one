import React, { FC, ReactNode } from "react";
import InfoWrapper from "../../common/info_wrapper";
import { Card, CardContent, Divider } from "@material-ui/core";

type Props = {
  sentences: ReactNode,
  technologies: ReactNode,
  links: ReactNode
}
const InfoBase: FC<Props> = ({ sentences, technologies, links }) => {
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
          {sentences}
          <Divider/>
          {technologies}
          <Divider/>
          {links}
        </CardContent>
      </Card>
    </InfoWrapper>
  );
}

export default InfoBase;