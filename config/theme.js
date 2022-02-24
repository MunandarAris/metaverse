import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#140639",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
    },
  },
});

export default theme;
