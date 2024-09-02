import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240

export const AppBar = styled( MuiAppBar, {
  shouldForwardProp: ( prop ) => prop !== "open",
} )<AppBarProps>( ( { theme, open } ) => ( {
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create( [ "width", "margin" ], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  } ),
  ...( open && {
    width: `calc(100% - ${ drawerWidth }px)`,
    transition: theme.transitions.create( [ "width", "margin" ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    } ),
  } ),
  boxShadow: "none",
} ) )

export const StyledTextField = styled( TextField )( ( { theme } ) => ( {
  backgroundColor: "white",
  borderRadius: "12px",
  width: "460px",
  height: "45px",
  marginLeft: "10%",
  padding: "2px 8px 6px 16px",
  "& input": {
    color: theme.palette.text.primary,
    padding: "6px 0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "& .MuiInputBase-input::placeholder": {
      color: theme.palette.text.primary,
      opacity: 1,
    },
    paddingRight: "8px",
  },
  // Hide StyledTextField on mobile screens
  [ theme.breakpoints.down( "sm" ) ]: {
    display: "none",
  },
} ) )

export const StyledIconButton = styled( IconButton )( {
  color: "text.primary",
  padding: "0 6px",
} )
