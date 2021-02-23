import React, { FC, ReactNode } from "react";
import InfoWrapper from "../../common/info_wrapper";
import { Card, CardContent, Divider } from "@material-ui/core";

type Props = {
  sentences: ReactNode,
  technologies: ReactNode,
  links: ReactNode,
  images: ReactNode
}
const InfoBase: FC<Props> = ({ sentences, technologies, links, images }) => {
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
          <Divider style={{ margin: 5 }}/>
          {technologies}
          <Divider style={{ margin: 5 }}/>
          {links}
        </CardContent>
        {images}
      </Card>
    </InfoWrapper>
  );
}

export default InfoBase;