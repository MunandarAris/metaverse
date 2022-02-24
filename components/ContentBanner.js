// MUI
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

// atoms
import CardWoman from "../atoms/CardWoman";

// custom styling
const BoxWrapper = styled(Box)(() => ({
  marginTop: "1.5rem",
}));

const TextExperience = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  textTransform: "uppercase",
  textShadow: "0 0 30px gray",
  [theme.breakpoints.only("xs")]: {
    fontSize: "2rem",
  },
}));

const TextMetaverse = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#000000",
  WebkitTextStroke: "2px #9F7FF3",
  textShadow: "0 0 30px gray",
  [theme.breakpoints.only("xs")]: {
    fontSize: "2rem",
  },
}));

const TextDesc = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: "200",
  fontSize: "1rem",
  lineHeight: "1.3rem",
  margin: "2rem 0rem",
}));

const ButtonCustom = styled(Button)(() => ({
  backgroundColor: "#fff",
  color: "#000000",
  fontWeight: "bold",
  letterSpacing: ".1rem",
  padding: ".7rem 1rem",
  fontSize: ".8rem",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));

const TextUserUses = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1rem",
}));

const TextExperienceIt = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "200",
  fontSize: "1rem",
  marginTop: "-.3rem",
  [theme.breakpoints.only("xs")]: {
    backgroundColor: "#9F7FF3",
    padding: "0rem .2rem",
    marginTop: "0rem",
  },
}));

const BoxWrapperButton = styled(Box)(() => ({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
}));

export default function ContentBanner() {
  return (
    <Container maxWidth="xl">
      <BoxWrapper>
        <TextExperience variant="h2">experience the </TextExperience>

        <TextMetaverse variant="h2"> metaverse </TextMetaverse>

        <TextDesc variant="body1">
          Network of 3D virtual worlds focused <br /> on social connection
        </TextDesc>

        <BoxWrapperButton>
          <ButtonCustom>know more</ButtonCustom>

          <Box>
            <TextUserUses variant="body1">50M+</TextUserUses>
            <TextExperienceIt variant="body1">Experiencing it</TextExperienceIt>
          </Box>
        </BoxWrapperButton>

        <CardWoman />
      </BoxWrapper>
    </Container>
  );
}
