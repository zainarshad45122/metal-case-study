import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import MuiDrawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles"
import React, { ReactNode } from "react"

import { ChartIcon, ChevronIcon, ColumnsIcon, LogoutIcon, SearchIcon, SettingsIcon, WarningIcon } from "../../../assets"
import PrimaryAppBar from "../AppBar/AppBar"

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

const DrawerHeader = styled( "div" )( ( { theme } ) => ( {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing( 0, 1 ),
  ...theme.mixins.toolbar,
} ) )

const Drawer = styled( MuiDrawer, { shouldForwardProp: ( prop ) => prop !== "open" } )(
  ( { theme, open } ) => ( {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main, // Set the background color to the secondary color
    ...( open && {
      ...openedMixin( theme ),
      "& .MuiDrawer-paper": {
        ...openedMixin( theme ),
        backgroundColor: theme.palette.secondary.main, // Set the background color to the secondary color
      },
    } ),
    ...( ! open && {
      ...closedMixin( theme ),
      "& .MuiDrawer-paper": {
        ...closedMixin( theme ),
        backgroundColor: theme.palette.secondary.main, // Set the background color to the secondary color
      },
    } ),
  } ),
)

interface SideBarProps {
  children?: ReactNode;
  open: boolean;
  onMenuClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ( { children } ) => {
  const [ open, setOpen ] = React.useState( false )

  const handleDrawerOpen = () => {
    setOpen( true )
  }

  const handleDrawerClose = () => {
    setOpen( false )
  }

  return (
    <Box sx={ { display: "flex" } }>
      <CssBaseline />
      <PrimaryAppBar open={ open } handleDrawerOpen={ handleDrawerOpen } />
      <Drawer variant="permanent" open={ open }>
        <DrawerHeader sx={ { mt: 8 } }>
          <IconButton onClick={ handleDrawerClose }>
            <img
              srcSet={ ChevronIcon }
              src={ ChevronIcon }
              alt={ "Side Bar Open" }
              loading="lazy" />
          </IconButton>
        </DrawerHeader>
        <></>
        { /* Main Content List */ }
        <List sx={ { mt: 3 } }>
          { [ { title: "Chart", icon: ChartIcon }, { title: "Search", icon: SearchIcon }, { title: "Columns", icon: ColumnsIcon } ].map( ( item ) => (
            <ListItem key={ item.title } disablePadding sx={ { display: "block" } }>
              <ListItemButton
                sx={ {
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                } }
              >
                <ListItemIcon
                  sx={ {
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    maxWidth: 64,
                    justifyContent: "center",
                  } }
                >
                  <img
                    srcSet={ item.icon }
                    src={ item.icon }
                    alt={ item.title }
                    loading="lazy" />
                </ListItemIcon>
                <ListItemText primary={ item.title } sx={ { opacity: open ? 1 : 0 } } />
              </ListItemButton>
            </ListItem>
          ) ) }
        </List>
        { /* Bottom Icons List */ }
        <List sx={ { marginTop: "auto" } }>
          { [ { title: "Settings", icon: SettingsIcon }, { title: "Warning", icon: WarningIcon }, { title: "Logout", icon: LogoutIcon } ].map( ( item, index ) => (
            <ListItem key={ item.title } disablePadding sx={ { display: "block" } }>
              <ListItemButton
                sx={ {
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                } }
              >
                <ListItemIcon
                  sx={ {
                    minWidth: 0,
                    mr: open ? 3 : "auto",

                    justifyContent: "center",
                  } }
                >
                  <img
                    srcSet={ item.icon }
                    src={ item.icon }
                    alt={ item.title }
                    loading="lazy" />
                </ListItemIcon>
                <ListItemText primary={ item.title } sx={ { opacity: open ? 1 : 0 } } />
              </ListItemButton>
            </ListItem>
          ) ) }
        </List>
      </Drawer>
      <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
        <DrawerHeader />
        { children }
      </Box>
    </Box>
  )
}

export default SideBar
