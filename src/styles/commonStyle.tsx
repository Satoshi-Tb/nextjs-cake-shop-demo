import { createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";

const commonStyle = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: purple[200],
    },
  },
});

export default commonStyle;
