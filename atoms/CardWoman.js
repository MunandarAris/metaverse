import * as React from "react";

// MUI
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

// custom style
const CardWrapper = styled(Box)(({ theme }) => ({
  width: "17rem",
  backgroundColor: "#24223d",
  borderRadius: "20px",
  marginTop: "3.5rem",
  [theme.breakpoints.only("xs")]: {
    margin: "2rem auto auto auto",
  },
}));

const BoxWrapImage = styled(Box)(() => ({
  height: "10rem",
  width: "100%",
  position: "relative",
}));

const ImageWoman = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "20px 20px 0px 0px",
}));

const ContentWrap = styled(Box)(() => ({
  padding: "2rem 1rem",
}));

const TextTitle = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: "bold",
}));

const TextDesc = styled(Typography)(() => ({
  color: "gray",
}));
const ImagePlay = styled("img")(() => ({
  position: "absolute",
  width: "3rem",
  height: "auto",
  bottom: -25,
  right: 10,
}));

export default function CardWoman() {
  return (
    <CardWrapper>
      <BoxWrapImage>
        <ImageWoman src="/images/woman.png" alt="image-woman" />
        <ImagePlay src="/images/icon-play.png" alt="Play"></ImagePlay>
      </BoxWrapImage>

      <ContentWrap>
        <TextTitle variant="body1">Customize your look</TextTitle>
        <TextDesc variant="body2">Your metaverse digital identity</TextDesc>
      </ContentWrap>
    </CardWrapper>
  );
}
