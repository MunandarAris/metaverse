// MUI
import { Box } from "@mui/material";
import { styled } from "@mui/system";

// component
import Navigation from "../components/Navigation";
import ContentBanner from "../components/ContentBanner";

// custom style
const BoxWrapper = styled(Box)(() => ({
  background: "url(/images/bg-banner.png)",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  boxSizing: "border-box",
  paddingBottom: "3rem",
  position: "relative",
  backgroundSize: "100% 100%",
}));

const ImageHero = styled("img")(() => ({
  position: "absolute",
  width: "65%",
  bottom: 0,
  right: 0,
  height: "auto",
}));

export default function index() {
  return (
    <>
      <BoxWrapper>
        <Navigation />
        <ContentBanner />

        <ImageHero src="/images/hero.png" />
      </BoxWrapper>
    </>
  );
}
