import { createTheme } from "@mui/material/styles"

const theme = createTheme( {
  palette: {
    primary: {
      main: "#443794",
    },
    secondary: {
      main: "#F5F8FF",
    },
    text: {
      primary: "#5E6580",
    },
  },
  typography: {
    fontFamily: "CircularStd",
    h1: {
      fontSize: "22px",
      fontWeight: 450,
    },
  },
  
} )

export default theme
