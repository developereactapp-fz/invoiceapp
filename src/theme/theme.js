import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      main: "#ff6b2c",
    },
    background: {
      default: "#f6f7f9",
      paper: "#ffffff",
    },
  },
});

export default theme;
