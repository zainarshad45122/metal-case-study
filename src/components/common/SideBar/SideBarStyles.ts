import MuiDrawer from "@mui/material/Drawer"
import { CSSObject, styled, Theme } from "@mui/material/styles"

const drawerWidth = 260

const openedMixin = ( theme: Theme ): CSSObject => ( {
  width: drawerWidth,
  transition: theme.transitions.create( "width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  } ),
  overflowX: "hidden",
} )

const closedMixin = ( theme: Theme ): CSSObject => ( {
  transition: theme.transitions.create( "width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  } ),
  overflowX: "hidden",
  width: `calc(${ theme.spacing( 7 ) } + 1px)`,
  [ theme.breakpoints.up( "sm" ) ]: {
    width: `calc(${ theme.spacing( 8 ) } + 1px)`,
  },
} )

export const DrawerHeader = styled( "div" )( ( { theme } ) => ( {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing( 0, 1 ),
  ...theme.mixins.toolbar,
} ) )

export const Drawer = styled( MuiDrawer, { shouldForwardProp: ( prop ) => prop !== "open" } )(
  ( { theme, open } ) => ( {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main,
    ...( open && {
      ...openedMixin( theme ),
      "& .MuiDrawer-paper": {
        ...openedMixin( theme ),
        backgroundColor: theme.palette.secondary.main,
      },
    } ),
    ...( ! open && {
      ...closedMixin( theme ),
      "& .MuiDrawer-paper": {
        ...closedMixin( theme ),
        backgroundColor: theme.palette.secondary.main,
      },
    } ),
  } )
)
