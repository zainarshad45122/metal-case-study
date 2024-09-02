import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import React, { ReactNode } from "react"

import { ChevronIcon } from "../../../assets"
import { sidebarBottomItems, sidebarTopItems } from "../../../utility/menuLists"
import PrimaryAppBar from "../AppBar/AppBar"
import { Drawer, DrawerHeader } from "./SideBarStyles"

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
          { sidebarTopItems.map( ( item ) => (
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
       
        <List sx={ { marginTop: "auto" } }>
          { sidebarBottomItems.map( ( item ) => (
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
