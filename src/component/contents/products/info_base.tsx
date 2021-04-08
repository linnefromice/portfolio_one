import React, { FC, ReactNode } from "react";
import InfoWrapper from "../../common/info_wrapper";
import { Card, CardContent, Divider, styled } from "@material-ui/core";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "transparent",
  borderRadius: "2rem"
});

type Props = {
  sentences: ReactNode,
  technologies: ReactNode,
  links: ReactNode,
  images: ReactNode
}
const InfoBase: FC<Props> = ({ sentences, technologies, links, images }) => {
  return (
    <InfoWrapper>
      <StyledCard>
        <CardContent>
          {sentences}
          <Divider style={{ margin: 5 }}/>
          {technologies}
          <Divider style={{ margin: 5 }}/>
          {links}
        </CardContent>
        {images}
      </StyledCard>
    </InfoWrapper>
  );
}

export default InfoBase;
