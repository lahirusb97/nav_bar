import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#655dff",
    },
    text: {
      primary: "#424662",
      secondary: "#7686bc",
    },
    action: {
      active: "#655dff",
      hover: "rgba(101, 93, 255, 0.1)",
    },
  },
});
export default theme;
