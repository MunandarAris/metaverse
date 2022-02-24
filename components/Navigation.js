// MUI
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Hidden,
} from "@mui/material";
import { styled } from "@mui/system";

// Next Js
import Image from "next/image";

// Custom Style

// styling untuk menu link
const WrapMenuLink = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0rem 4rem",
  marginLeft: "4rem",
  [theme.breakpoints.down("md")]: {
    gap: "0rem 2rem",
  },
}));
const LinkMenu = styled(Typography)(() => ({
  textTransform: "uppercase",
  cursor: "pointer",
  "&:hover": {
    color: "#9F7FF3",
    textShadow: "0 0 30px gray",
    animation: ".3s",
  },
}));

// styling untuk icon
const BoxIconUserWrap = styled(Box)(() => ({
  backgroundColor: "#9F7FF3",
  display: "flex",
  padding: ".7rem .5rem .4rem .5rem",
  alignItems: "center",
  borderRadius: "3px",
  marginLeft: "auto",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 0 30px gray",
    animation: ".6s",
    transform: "scale(1.05)",
  },
}));

// styling untuk tool bar
const ToolbarCustom = styled(Toolbar)(() => ({
  alignItems: "center",
}));

// Styling untuk appbar
const AppBarCustom = styled(AppBar)(() => ({
  backgroundColor: "transparent",
}));

export default function Navigation() {
  return (
    <>
      <AppBarCustom elevation={0} position="static">
        <ToolbarCustom>
          <IconButton>
            <Image src={"/logo.png"} width={20} height={20} alt="Logo" />
          </IconButton>

          <Hidden mdDown>
            <WrapMenuLink>
              <LinkMenu variant="body2">home</LinkMenu>
              <LinkMenu variant="body2">nft's</LinkMenu>
              <LinkMenu variant="body2">benefits</LinkMenu>
              <LinkMenu variant="body2">resources</LinkMenu>
              <LinkMenu variant="body2">contact</LinkMenu>
            </WrapMenuLink>
          </Hidden>

          <BoxIconUserWrap>
            <Image src="/images/user-icon.png" width={20} height={20} />
          </BoxIconUserWrap>
        </ToolbarCustom>
      </AppBarCustom>
    </>
  );
}
